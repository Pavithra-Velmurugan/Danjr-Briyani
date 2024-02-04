import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import Review from './Components/Review';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Menu/>
      <About/>
      <Review/>
      <Contact/>
    </div>
  );
}

export default App;
