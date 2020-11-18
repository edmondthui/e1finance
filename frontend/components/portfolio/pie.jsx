import React from 'react'
import { PieChart, Pie, Sector, Cell, } from 'recharts';

class InvestmentPie extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const testdata = [
            { name: 'Test 1', value: 400 },
            { name: 'Test 2', value: 300 },
            { name: 'Test 3', value: 300 },
            { name: 'Test 4', value: 200 },
          ];
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        return (
            <div className="pie-container">
                <PieChart width={300} height={300} onMouseEnter={this.onPieEnter}>
                    <Pie
                        data={testdata}
                        innerRadius={85}
                        outerRadius={120}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        >
                        {testdata.map((entry, index) => 
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        )}
                    </Pie>
                </PieChart>
            </div>
        )
    }
}

export default InvestmentPie