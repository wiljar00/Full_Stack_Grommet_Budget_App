import { Box } from "grommet";
import EntryCard from "./EntryCard";

interface Entry {
    amount: number;
    description: string;
    date: string;
}

interface EntryFeedProps {
    entries: Entry[];
}

const EntryFeed: React.FC<EntryFeedProps> = ({ entries }) => (
    <Box direction="column" gap="small" align="center">
        {entries.map((entry, index) => (
            <EntryCard key={index} entry={entry} />
        ))}
    </Box>
);

export default EntryFeed;