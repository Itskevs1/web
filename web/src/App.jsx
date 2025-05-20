// App.jsx:
import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

// General Components
import Navbar from './HomeContents/Navbar'; // Public Navbar
import Navbars from './AfterLoginContents/Navbars'; // Logged-in User Navbar
import HomeBody from './HomeContents/HomeBody';
import About from './HomeContents/About';
import Contact from './HomeContents/Contact';
import Frequently from './HomeContents/Frequently';
import Feedback from './HomeContents/Feedback';
import Getstarted from './HomeContents/GetStarted';
import Login from './LoginSignup/Login';
import Stores from './AfterLoginContents/Store';
import Store1 from './StoreContents/store1';
import Snacks from './FranceBistroStore/Snacks';
import Buffet from './FranceBistroStore/Buffet';
import BudgetMeals from './FranceBistroStore/Budgetmeals';
import Budgetsnacks from './FranceBistroStore/Budgetsnacks';
import Category1 from './AvailableToday/category1'; // This might be linked to the old '/availabletoday' logic. Review if its usage changes.
import Snackss from './hasOrder&Reserved/Snackss';
import Buffetss from './hasOrder&Reserved/Buffetss';
import Budgetmealss from './hasOrder&Reserved/Budgetmealss';
import Budgetsnackss from './hasOrder&Reserved/Budgetsnackss';
import Cart from './CartandOrder/Cart';
import { ToastContainer } from 'react-toastify';
import Checkout from './CartandOrder/Checkout';
import PayCash from './CartandOrder/PayCash';
import PlaceOrder from './CartandOrder/PlaceOrder';
import Order from './CartandOrder/Orders';
import VendorStores from './Vendor/VendorStores';
import VenCategory1 from './Vendor/VenCategory1';
import AddItems from './Records/AddItems';
import Category2 from './AvailableToday/category2'; // This might be linked to the old '/availabletoday' logic. Review if its usage changes.
import FasSnacks from './FASPeCC/FasSnacks';
import FasBuffet from './FASPeCC/FasBuffet';
import FasBudgetsnacks from './FASPeCC/FasBudgetsnacks';
import FasBudgetmeals from './FASPeCC/FasBudgetmeals';
import User from './Profile/User';

// Admin Components
import AdminNavbar from './Admin/AdminNavbar'; // Your dedicated Admin Navbar
import Dasboard from './Admin/Dasboard'; // Admin layout (might include sidebar)
import AdminAccountConfirmation from './Admin/AdminAccountConfirmation';
import AdminAccountVerified from './Admin/AdminAccountVerified';
import AdminOrders from './Admin/AdminOrders';
import AdminReservation from './Admin/AdminReservation';
import FaspeccCategory from './AllStores/Faspecccategory';
import FaspeccBuffet from './AllStores/FaspeccBuffet';
import FaspeccBudgetMeals from './AllStores/FaspeccBudgetMeals';
import FaspeccBudgetSnacks from './AllStores/FaspeccBudgetSnacks';
import FaspeccSnacks from './AllStores/FaspeccSnacks';
import ForgotPassword from './LoginSignup/ForgotPassword';
import FranceCategory from './AllStores/FranceCategory';
import FranceSnacks from './AllStores/FranceSnacks';
import FranceBuffets from './AllStores/FranceBuffets';
import FranceBudgetSnacks from './AllStores/FranceBudgetSnacks';
import FranceBudgetMeals from './AllStores/FranceBudgetMeals';


