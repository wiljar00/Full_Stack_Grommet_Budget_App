import React, { useContext, useState } from 'react';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Grommet, Header, Heading, Main, PageContent, PageHeader, Paragraph, ResponsiveContext, Tab, Tabs, Text, grommet } from 'grommet';
import { Moon, Sun } from 'grommet-icons';
import { deepMerge } from 'grommet/utils';

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

// Notes on the typescript error:
// For an object, you need to declare the type as:
// {text} : {text:any}
// For objects with more props:
// {a,b} : {a:any, b:any}

const CardTemplate = ({ title } : { title:any }) => {
  const size = useContext(ResponsiveContext);

  return (
    <Card>
      <CardHeader pad="medium">
        <Heading level={2} margin="none">
          {title}
        </Heading>
      </CardHeader>
      <CardBody pad="medium">
        <Paragraph maxLines={size === "small" ? 3 : undefined}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          porttitor non nulla ac vehicula. Aliquam erat volutpat. Mauris auctor
          faucibus est at mattis. Aliquam a enim ac nisi aliquam consectetur et
          ac velit. Mauris ut imperdiet libero.
        </Paragraph>
      </CardBody>
      <CardFooter pad="medium" background="background-contrast">
        Footer
      </CardFooter>
    </Card>
  );
};

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
          <PageHeader title="Welcome to Grommet!"/>

            <Tabs>
              <Tab title="January">
                <Box pad="medium">January</Box>
              </Tab>
              <Tab title="Feburary">
                <Box pad="medium">Feburary</Box>
              </Tab>
            </Tabs>

          <CardTemplate title={"Card 1"} />
          <CardTemplate title={"Card 2"}/>
          <CardTemplate title={"Card 3"}/>
        </PageContent>
      </Main>
    </Grommet>
  );
}

export default App;
