import React from 'react';
import { Grommet, Heading, Main } from 'grommet';

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <Main pad='large'>
        <Heading level={1}>Budget Tracker App</Heading>
      </Main>
    </Grommet>
  );
}

export default App;
