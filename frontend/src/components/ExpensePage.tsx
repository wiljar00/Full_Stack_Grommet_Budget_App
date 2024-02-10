import React, { useState } from "react";
import InputForm from "./InputForm";
import { Box } from "grommet";

interface Entry {
    amount: number;
    description: string;
    date: string;
}

const ExpensePage: React.FC = () => {
    const [expenseEntries, setExpenseEntries] = useState<Entry[]>([]);

  return (
    <Box align="center" pad="medium">
      <InputForm entries={expenseEntries} setEntries={setExpenseEntries} entryType="expense" />
    </Box>
  );
}

export default ExpensePage;
