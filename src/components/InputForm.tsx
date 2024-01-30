import React from "react";
import { Box, DateInput, TextInput } from "grommet";

const InputForm = () => {
    const [value, setValue] = React.useState('');

    return (
        <div>
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
            </Box>
        </div>
    );
}

export default InputForm;