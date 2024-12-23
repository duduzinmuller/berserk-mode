
import './App.css';
import { NavBar } from './components/navbar';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
     <NavBar/>
     </Router>
    </div>
  );
}

export default App;
