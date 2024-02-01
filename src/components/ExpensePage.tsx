import { Text } from "grommet";
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
        </div>
    );
}

export default ExpensePage;