const App = () => {
  const location = useLocation();

  // Paths that use the "Navbars" (logged-in general navbar)
  // CHANGED: Replaced '/availabletoday' with '/available-today'
  const pathsUsingNavbars = [
    '/homepage', '/stores', '/available-today', // MODIFIED HERE
    '/buffet', '/budget-meals', '/budget-snacks', '/snacks',
    '/france-bistro-store', '/faspecc-store', '/orders', '/cart', '/checkout',
    '/pay', '/place-order', '/confirmation', '/cafeteria',
    '/vendor-france-bistro',
    '/faspecc-snacks', '/faspecc-budget-buffet',
    '/faspecc-budget-snacks', '/faspecc-budget-meals',
    '/user-profile', '/vendor-add-items', '/vendor-list-items', '/vendor-orders',
    '/france-bistro-buffets', '/france-bistro-budget-meals', '/france-bistro-budget-snacks', '/france-bistro-snacks',
    '/faspecc-store-category', '/choice-faspecc-budget-snacks', '/choice-faspecc-budget-meals', '/choice-faspecc-buffet', '/choice-faspecc-snacks', '/france-bistro-stores',

    '/choice-france-bistro-budget-snacks', '/choice-france-bistro-budget-meals', '/choice-france-bistro-buffet', '/choice-france-bistro-snacks',
  ];

  // Paths that should exclusively use AdminNavbar.jsx
  const pathsUsingAdminNavbar = [
    '/admin-account-confirmation',
    '/admin-account-verified',
    '/admin-orders',
    '/admin-reservation',
    '/admin-dashboard', // This is the base path for the admin dashboard

  ];

  const showAdminNavbar = pathsUsingAdminNavbar.includes(location.pathname);
  const isAnyAdminPath = location.pathname.startsWith('/admin-'); // General check for any admin path

  // Show Navbars (logged-in user navbar) if it's in its list AND NOT an admin path
  const showLoggedInUserNavbars = pathsUsingNavbars.includes(location.pathname) && !isAnyAdminPath;

  // Show public Navbar if NOT showing AdminNavbar, NOT showing LoggedInUserNavbars, and NOT an admin path
  // (except for those specific admin paths that use AdminNavbar)
  const showPublicNavbar = !showAdminNavbar && !showLoggedInUserNavbars && !isAnyAdminPath;


  return (
    <div>
      {/* Conditional rendering of Navbars */}
      {showAdminNavbar && <AdminNavbar />}
      {showPublicNavbar && <Navbar />}
      {showLoggedInUserNavbars && <Navbars />}

      <div className='app'>
        <Routes>
          {/* Publicly accessible routes */}
          <Route path='/about-us' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/faq' element={<Frequently />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/get-started' element={<Getstarted />} />
          <Route path='/auth' element={<Login />} />
          <Route path='/' element={<HomeBody />} />
          <Route path='/homepage' element={<HomeBody />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          {/* --- Routes primarily for Logged-in view (using Navbars) --- */}
          <Route path='/stores' element={<Stores />} />
          {/* CHANGED: Updated path to /available-today */}
          <Route path="/available-today" element={<Stores />} />


          <Route path='/snacks' element={<Snacks />} />
          <Route path='/buffet' element={<Buffet />} />
          <Route path='/budget-meals' element={<BudgetMeals />} />
          <Route path='/budget-snacks' element={<Budgetsnacks />} />

          <Route path='/france-bistro-store' element={<Category1 />} />
          <Route path='/faspecc-store' element={<Category2 />} />

          <Route path='/france-bistro-snacks' element={<Snackss />} />
          <Route path='/france-bistro-buffets' element={<Buffetss />} />
          <Route path='/france-bistro-budget-meals' element={<Budgetmealss />} />
          <Route path='/france-bistro-budget-snacks' element={<Budgetsnackss />} />

          <Route path='/cart' element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pay" element={<PayCash />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path='/orders' element={<Order />} />
          <Route path='/cafeteria' element={<VendorStores />} />
          <Route path='/vendor-france-bistro' element={<VenCategory1 />} />
          <Route path='/faspecc-snacks' element={<FasSnacks />} />
          <Route path='/faspecc-budget-buffet' element={<FasBuffet />} />
          <Route path='/faspecc-budget-snacks' element={<FasBudgetsnacks />} />
          <Route path='/faspecc-budget-meals' element={<FasBudgetmeals />} />
          <Route path='/user-profile' element={<User />} />

          {/* Records / Vendor Item Management Routes */}
          <Route path='/vendor-add-items' element={<AddItems />} />
          <Route path='/vendor-list-items' element={<AddItems />} />
          <Route path='/vendor-orders' element={<AddItems />} />
          <Route path='/add-items' element={<Navigate replace to="/vendor-add-items" />} />

          {/* === ADMIN SECTION === */}
          <Route path='/admin-dashboard' element={<Dasboard />} />
          <Route element={<Dasboard />}>
            <Route path='/admin-account-confirmation' element={<AdminAccountConfirmation />} />
            <Route path='/admin-account-verified' element={<AdminAccountVerified />} />
            <Route path='/admin-orders' element={<AdminOrders />} />
            <Route path='/admin-reservation' element={<AdminReservation />} />
          </Route>
          {/* End of Admin Section */}

          {/* Fallback for unmatched routes */}
          <Route path="*" element={<div style={{ padding: "20px", textAlign: "center" }}><h2>404 - Page Not Found</h2></div>} />

          <Route path='/france-bistro-stores' element={<FranceCategory />} />
          <Route path='/choice-france-bistro-snacks' element={<FranceSnacks />} />
          <Route path='/choice-france-bistro-buffet' element={<FranceBuffets />} />
          <Route path='/choice-france-bistro-budget-snacks' element={<FranceBudgetSnacks />} />
          <Route path='/choice-france-bistro-budget-meals' element={<FranceBudgetMeals />} />

          <Route path='/faspecc-store-category' element={<FaspeccCategory />} />
          <Route path='/choice-faspecc-buffet' element={<FaspeccBuffet />} />
          <Route path='/choice-faspecc-budget-meals' element={<FaspeccBudgetMeals />} />
          <Route path='/choice-faspecc-budget-snacks' element={<FaspeccBudgetSnacks />} />
          <Route path='/choice-faspecc-snacks' element={<FaspeccSnacks />} />
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;