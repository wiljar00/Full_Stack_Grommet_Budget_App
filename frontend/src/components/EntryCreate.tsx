import { useState } from 'react';
import { Box, Button, TextInput, DateInput } from 'grommet';

interface Entry {
  id: number;
  amount: number;
  description: string;
  date: string;
}

const EntryCreate: React.FC = () => {
  const [inputAmount, setInputAmount] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [entries, setEntries] = useState<Entry[]>([]);

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
    </Box>
  );
};

export default EntryCreate;