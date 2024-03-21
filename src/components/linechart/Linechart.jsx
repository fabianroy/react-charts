import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Linechart = () => {

    const productUsers = [
        { id: 0, name: "1GB", users: 4779 },
        { id: 1, name: "10GB", users: 8998 },
        { id: 2, name: "100GB", users: 1559 },
        { id: 3, name: "200GB", users: 2558 },
        { id: 4, name: "500GB", users: 4878 },
        { id: 5, name: "1TB", users: 11098 },
        { id: 6, name: "2TB", users: 9983 },
        { id: 7, name: "5TB", users: 2073 },
        { id: 8, name: "10TB", users: 1081 },
        { id: 11, name: "100TB", users: 394 },
        { id: 12, name: "100TB", users: 1058 },
        { id: 13, name: "Unlimited", users: 219 }
    ];


    return (
        <div>
            <h3 className='text-center mb-20 text-3xl'>Our Users</h3>
            <div>
            <LineChart width={1200} height={400} data={productUsers}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip />
                <Line dataKey='users' stroke="orange"></Line>
            </LineChart>
            </div>
        </div>
    );
};

export default Linechart;   