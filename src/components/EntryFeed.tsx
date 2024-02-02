import React from "react";
import { Box, Card, CardBody } from "grommet";
import EntryCard from "./EntryCard";

interface Entry {
  amount: number;
  description: string;
  date: string;
}

interface EntryFeedProps {
  entries: Entry[];
  entryType: string; 
}

const EntryFeed: React.FC<EntryFeedProps> = ({ entries, entryType}) => (
  <Box direction="column" gap="small" align="center">
    {entries.map((entry, index) => (
        <EntryCard key={index} entry={entry}/>
    ))}
  </Box>
);

export default EntryFeed;