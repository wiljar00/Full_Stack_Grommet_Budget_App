import { Dispatch, SetStateAction } from "react";
import { Box, Card, CardBody, Heading} from "grommet";
import EntryFeed from "./EntryFeed";
import EntryCreate from "./EntryCreate";

interface Entry {
    amount: number;
    description: string;
    date: string;
}

interface InputFormProps {
    entries: Entry[];
    setEntries: Dispatch<SetStateAction<Entry[]>>;
    entryType: string;
}

const InputForm: React.FC<InputFormProps> = ({ entries, setEntries, entryType }) => {



    function formatTitle(string : string) {
        return string.charAt(0).toUpperCase() + string.slice(1) + ' Entries';
    }

    const total = entries.reduce((acc, entry) => acc + entry.amount, 0);

    return (
        <Box align="center" pad="medium">
            <Box direction="column">
                <Heading level={2} alignSelf="center">{`${formatTitle(entryType)}`}</Heading>

                <br />

                <Card width="medium" align="center" alignSelf='center' background="light-3" margin="small">
                    <CardBody pad="medium">{`Total: $ ${total.toFixed(2)}`}</CardBody>
                </Card>

                {/* <Box direction="row">
                    <TextInput
                        placeholder="Enter amount..."
                        value={inputAmount}
                        onChange={event => setInputAmount(event.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <TextInput
                        placeholder="Enter description..."
                        value={inputDescription}
                        onChange={event => setInputDescription(event.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <DateInput
                        format="mm/dd/yyyy"
                        value={inputDate}
                        onChange={(event) => onDateChange(event.value)}
                    />
                    <Button primary label="Add" onClick={addEntry} />
                </Box> */}
                <EntryCreate />

                <EntryFeed entries={entries} entryType={entryType}/>
            </Box>

            {/* {showError && (
                <Layer
                    position="center"
                    modal
                    onClickOutside={() => setShowError(false)}
                    onEsc={() => setShowError(false)}
                >
                    <Box pad="medium" gap="small" width="medium">
                        <Text alignSelf="center" color="status-error">
                            Please enter a valid number for the amount.
                        </Text>
                        <Button label="OK" onClick={() => setShowError(false)} />
                    </Box>
                </Layer>
            )} */}
        </Box>
    );
}

export default InputForm;
