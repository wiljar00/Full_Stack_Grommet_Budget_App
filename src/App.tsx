import React, { useState } from 'react';
import { Box, Button, Grommet, Header, Main, PageContent, Tab, Tabs, Text, grommet } from 'grommet';
import { Moon, Sun } from 'grommet-icons';
import { deepMerge } from 'grommet/utils';
import SampleCard from './components/SampleCard';
import BudgetTable from './components/BudgetTable';

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
          <Tabs>
          <Tab title="Expenses">
              <Box pad="medium">
                <Text alignSelf='center'>
                  Add expenses. 
                  TODO: App should have a box/form for amount and date.
                  Add total to page and app.
                  When saving, update totals.
                </Text>
                <Text>
                  expense     date
                </Text>
                <Text>
                  expense     date
                </Text>
              </Box>
            </Tab>
            <Tab title="Income">
              <Box pad="medium">
                <Text alignSelf='center'>
                  Add incomes. App should have a box for amount and date and totals
                </Text>
                <Text>
                  income     date
                </Text>
                <Text>
                  income     date
                </Text>
              </Box>
            </Tab>
            <Tab title="Combined view">
              <Box pad="medium">
                <Text alignSelf='center'>
                  This will show all expenses combined by months ordered by date. 
                </Text>
                <Tabs>
                  <Tab title="January" >
                    <Box pad="medium">
                      <Text>
                        expense     date
                      </Text>
                      <Text>
                        income     date
                      </Text>
                      <Text>
                        expense...
                      </Text>
                      <Text>
                        income     date
                      </Text>
                    </Box>
                  </Tab>
                </Tabs>
              </Box>
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

          </Tabs>

        </PageContent>
      </Main>
    </Grommet>
  );
}

export default App;
