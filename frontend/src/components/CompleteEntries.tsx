import { Box, Button } from "grommet";
import EntryCard from "./EntryCard";
import { useState } from "react";


interface Entry {
    id: number;
    amount: number;
    description: string;
    date: string;
}

const CompleteEntries = () => {
    const [loading, setLoading] = useState(false);
    const [entries, setEntries] = useState<Entry[]>([]);

    const fetchEntries = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:5000/api/entries`);
            const data: Entry[] = await response.json();
            setEntries(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching entry:', error);
            setEntries([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Search Entries</h1>

            <Box direction="row" gap="small" margin={{ bottom: 'medium' }}>
                <Button label="Search by ID" onClick={fetchEntries} primary />
            </Box>

            {loading && <p>Loading...</p>}

            {entries.map(entry => (
                <EntryCard key={entry.id} entry={entry} />
            ))}
        </div>
    );
}

export default CompleteEntries;