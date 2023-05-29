import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from './components/About';
import Service from './components/Service';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Landing from './components/Landing';
import Login from './components/Login';
import './css/bootstrap.min.css'
import './css/owl.carousel.min.css'
import './css/slicknav.css'
import './css/flaticon.css'
import './css/gijgo.css'
import './css/animate.min.css'
import './css/animated-headline.css'
import './css/magnific-popup.css'
import './css/magnific-popup.css'
import './css/fontawesome-all.min.css'
import './css/themify-icons.css'
import './css/slick.css'
import './css/nice-select.css'
import './css/style.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
              <Route path="/" element={ <Landing />} />
              <Route path="/about" element={ <About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/schedule" element={<Schedule />}/>
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/auth" element={<Login />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
