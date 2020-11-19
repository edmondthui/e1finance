import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

class Chart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const opacityZero = { opacity: 0 }
        debugger;
        return (
            <div className="chart-container">
                <div className="portfolio-chart">
                    <LineChart width={800} height={250} data={this.props.data} >
                        <Line type="monotone" dataKey="high" stroke="#00D4A3" strokeWidth={2} fill="#8884d8" dot={false}/>
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