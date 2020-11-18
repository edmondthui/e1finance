import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class Chart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="chart-container">
                <div className="portfolio-chart">
                    <LineChart width={800} height={250} data={[{test: 1},{ test: 2}]} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid fill="#12123D" border-radius="20px"/>
                    </LineChart>
                </div>
            </div>
        )
    }
}

export default Chart