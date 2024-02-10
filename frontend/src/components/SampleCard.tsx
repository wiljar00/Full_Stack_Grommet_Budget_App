import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Paragraph, ResponsiveContext } from "grommet";
import { useContext } from "react";


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

const SampleCard = () => {
    return (
        <Box align="center" pad="medium">
            <CardTemplate title={"Card 1"} />
            <CardTemplate title={"Card 2"}/>
            <CardTemplate title={"Card 3"}/>
        </Box>
    );
}

export default SampleCard;