import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Mens from './components/Mens'; // Assuming Menspage.js is in the same directory
import Womens from './components/Womens'; // Assuming Womenspage.js is in the same directory
import Kids from './components/Kids';
import './App.css';
import Footer from './components/Footer';

const Layout = () => (
  <>
    <header className="sticky inset-x-0 top-0 z-10 shadow-md backdrop-blur-md">
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="mens" element={<Mens />} />
            <Route path="womens" element={<Womens />} />
            <Route path="kids" element={<Kids />} />
            <Route path="about" element={<div>About Page</div>} />
            <Route path="contact" element={<div>Contact Page</div>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;