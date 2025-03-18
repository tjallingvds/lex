'use client';

import { useState, useEffect } from 'react';

export function FlaskTest() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch('/api/flask?path=/api/health');
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        console.error('Error fetching data from Flask backend:', err);
        setError('Failed to connect to Flask backend');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-bold mb-4">Flask Backend Connection</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div className="text-red-500">
          <p>Error: {error}</p>
          <p className="text-sm mt-2">
            Make sure the Flask backend is running on http://localhost:5000
          </p>
        </div>
      ) : (
        <div>
          <p className="text-green-500 font-medium">
            ✅ Connected to Flask backend
          </p>
          <pre className="bg-gray-100 p-2 mt-2 rounded overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}