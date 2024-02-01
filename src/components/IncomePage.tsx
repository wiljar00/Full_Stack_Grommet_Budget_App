import React, { useState } from "react";
import InputForm from "./InputForm";
import EntryFeed from "./EntryFeed";

interface Entry {
    amount: number;
    description: string;
    date: string;
}

const IncomePage: React.FC = () => {
    const [incomeEntries, setIncomeEntries] = useState<Entry[]>([]);

  return (
    <div>
      <h1>Income Page</h1>
      <InputForm entries={incomeEntries} setEntries={setIncomeEntries} entryType="income" />
    </div>
  );
}

export default IncomePage;
