import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { BookDetails } from './pages/BookDetails';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className='dark min-h-screen bg-gray-700 text-gray-100'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}
