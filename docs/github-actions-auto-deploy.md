# Optional: GitHub Actions auto-deploy

The live site is currently published from the `gh-pages` branch using the
`npm run deploy` script — that is fully working and requires no extra setup.

This file is an **alternative** that makes GitHub rebuild and republish the site
automatically on every push to `main`.

## To enable it

1. Grant your `gh` token the `workflow` scope (it is missing from the current token):

   ```bash
   gh auth refresh -h github.com -s workflow
   ```

   Authorize the device code, then re-authenticate as before.

2. Move the companion YAML (`docs/github-actions-auto-deploy.yml`) to
   `.github/workflows/deploy.yml`:

   ```bash
   mkdir -p .github/workflows
   mv docs/github-actions-auto-deploy.yml .github/workflows/deploy.yml
   ```

3. Push it and let the workflow run:

   ```bash
   git add -A && git commit -m "Enable Pages auto-deploy workflow" && git push
   ```

4. Point GitHub Pages at the Actions source instead of the branch:

   ```bash
   gh api --method PUT repos/MMH-4ALL/diabetes-awareness/pages \
     -f "build_type=workflow"
   ```

## Note on the workflow itself

It uses `actions/configure-pages@v5`, which injects the correct `base` path for
your Pages URL at build time. The repo's `vite.config.js` already sets
`base: './'`, so the build works from any subpath either way.
