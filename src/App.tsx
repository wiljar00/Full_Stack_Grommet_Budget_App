import React from 'react';
import { Grommet, Header, Main, PageContent, PageHeader, Text } from 'grommet';

const theme = {
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
};

const AppBar = (props : any) => (
  <Header
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small"}}
    elevation="medium"
    {...props}
  />
)

function App() {
  return (
    <Grommet theme={theme} full>
      <Main pad='large'>
        <AppBar>
          {/* <Text size='large'>Budget Tracking App</Text> */}
        </AppBar>
        <PageContent>
          <PageHeader title="Welcome to Grommet!"/>
        </PageContent>
      </Main>
    </Grommet>
  );
}

export default App;
