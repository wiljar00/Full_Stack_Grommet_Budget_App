import React from "react";
import { Card, CardBody } from "grommet";

interface Entry {
  amount: number;
  description: string;
}

interface EntryFeedProps {
  entries: Entry[];
  entryType: string; // Add a prop for the entry type
}

const EntryFeed: React.FC<EntryFeedProps> = ({ entries, entryType }) => (
  <div>
    <h2>{entryType === 'expense' ? 'Expense Entries' : 'Income Entries'}</h2>
    {entries.map((entry, index) => (
      <Card key={index} width="medium" align="center" alignSelf='center' background="light-1" margin="small">
        <CardBody pad="medium">{`$ ${entry.amount.toFixed(2)} - ${entry.description}`}</CardBody>
      </Card>
    ))}
  </div>
);

export default EntryFeed;