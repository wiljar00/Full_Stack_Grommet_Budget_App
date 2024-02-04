import { useState, useEffect } from 'react';

interface Entry {
  id: number;
  amount: number;
  description: string;
  date: string;
}

const EntryDetail: React.FC = () => {
  const [entry, setEntry] = useState<Entry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/entries/1');
        const data: Entry = await response.json();

        setEntry(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching entry:', error);
        setLoading(false);
      }
    };

    fetchEntry();
  }, []);

  return (
    <div>
      <h1>Entry Detail</h1>
      {loading && <p>Loading...</p>}
      {entry && (
        <div>
          <p>ID: {entry.id}</p>
          <p>Amount: {entry.amount}</p>
          <p>Description: {entry.description}</p>
          <p>Date: {entry.date}</p>
        </div>
      )}
    </div>
  );
};

export default EntryDetail;