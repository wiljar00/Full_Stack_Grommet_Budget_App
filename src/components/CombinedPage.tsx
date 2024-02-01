import React from "react";
// import { Box, Tab, Tabs, Text } from "grommet";
import IncomePage from "./IncomePage";
import ExpensePage from "./ExpensePage";

const CombinedPage: React.FC = () => {
  return (
    <div>
        {/* 
            This is ideally what I want to happen once I figure out how to combine entries across types. 

            <Box pad="medium">
                <Text alignSelf='center'>
                    This will show all expenses combined by months ordered by date. 
                </Text>

                
                <Tabs>
                    <Tab title="January" >
                        <Box pad="medium">
                            <Text alignSelf='center'>
                                entry feed.... 
                            </Text>
                        </Box>
                    </Tab>
                    <Tab title="Feburary" >
                        <Box pad="medium">
                            <Text alignSelf='center'>
                                entry feed.... 
                            </Text>
                        </Box>
                    </Tab>
                    <Tab title="March" >
                        <Box pad="medium">
                            <Text alignSelf='center'>
                                entry feed.... 
                            </Text>
                        </Box>
                    </Tab>
                </Tabs> 

            </Box>
        */}

      <h1>Combined Page</h1>
      <IncomePage />
      <ExpensePage />
    </div>
  );
}

export default CombinedPage;
