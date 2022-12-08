import Footer from './components/Footer/Footer.jsx';
import Nav from './components/Nav/Nav.jsx';
import HomePage from './components/HomeHero/Home-Hero.jsx';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router className="app">
      <Nav />
      <HomePage />
      <div className="temp-class"></div>
      <Footer />
    </Router>
  );
}

export default App;
