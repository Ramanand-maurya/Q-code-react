import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/icons.css';
import './css/slick.css';
import './App.css';
import './css/responsive.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './sitePages/HomePage';
import About from './sitePages/About';
import Contact from './sitePages/contact';
function App() {
  return (
    <>
      <div className="main-wrapper">
      <Router>
          <Header />
          <Routes>
              <Route exact path='/' element={< HomePage />}></Route>
              <Route exact path='/about' element={< About />}></Route>
              <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
          <Footer />
      </Router>
      </div>
    </>
  );
}

export default App;
