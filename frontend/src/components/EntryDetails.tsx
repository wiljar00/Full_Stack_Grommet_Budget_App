import { useState } from 'react';
import { Box, Button, TextInput } from 'grommet';

interface Entry {
  id: number;
  amount: number;
  description: string;
  date: string;
}

const EntryDetail: React.FC = () => {
  const [entry, setEntry] = useState<Entry | null>(null);
  const [loading, setLoading] = useState(false);
  const [inputId, setInputId] = useState('');

  const fetchEntryById = async (id: number) => {
    try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/entries/${id}`);
        const data: Entry = await response.json();
        setEntry(data);
    } catch (error) {
        console.error('Error fetching entry:', error);
        setEntry(null);
    } finally {
        setLoading(false);
    }
  };

  const handleButtonClick = () => {
    const id = parseInt(inputId, 10);
    if (!isNaN(id)) {
        fetchEntryById(id);
    }
  };

  return (
    <Box align="center" pad="medium">
        <h1>Entry Detail</h1>
            <Box direction="row" gap="small">
                <TextInput
                    placeholder="Enter Entry ID"
                    value={inputId}
                    onChange={(event) => setInputId(event.target.value)}
                />
                <Button label="Fetch Entry" onClick={handleButtonClick} primary />
            </Box>
            {loading && <p>Loading...</p>}
            {entry && (
                <Box>
                    <p>ID: {entry.id}</p>
                    <p>Amount: {entry.amount}</p>
                    <p>Description: {entry.description}</p>
                    <p>Date: {entry.date}</p>
                </Box>
        )}
    </Box>
  );
};

export default EntryDetail;
