import React, { useState } from 'react';
import { Box, Button, Grommet, Header, Main, PageContent, Tab, Tabs, Text, grommet } from 'grommet';
import { Moon, Sun } from 'grommet-icons';
import { deepMerge } from 'grommet/utils';
import SampleCard from './components/SampleCard';
import BudgetTable from './components/BudgetTable';
import ExpensePage from './components/ExpensePage';
import IncomePage from './components/IncomePage';
import CombinedPage from './components/CombinedPage';
import EntryDetail from './components/EntryDetails';
import EntrySearch from './components/EntrySearch';
import AppTabs from './components/AppTabs';

const theme = deepMerge(
  grommet,
  {
    global: {
      color: {
        brand: '#228BE6'
      },
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
      },
    },
  }
);

const AppBar = (props : any) => (
  <Header
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small"}}
    elevation="medium"
    {...props}
  />
)

function App() {
  const [dark, setDark] = useState(false);

  return (
    <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
      <Main pad='large'>
        <AppBar>
          <Text size='large'>Budget Tracking App</Text>
          <Button 
            a11yTitle={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            icon={dark ? <Moon /> : <Sun />}
            onClick={() => setDark(!dark)}
            tip={{
              content: (
                <Box
                  pad="small"
                  round="small"
                  background={dark ? "dark-1" : "light-3"}
                >
                  {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </Box>
              ),
              plain: true,
            }}
          />
        </AppBar>
        <PageContent>
          <br />
          <AppTabs />
        </PageContent>
      </Main>
    </Grommet>
  );
}

export default App;
