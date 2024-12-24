import './App.css'
import { Home } from './components/home'
import { NavBar } from './components/navbar'
import { About } from './components/about'
import { Beneficies } from './components/beneficies'
import { Orcamento } from './components/orcamentos'
import { BrowserRouter as Router } from 'react-router-dom'

import BackgroundMusic from './assets/audio/background-music.mp3'
import { useEffect, useRef } from 'react'

function App() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5
      audioRef.current.play().catch((error) => {
        console.error('Erro ao tentar tocar a música:', error)
      })
    }
  }, [])

  return (
    <div className='App'>
      <Router>
        <audio
          ref={audioRef}
          src={BackgroundMusic}
          autoPlay
          loop
          muted={false}
        />
        <NavBar />
        <Home />
        <About />
        <Beneficies />
        <Orcamento />
      </Router>
    </div>
  )
}

export default App
