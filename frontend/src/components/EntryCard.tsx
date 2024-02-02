import { Card, CardBody, CardFooter, Text } from "grommet";

interface EntryCardProps {
    entry: {
        amount: number;
        description: string;
        date: string
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
                {`${entry.date}`}
            </Text>
        </CardFooter>
    </Card>
);

export default EntryCard;