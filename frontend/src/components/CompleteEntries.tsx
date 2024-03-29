import { Box, Button } from "grommet";
import { useState } from "react";
import EntryFeed from "./EntryFeed";


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
        <Box align="center" pad="medium">
            <h1>All Entries</h1>
            <p>Note: This searches the backend server for all records.</p>

            <Box direction="row" gap="small" margin={{ bottom: 'medium' }}>
                <Button label="Fetch" onClick={fetchEntries} primary />
            </Box>

            {loading && <p>Loading...</p>}

            {/* TODO: fix entry type once implemented */}
            <EntryFeed entries={entries} entryType={''}/>
        </Box>
    );
}

export default CompleteEntries;