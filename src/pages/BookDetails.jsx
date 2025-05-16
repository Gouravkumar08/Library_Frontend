import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/books';

export function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [insight, setInsight] = useState('');
  const [error, setError] = useState('');
  const [loadingInsight, setLoadingInsight] = useState(false);

  useEffect(() => {
    api.get(`/${id}`)
      .then(res => setBook(res.data))
      .catch(() => setError('Book not found.'));
  }, [id]);

  const handleFetchInsight = async () => {
    setLoadingInsight(true);
    setError('');
    try {
      const res = await api.get(`/${id}/ai-insights`);
      console.log(res);
      setInsight(res.data.aiInsights);
    } catch (err) {
      setError('AI insight service failed.');
    } finally {
      setLoadingInsight(false);
    }
  };

  if (error) return <div className="p-4 text-red-600">{error}</div>;
  if (!book) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto m-16 ">
      <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
      <p className=" mb-1 text-gray-50"><strong >Author:</strong> {book.author}</p>
      <p className=" mb-1 text-gray-50"><strong>ISBN:</strong> {book.isbn}</p>
      <p className=" mb-1 text-gray-50"><strong>Year:</strong> {book.publicationYear}</p>
      <p className=" mb-4 text-gray-50"><strong>Description:</strong> {book.description}</p>

      <button
        onClick={handleFetchInsight}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loadingInsight ? 'Fetching insight...' : 'Get AI Insight'}
      </button>

      {insight && <p className="mt-4 text-black p-4 border rounded-lg bg-gray-300">
        
        {insight}
        
        </p>}
    </div>
  );
}
