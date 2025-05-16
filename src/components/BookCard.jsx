import React from 'react';
import { Link } from 'react-router-dom';

export function BookCard({ book }) {
  return (
    <div className="border rounded-md p-4 shadow hover:scale-105 duration-300 w-[260px] bg-gradient-to-br from-gray-100 to-indigo-200 cursor-pointer ">
      <h3 className="font-bold text-xl text-black">{book.title}</h3>
      <p className="text-gray-600">{book.author}</p>
      <p className="text-sm text-gray-500">{book.publicationYear}</p>
      <Link to={`/books/${book.id}`} className="text-blue-500 underline text-sm mt-2 inline-block">
        View Details
      </Link>
    </div>
  );
}
