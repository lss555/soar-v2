import Footer from './components/Footer/Footer.jsx';
import Nav from './components/Nav/Nav.jsx';
import Blog from './components/blog/blog.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router className="app">
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='/blog' element={<Blog />} exact />
      </Routes>
      <div className="temp-class"></div>
      <Footer />
    </Router>
  );
}

export default App;
