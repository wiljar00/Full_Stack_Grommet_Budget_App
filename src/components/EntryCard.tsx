import { Card, CardBody, CardFooter, Text } from "grommet";

interface EntryCardProps {
    entry: {
        amount: number;
        description: string;
    };
}

const EntryCard: React.FC<EntryCardProps> = ({ entry }) => (
    <Card width='large' alignSelf="center" >
        <CardBody pad="medium" alignSelf="center">
            <Text>
                {`$ ${entry.amount.toFixed(2)}`}
            </Text>
        </CardBody>
        <CardFooter pad="medium" background="background-contrast" >
            <Text>
                {`Description: ${entry.description}`}
            </Text>
            <Text>
                {/* need to pass in date with entry */}
                {`Date: 11/11/2024`}
            </Text>
        </CardFooter>
    </Card>
);

export default EntryCard;