import React from 'react'
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';

class InvestmentPie extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let data = this.props.items
        debugger;
        const COLORS = ['#00D4A3', '#7078AA', '#7FDEBD', '8F9BC4', '#00A881', '#4C5080', '#FF8042', 'B5BDD8', '#03C084'];
        return (
            <div className="pie-container">
                <PieChart width={300} height={300} onMouseEnter={this.onPieEnter}>
                    <text x={150} y={150} textAnchor="middle" dominantBaseline="middle" class="pie-value">
                        {this.props.totalValue}
                    </text>
                    <Pie
                        data={data}
                        innerRadius={85}
                        outerRadius={120}
                        paddingAngle={5}
                        nameKey="name"
                        dataKey="value"
                        >
                        {data.map((entry, index) => 
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        )}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        )
    }
}

export default InvestmentPie