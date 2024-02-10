import React, { useState } from "react";
import InputForm from "./InputForm";
import { Box } from "grommet";

interface Entry {
    amount: number;
    description: string;
    date: string;
}

const IncomePage: React.FC = () => {
    const [incomeEntries, setIncomeEntries] = useState<Entry[]>([]);

  return (
    <Box align="center" pad="medium">
      <InputForm entries={incomeEntries} setEntries={setIncomeEntries} entryType="income" />
    </Box>
  );
}

export default IncomePage;
