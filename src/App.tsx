import React from 'react';
import './App.css';
import { Grommet, Heading, Main } from 'grommet';

function App() {
  return (
    <div className="App">
      <Grommet>
        <Main pad='large'>
          <Heading level={1}>Budget Tracker App</Heading>
        </Main>
      </Grommet>
    </div>
  );
}

export default App;
