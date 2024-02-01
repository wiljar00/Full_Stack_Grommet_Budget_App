import React, { useState } from "react";
import InputForm from "./InputForm";
import EntryFeed from "./EntryFeed";

interface Entry {
    amount: number;
    description: string;
    date: string;
}

const ExpensePage: React.FC = () => {
    const [expenseEntries, setExpenseEntries] = useState<Entry[]>([]);

  return (
    <div>
      <h1>Expense Page</h1>
      <InputForm entries={expenseEntries} setEntries={setExpenseEntries} entryType="expense" />
    </div>
  );
}

export default ExpensePage;
