import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip, Legend,ResponsiveContainer } from 'recharts';
import moment from 'moment';

const LineChartComponent = ({data, lineName, lineType, line_dataKey }) => (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
          <LineChart width={500} height={300} data={data} margin={{ top: 20, right: 60, left: 30, bottom: 0 }}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="report_date" />
            <YAxis />
            <Tooltip 
              wrapperStyle={{ backgroundColor: "red" }}
              labelStyle={{ color: "#007bff" }}
              itemStyle={{ color: "black" }}
              formatter={function(value, name) {
                return `${value}`;
              }}
              labelFormatter={function(value) {
                return `Tarix: ${moment(value).format('DD.MM.YYYY')}`;
              }}
            />
            <Legend verticalAlign="top" height={36}/>
            <Line name={lineName} activeDot={{ strokeWidth: 2, r: 7 }} dot={false} type={lineType} dataKey={line_dataKey} stroke="black" strokeWidth={2} />
            <Tooltip />
          </LineChart>
      </ResponsiveContainer>
    </div>
)

export default LineChartComponent;