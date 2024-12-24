import './App.css'
import { Home } from './components/home'
import { NavBar } from './components/navbar'
import { About } from './components/about'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Home />
        <About />
      </Router>
    </div>
  )
}

export default App
