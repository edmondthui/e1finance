import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

class Chart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const testdata = [
            {
              name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
            },
            {
              name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
            },
            {
              name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
            },
            {
              name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
            },
            {
              name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
            },
            {
              name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
            },
            {
              name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
            },
          ];

        const opacityZero = { opacity: 0 }

        return (
            <div className="chart-container">
                <div className="portfolio-chart">
                    <LineChart width={800} height={250} data={testdata}  >
                        <Line type="monotone" dataKey="pv" stroke="#00D4A3" strokeWidth={2} fill="#8884d8"/>
                        <Tooltip contentStyle={opacityZero}/>
                        <XAxis dataKey="label" hide={true} />
                        <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true} />
                    </LineChart>
                </div>
            </div>
        )
    }
}

export default Chart