import { Box, DataTable, Meter, Text } from "grommet";

const BudgetTable = () => {
    return (
        <div>
            <DataTable
                columns={[
                {
                    property: 'name',
                    header: <Text>Name</Text>,
                    primary: true,
                },
                {
                    property: 'percent',
                    header: 'Complete',
                    render: datum => (
                    <Box pad={{ vertical: 'xsmall' }}>
                        <Meter
                        values={[{ value: datum.percent }]}
                        thickness="small"
                        size="small"
                        />
                    </Box>
                    ),
                },
                ]}
                data={[
                    { name: 'Alan', percent: 20 },
                    { name: 'Bryan', percent: 30 },
                    { name: 'Chris', percent: 40 },
                    { name: 'Eric', percent: 80 },
                ]}
            />
        </div>
    );
}

export default BudgetTable;