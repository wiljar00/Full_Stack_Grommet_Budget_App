import { Text } from "grommet";
import EntryCard from "./EntryCard";
import InputForm from "./InputForm";

const IncomePage = () => {
    return (
        <div>
            <Text alignSelf='center'>
                Add incomes. App should have a box for amount and date and totals
            </Text>
            <InputForm />
            <EntryCard />
        </div>
    );
}

export default IncomePage;