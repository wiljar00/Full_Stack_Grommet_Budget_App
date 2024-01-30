import React, { useState } from "react";
import { Box, Button, Card, CardBody, DateInput, Heading, TextInput } from "grommet";



const InputForm = () => {
    const [value, setValue] = React.useState('');
    const [amounts, setAmount] = useState<number[]>([]);

    const addAmount = () => {
        const amount = parseFloat(value);
        if (!isNaN(amount)) {
            setAmount(prevAmounts => [...prevAmounts, amount]);
            setValue('');
        }
    } 

    const total = amounts.reduce((acc, curr) => acc + curr, 0)

    return (
        <div>
            <Box direction="column">
                <Heading level={2} alignSelf="center">Entries</Heading>
                <br />
                <Card width="medium" align="center" alignSelf='center' background="light-1" margin="small">
                    <CardBody pad="medium">{ `$ ${total.toFixed(2)}` }</CardBody>
                </Card>
                <Box direction="row">
                    <TextInput
                        placeholder="Enter an amount"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                    <DateInput
                        format="mm/dd/yyyy"
                        value={(new Date()).toISOString()}
                        onChange={({ value }) => {}}
                    />
                    <Button primary label="Add"
                         
                        onClick={addAmount}
                    />
                </Box>
            </Box>
        </div>
    );
}

export default InputForm;