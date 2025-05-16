import React, { useEffect, useState, useRef } from 'react';
import api from '../api/books';
import { BookCard } from '../components/BookCard';

export function Home() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const debounceTimeout = useRef(null);

  const fetchAllBooks = async () => {
    try {
      const res = await api.get('');
      setBooks(res.data);
      setError('');
    } catch (err) {
      console.error('Fetch all books error:', err);
      setError('Failed to load books');
    }
  };

  const searchBooks = async (searchTerm) => {
    try {
      if (searchTerm.trim() === '') {
        fetchAllBooks();
        return;
      }
      const res = await api.get('/search', {
        params: {
          title: searchTerm,
          // author: searchTerm, // Uncomment if you want to search by author too
        },
      });
      setBooks(res.data);
      setError('');
    } catch (err) {
      console.error('Search books error:', err);
      setError('Failed to search books');
    }
  };

  useEffect(() => {
    // Debounce search input by 400ms
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      if (query.trim() === '') {
        fetchAllBooks();
      } else {
        searchBooks(query);
      }
    }, 400);

    return () => clearTimeout(debounceTimeout.current);
  }, [query]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-red-50 mb-6">Library</h1>

      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="min-w-full border p-2 rounded mb-6 text-black"
        autoFocus
      />

      {error && <p className="text-red-600 text-center">{error}</p>}

      <div className="flex flex-wrap gap-9 justify-around">
        {books.length === 0 ? (
          <p className="text-gray-600">No books found.</p>
        ) : (
          books.map((book) => <BookCard key={book.id} book={book} />)
        )}
      </div>
    </div>
  );
}
