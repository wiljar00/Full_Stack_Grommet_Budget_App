import { Box, Button, TextInput } from "grommet";
import { useState } from "react";
import EntryCard from "./EntryCard";

interface Entry {
    id: number;
    amount: number;
    description: string;
    date: string;
}

const EntrySearch = (imputId: any) => {
    const [inputId, setInputId] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchedEntry, setSearchedEntry] = useState<Entry | null>(null);

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

    return (
        <div>
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
        </div>
    );
}

export default EntrySearch;