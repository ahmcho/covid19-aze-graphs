import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip, Legend,ResponsiveContainer } from 'recharts';
import moment from 'moment';

const TestsAll = ({data}) => (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
          <LineChart width={500} height={300} data={data} margin={{ top: 20, right: 60, left: 30, bottom: 0 }}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="report_date" />
            <YAxis />
            <Legend verticalAlign="top" height={36}/>
            <Line name="Ümumi testlərin sayı" type="tests_all" dataKey="tests_all" stroke="#664434" />
            <Tooltip 
              wrapperStyle={{ backgroundColor: "red" }}
              labelStyle={{ color: "green" }}
              itemStyle={{ color: "#664434" }}
              formatter={function(value, name) {
                return `${value}`;
              }}
              labelFormatter={function(value) {
                return `Tarix: ${moment(value).format('DD.MM.YYYY')}`;
              }}
            />
          </LineChart>
      </ResponsiveContainer>
    </div>
)

export default TestsAll;