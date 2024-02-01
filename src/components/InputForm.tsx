import React, { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { Box, Button, Card, CardBody, DateInput, Heading, Layer, Text, TextInput } from "grommet";
import EntryFeed from "./EntryFeed";

interface Entry {
    amount: number;
    description: string;
    date: string;
}

interface InputFormProps {
    entries: Entry[];
    setEntries: Dispatch<SetStateAction<Entry[]>>;
    entryType: string;
}

const InputForm: React.FC<InputFormProps> = ({ entries, setEntries, entryType }) => {
    const [inputAmount, setInputAmount] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputDate, setInputDate] = useState(new Date().toLocaleDateString('en-US'));
    // const [entries, setEntries] = useState<Entry[]>([]);
    const [showError, setShowError] = useState(false);

    const addEntry = () => {
        const amount = parseFloat(inputAmount);
        if (!isNaN(amount) && inputDescription.trim() !== '') {
            const newEntry: Entry = { amount, description: inputDescription, date: inputDate };
            setEntries(prevEntries => [...prevEntries, newEntry]);
            setInputAmount('');
            setInputDescription('');
            setInputDate('');
        } else {
            setShowError(true);
        }
    }

    const onDateChange = (value : any) => {
        // This is to fix a typescript error. Need to research better ways to handle this. 
        setInputDate(value)
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
                <Heading level={2} alignSelf="center">`${entryType}`</Heading>

                <br />

                <Card width="medium" align="center" alignSelf='center' background="light-3" margin="small">
                    <CardBody pad="medium">{`Total: $ ${total.toFixed(2)}`}</CardBody>
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
                        value={inputDate}
                        onChange={( event ) => onDateChange(event.value)}
                    />
                    <Button primary label="Add" onClick={addEntry} />
                </Box>

                <EntryFeed entries={entries} entryType={entryType} />
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
        </div>
    );
}

export default InputForm;
