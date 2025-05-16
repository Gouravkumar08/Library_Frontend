import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="flex border border-b-zinc-300 space-x-8 items-center pl-3 py-3 bg-gradient-to-br from-blue-500  to-gray-black justify-evenly">
      <Link to="/" className="text-red-50 text-2xl text-center font-semibold hover:scale-105 duration-100">Home</Link>
      <Link to="/" className="text-red-50 text-2xl text-center font-semibold hover:scale-105 duration-100">Add book</Link>
    </nav>
  );
}
