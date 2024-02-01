import React, { useState } from "react";
import { Box, Button, Card, CardBody, DateInput, Heading, TextInput } from "grommet";

interface Entry {
    amount: number;
    description: string;
}

const InputForm = () => {
    const [inputAmount, setInputAmount] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [entries, setEntries] = useState<Entry[]>([]);
  
    const addEntry = () => {
      const amount = parseFloat(inputAmount);
      if (!isNaN(amount) && inputDescription.trim() !== '') {
        const newEntry: Entry = { amount, description: inputDescription };
        setEntries(prevEntries => [...prevEntries, newEntry]);
        setInputAmount('');
        setInputDescription('');
      }
    }
  
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        addEntry();
      }
    }
  
    const total = entries.reduce((acc, entry) => acc + entry.amount, 0);
  
    return (
        <div>
            <Box direction="column">
                <Heading level={2} alignSelf="center">Entries</Heading>
                <br />
                <Card width="medium" align="center" alignSelf='center' background="light-1" margin="small">
                    <CardBody pad="medium">{`$ ${total.toFixed(2)}`}</CardBody>
                </Card>
                <Box direction="row">
                    <TextInput
                        placeholder="Enter amount..."
                        value={inputAmount}
                        onChange={event => setInputAmount(event.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <TextInput
                        placeholder="Enter description..."
                        value={inputDescription}
                        onChange={event => setInputDescription(event.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <DateInput
                        format="mm/dd/yyyy"
                        value={(new Date()).toISOString()}
                        onChange={({ value }) => { }}
                    />
                    <Button primary label="Add" onClick={addEntry} />
                </Box>
                {entries.map((entry, index) => (
                    <Card key={index} width="medium" align="center" alignSelf='center' background="light-1" margin="small">
                        <CardBody pad="medium">{`$ ${entry.amount.toFixed(2)} - ${entry.description}`}</CardBody>
                    </Card>
                ))}
            </Box>
        </div>
    );
}

export default InputForm;