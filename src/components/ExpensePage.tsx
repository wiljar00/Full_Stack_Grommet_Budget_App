import { Text } from "grommet";
// import EntryCard from "./EntryCard";
import InputForm from "./InputForm";

const ExpensePage = () => {
    return (
        <div>
            <Text alignSelf='center'>
                Add expenses. 
                TODO: App should have a box/form for amount and date.
                Add total to page and app.
                When saving, update totals.
            </Text>
            <InputForm />
            {/* <EntryCard /> */}
        </div>
    );
}

export default ExpensePage;