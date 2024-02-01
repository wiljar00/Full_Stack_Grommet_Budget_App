import { Box } from "grommet";
import EntryCard from "./EntryCard";

interface Entry {
  amount: number;
  description: string;
}

interface EntryFeedProps {
  entries: Entry[];
}

const EntryFeed: React.FC<EntryFeedProps> = ({ entries }) => (
    <Box direction="row" gap="small" align="center" width="100%">
        {entries.map((entry, index) => (
            <EntryCard key={index} entry={entry} />
        ))}
    </Box>
);

export default EntryFeed;