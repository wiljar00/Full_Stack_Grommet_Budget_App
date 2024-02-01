import React from "react";
import { Box, Tab, Tabs, Text } from "grommet";

const CombinedPage: React.FC = () => {
  return (
    <div>
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
    </div>
  );
}

export default CombinedPage;
