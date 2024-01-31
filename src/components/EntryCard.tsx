import { Card, CardBody, CardFooter, Text } from "grommet";

const EntryCard = () => {
    return (
        <div>
            <Card>
                <CardBody pad="medium">
                    <Text>
                        Amount     -----     Date
                    </Text>
                </CardBody>
                <CardFooter pad="medium" background="background-contrast">
                    Footer
                </CardFooter>
            </Card>

            <Card>
                <CardBody pad="medium">
                    <Text>
                        Amount     -----     Date
                    </Text>
                </CardBody>
                <CardFooter pad="medium" background="background-contrast">
                    Footer
                </CardFooter>
            </Card>

            <Card>
                <CardBody pad="medium">
                    <Text>
                        Amount     -----     Date
                    </Text>
                </CardBody>
                <CardFooter pad="medium" background="background-contrast">
                    Footer
                </CardFooter>
            </Card>
        </div>
    );
}

export default EntryCard;