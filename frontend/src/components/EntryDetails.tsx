import { useState } from 'react';
import { Box, Button, TextInput, DateInput } from 'grommet';
import EntryCard from './EntryCard'; 

interface Entry {
  id: number;
  amount: number;
  description: string;
  date: string;
}

const EntryDetail: React.FC = () => {
  const [searchedEntry, setSearchedEntry] = useState<Entry | null>(null);
  const [loading, setLoading] = useState(false);
  const [inputId, setInputId] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [entries, setEntries] = useState<Entry[]>([]);

  const fetchEntryById = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/entries/${id}`);
      const data: Entry = await response.json();
      setSearchedEntry(data);
    } catch (error) {
      console.error('Error fetching entry:', error);
      setSearchedEntry(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchById = () => {
    const id = parseInt(inputId, 10);
    if (!isNaN(id)) {
      fetchEntryById(id);
    }
  };

  const onDateChange = (value: any) => {
    setInputDate(value)
}

  const handleAddEntry = async () => {
    const amount = parseFloat(inputAmount);
    if (!isNaN(amount) && inputDescription.trim() !== '') {
      const newEntry: Entry = {
        id: entries.length + 1, // Auto-increment ID 
        amount,
        description: inputDescription,
        date: inputDate || new Date().toISOString(),
      };

      setEntries((prevEntries) => [...prevEntries, newEntry]);

      try {
        const response = await fetch('http://localhost:5000/api/entries', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEntry),
        });

        if (!response.ok) {
          console.error('Failed to add entry:', response.statusText);
        }
      } catch (error) {
        console.error('Error adding entry:', error);
      }
    }
  };

  return (
    <Box align="center" pad="medium">
      <h1>Search Entries</h1>

      <Box direction="row" gap="small" margin={{ bottom: 'medium' }}>
        <TextInput
          placeholder="Enter Entry ID"
          value={inputId}
          onChange={(event) => setInputId(event.target.value)}
        />
        <Button label="Search by ID" onClick={handleSearchById} primary />
      </Box>

      {loading && <p>Loading...</p>}
      {searchedEntry && <EntryCard entry={searchedEntry} />}

      <h1>Create New Entry</h1>
      <Box pad='medium' direction="row" gap="small">
        <TextInput
          placeholder="Enter Amount"
          value={inputAmount}
          onChange={(event) => setInputAmount(event.target.value)}
        />
        <TextInput
          placeholder="Enter Description"
          value={inputDescription}
          onChange={(event) => setInputDescription(event.target.value)}
        />
        <DateInput
          format="mm/dd/yyyy"
          value={inputDate}
          onChange={(event) => onDateChange(event.value)}
        />
        <Button label="Add Entry" onClick={handleAddEntry} primary />
      </Box>

      <h2>Recent Entries</h2>
      <Box direction="row" gap="small" margin={{ top: 'medium' }}>
        {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </Box>
    </Box>
  );
};

export default EntryDetail;