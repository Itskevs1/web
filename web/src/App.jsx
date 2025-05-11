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
import Store1 from './StoreContents/store1';
import Snacks from './FranceBistroStore/Snacks';
import Buffet from './FranceBistroStore/Buffet'; // Assuming this is a different Buffet component
import BudgetMeals from './FranceBistroStore/Budgetmeals';
import Budgetsnacks from './FranceBistroStore/Budgetsnacks';
import Category1 from './AvailableToday/category1';
import Snackss from './hasOrder&Reserved/Snackss';
import Buffetss from './hasOrder&Reserved/Buffetss'; // <-- IMPORT YOUR NEW COMPONENT
import Budgetmealss from './hasOrder&Reserved/Budgetmealss';
import Budgetsnackss from './hasOrder&Reserved/Budgetsnackss';
import Cart from './CartandOrder/Cart';
import { ToastContainer } from 'react-toastify';
import Checkout from './CartandOrder/Checkout';
import PayCash from './CartandOrder/PayCash';
import PlaceOrder from './CartandOrder/PlaceOrder';
import Confirmation from './CartandOrder/Confirmation';
import Order from './CartandOrder/Orders';
import VendorStores from './Vendor/VendorStores';

const App = () => {
  const location = useLocation();


  const loggedInPaths = [
    '/Homepage', '/stores', '/store1', '/store2', '/store3',
    '/store4', '/store5', '/store6', '/availabletoday', '/buffet',
    '/budget-meals', '/budget-snacks', '/snacks', '/category1',
    '/category2', '/buffets', '/budget-mealss', '/budget-snackss',
    '/snackss', '/orders', '/cart', '/buffetss', '/checkout', '/pay', '/place-order', '/confirmation', '/cafeteria', '/record'
  ];
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
          {/* Publicly accessible routes (generally use default Navbar) */}
          <Route path='/about-us' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/faq' element={<Frequently />} />
          <Route path='/feedback' element={<Feedback />} />

          {/* Routes that might have no navbar */}
          <Route path='/get-started' element={<Getstarted />} />
          <Route path='/auth' element={<Login />} />

          {/* Routes that use the logged-in Navbar (Navbars) */}
          <Route path='/stores' element={<Stores />} />
          <Route path="/availabletoday" element={<Stores />} /> {/* Consider if these two should be the same component */}
          <Route path='/store1' element={<Store1 />} />

          {/* FranceBistroStore Routes */}
          <Route path='/snacks' element={<Snacks />} /> {/* Original snacks */}
          <Route path='/buffet' element={<Buffet />} /> {/* Original buffet */}
          <Route path='/budget-meals' element={<BudgetMeals />} /> {/* Original budget-meals */}
          <Route path='/budget-snacks' element={<Budgetsnacks />} /> {/* Original budget-snacks */}

          <Route path='/category1' element={<Category1 />} />

          {/* hasOrder&Reserved Routes */}
          <Route path='/snackss' element={<Snackss />} /> {/* Snacks with Cart Functionality */}
          <Route path='/buffetss' element={<Buffetss />} /> {/* Buffet with Cart Functionality */}
          <Route path='/budget-mealss' element={<Budgetmealss />} /> {/* Budget Meals with Cart Functionality */}
          <Route path='/budget-snackss' element={<Budgetsnackss />} /> {/* Budget Snacks with Cart Functionality */}

          {/* Cart and Order Process Routes */}
          <Route path='/cart' element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pay" element={<PayCash />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path='/orders' element={<Order />} />

          {/* Get Started Context */}
          <Route path='/cafeteria' element={<VendorStores />} />

        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;