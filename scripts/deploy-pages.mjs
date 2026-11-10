/**
 * One-command GitHub Pages deployment.
 *
 * Builds the Vite app, then publishes `dist/` to the `gh-pages` branch,
 * which is the branch GitHub Pages is configured to serve from.
 *
 * Usage:  npm run deploy
 *
 * Requires: git + gh (already authenticated with the `repo` scope)
 */
import { execSync } from 'node:child_process'
import { existsSync, rmSync, cpSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(process.cwd())
const dist = join(root, 'dist')
const tmp = join(root, '.deploy-tmp')

const run = (cmd, cwd = root) => {
  console.log(`\x1b[36m›\x1b[0m ${cmd}`)
  execSync(cmd, { stdio: 'inherit', cwd, shell: process.platform === 'win32' })
}

const cleanup = () => {
  try {
    execSync(`git worktree remove --force "${tmp}"`, { stdio: 'ignore', cwd: root, shell: true })
  } catch {
    /* worktree may not exist */
  }
  if (existsSync(tmp)) rmSync(tmp, { recursive: true, force: true })
}

try {
  console.log('\n\x1b[1m\x1b[36m▸ Building site\x1b[0m')
  run('npm run build')

  if (!existsSync(dist)) {
    console.error('✗ Build output not found at dist/')
    process.exit(1)
  }

  console.log('\n\x1b[1m\x1b[36m▸ Preparing gh-pages branch\x1b[0m')
  cleanup()
  run(`git worktree add "${tmp}" gh-pages`)

  console.log('\n\x1b[1m\x1b[36m▸ Copying build output\x1b[0m')
  run(`git rm -rf . --quiet`, tmp)
  cpSync(dist, tmp, { recursive: true })
  // Prevent Jekyll from processing the output
  writeFileSync(join(tmp, '.nojekyll'), '')

  console.log('\n\x1b[1m\x1b[36m▸ Publishing\x1b[0m')
  run('git add -A', tmp)

  const changes = execSync('git status --porcelain', {
    cwd: tmp,
    shell: process.platform === 'win32',
  })
    .toString()
    .trim()

  if (!changes) {
    console.log('  (build output identical — nothing to publish)')
  } else {
    run('git commit -m "deploy: update GitHub Pages build"', tmp)
    run('git push origin gh-pages', tmp)
  }

  console.log(
    '\n\x1b[1m\x1b[32m✓ Deployed.\x1b[0m https://mmh-4all.github.io/diabetes-awareness/\n'
  )
} catch (err) {
  console.error('\n✗ Deploy failed:', err.message)
  process.exitCode = 1
} finally {
  cleanup()
}
