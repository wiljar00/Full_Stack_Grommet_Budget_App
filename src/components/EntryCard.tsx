import { Card, CardBody, CardFooter, Text } from "grommet";

interface EntryCardProps {
    entry: {
        amount: number;
        description: string;
    };
}

const EntryCard: React.FC<EntryCardProps> = ({ entry }) => (
    <Card>
        <CardBody pad="medium">
            <Text>
                {`$ ${entry.amount.toFixed(2)} - ${entry.description}`}
            </Text>
        </CardBody>
        <CardFooter pad="medium" background="background-contrast">
            {`Description: ${entry.description}  -  date`}
        </CardFooter>
    </Card>
);

export default EntryCard;