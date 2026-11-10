import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import WhatIsDiabetes from './components/WhatIsDiabetes.jsx'
import CompareTypes from './components/CompareTypes.jsx'
import FeedbackLoopSimulator from './components/FeedbackLoopSimulator.jsx'
import Complications from './components/Complications.jsx'
import ActionManagement from './components/ActionManagement.jsx'
import MythFact from './components/MythFact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="grain min-h-screen bg-white text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <WhatIsDiabetes />
        <CompareTypes />
        <FeedbackLoopSimulator />
        <Complications />
        <ActionManagement />
        <MythFact />
      </main>
      <Footer />
    </div>
  )
}
