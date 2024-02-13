import { useState } from 'react';
import { Box, Button, TextInput, DateInput, Layer, Text } from 'grommet';

interface Entry {
  id: number;
  amount: number;
  description: string;
  date: string;
}

const EntryCreate: React.FC = () => {
  const [inputAmount, setInputAmount] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputDate, setInputDate] = useState(new Date().toLocaleDateString('en-US'));
  const [entries, setEntries] = useState<Entry[]>([]);
  const [showError, setShowError] = useState(false);

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
        setShowError(true);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddEntry();
    }
  }

  const onDateChange = (value: any) => {
    setInputDate(value)
  }

  return (
    <Box align="center" pad="medium">
      <Box pad='medium' direction="row" gap="small">
        <TextInput
          placeholder="Enter amount..."
          value={inputAmount}
          onChange={(event) => setInputAmount(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <TextInput
          placeholder="Enter Description"
          value={inputDescription}
          onChange={(event) => setInputDescription(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <DateInput
          format="mm/dd/yyyy"
          value={inputDate}
          onChange={(event) => onDateChange(event.value)}
          onKeyDown={handleKeyDown}
        />
        <Button label="Add Entry" onClick={handleAddEntry} primary />
      </Box>

      {showError && (
        <Layer
            position="center"
            modal
            onClickOutside={() => setShowError(false)}
            onEsc={() => setShowError(false)}
        >
            <Box pad="medium" gap="small" width="medium">
                <Text alignSelf="center" color="status-error">
                    Please enter a valid number for the amount.
                </Text>
                <Button label="OK" onClick={() => setShowError(false)} />
            </Box>
        </Layer>
      )}
    </Box>
  );
};

export default EntryCreate;