import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const ChartLayout = ({data})=>{
  const finalData = data;
    return( 
    <div className="mb-2 mr-3">

        {console.log(finalData)}
        <ResponsiveContainer width={'99%'} height={300}>
        <ComposedChart
          width={'99%'}
          height={600}
          data={finalData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" tick={false}></YAxis>
          <YAxis yAxisId="right" tick={false} axisLine={false}></YAxis>
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" type="monotone" dataKey="success" fill="#006400" >
            <LabelList dataKey="success" position="center" fill="#FFFFFF"/>
          </Bar>
          <Bar yAxisId="left" type="monotone" dataKey="failure" fill="#FF0000">
          <LabelList dataKey="failure" position="center" fill="#FFFFFF"/>
          </Bar>
          <Line yAxisId="right" dataKey="successRate" fill="#0000FF"  strokeWidth={2}>
          <LabelList dataKey="successRate" position="top" fill="#000000"/>
          </Line>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
    );
    }

export default ChartLayout;