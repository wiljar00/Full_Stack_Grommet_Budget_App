import { Box, DataTable, Meter, Text } from "grommet";

const generateMonths = (months: string[]) => {
    const data = months.map((month, index) => ({
        name: month,
        percent: Math.random() * 100
    }))
    
    return data;
}

const BudgetTable = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
    const tableData = generateMonths(months);

    return (
        <Box align="center" pad="medium">
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
                data={tableData}
            />
        </Box>
    );
}

export default BudgetTable;