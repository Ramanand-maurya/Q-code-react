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
import Career from './sitePages/Career';
import GoToTop from './components/GoToTop';
import ServiceDetail from './sitePages/ServiceDetail';
import ServiceDetailPage from './sitePages/ServiceDetailPage';
function App() {
  return (
    <>
      <div className="main-wrapper">
      <Router> 
        <GoToTop />
          <Header />
          <Routes>
              <Route exact path='/' element={< HomePage />}></Route>
              <Route exact path='/about' element={< About />}></Route>
              <Route exact path='/contact' element={< Contact />}></Route>
              <Route exact path='/career' element={< Career />}></Route>
              <Route exact path='/ServiceDetail/:serviceId' element={<ServiceDetail />}></Route>
              <Route exact path='/career/:jobId' element={< Career />}></Route>
              <Route exact path='/ServiceDetailPage/:serviceId/:serDetPageId' element={< ServiceDetailPage />}></Route>
          </Routes>
          <Footer />
      </Router>
      </div>
    </>
  );
}

export default App;
