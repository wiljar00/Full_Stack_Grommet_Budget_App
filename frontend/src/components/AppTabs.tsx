import { Box, Tab, Tabs } from "grommet";
import ExpensePage from "./ExpensePage";
import IncomePage from "./IncomePage";
import CombinedPage from "./CombinedPage";
import BudgetTable from "./BudgetTable";
import SampleCard from "./SampleCard";
import EntrySearch from "./EntrySearch";
import EntryCreate from "./EntryCreate";
import CompleteEntries from "./CompleteEntries";

const AppTabs = () => {
    return (
        <Box fill>
            <Tabs flex>
            <Tab title="Expenses">
              <Box pad="medium">
                <ExpensePage />
              </Box>
            </Tab>
            <Tab title="Income">
              <Box pad="medium">
                <IncomePage />
              </Box>
            </Tab>
            <Tab title="Combined view">
              <CombinedPage />
            </Tab>
            <Tab title="Budget Summary">
              <Box pad="medium">
                <BudgetTable />
              </Box>
            </Tab>

            <Tab title="Card Samples">
              <Box pad="medium">
                <SampleCard />
              </Box>
            </Tab>

            <Tab title='Search Entries'>
              <Box align="center" pad="medium">
                <EntrySearch />
              </Box>
            </Tab>

            
            <Tab title='Create Entry'>
              <EntryCreate />
            </Tab>

            <Tab title='All Entries'>
              <Box align="center" pad="medium">
                <CompleteEntries />
              </Box>
            </Tab>

            <Tab title='TestForm'>
              <Box align="center" pad="medium">
                <EntryCreate />
              </Box>
            </Tab>

          </Tabs>
        </Box>
    );
}



export const Scrollable = () => <AppTabs />;

Scrollable.args = {
  full: true,
};

export default AppTabs;