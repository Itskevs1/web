import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './HomeContents/About';
import Navbar from './HomeContents/Navbar';
import HomeBody from './HomeContents/HomeBody';
import Contact from './HomeContents/Contact';
import Frequently from './HomeContents/Frequently';
import Feedback from './HomeContents/Feedback';
import Getstarted from './HomeContents/GetStarted';
import Login from './LoginSignup/Login';
import Navbars from './AfterLoginContents/Navbars';
import Stores from './AfterLoginContents/Store';

const App = () => {
  const location = useLocation();

  // Define paths that indicate user is logged in (or using authenticated layout)
  const loggedInPaths = ['/Homepage', '/stores', '/store1', '/store2', '/store3', '/store4', '/store5', '/store6', '/availabletoday'];
  const isLoggedInRoute = loggedInPaths.includes(location.pathname);

  return (
    <div>
      {/* Conditional Navigation Bar */}
      {!isLoggedInRoute && <Navbar />}
      {isLoggedInRoute && <Navbars />}

      {/* HomeBody shows only on '/' or '/Homepage' */}
      {(location.pathname === '/' || location.pathname === '/Homepage') && <HomeBody />}

      <div className='app'>
        <Routes>
          <Route path='/about-us' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/faq' element={<Frequently />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/get-started' element={<Getstarted />} />
          <Route path='/auth' element={<Login />} />
          <Route path='/stores' element={<Stores />} />
          <Route path="/availabletoday" element={<Stores />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
