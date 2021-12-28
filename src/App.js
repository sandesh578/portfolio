import About from './components/About/About';
import './App.css';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Service from './components/Service/Service';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Service />
      <Project />
      <Blog />
      <Contact />
      <Footer />
      <Router>
        <Routes>
          <Route exact to='/' element={<Home />} />
          <Route to='/about' element={<About />} />
          <Route to='/contact' element={<Contact />} />
          <Route to='/blog' element={<Blog />} />
          <Route to='/projects' element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
