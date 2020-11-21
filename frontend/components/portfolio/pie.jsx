import React from 'react'
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';
import { withRouter } from 'react-router-dom'


class InvestmentPie extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            active: null,
            value: null,
            name: null
        }
        this.renderActiveShape = this.renderActiveShape.bind(this)
        this.onPieEnter = this.onPieEnter.bind(this)
        this.onPieLeave = this.onPieLeave.bind(this)
    }

    onPieEnter(e, index) {
        this.setState({
            active: index,
            value: e.value,
            name: e.name
        })
    }

    onPieLeave(e) {
        this.setState({
            active: null,
            value: null,
            name: null
        })
    }

    renderActiveShape(props) {
        const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
        return (
            <>
              <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius+20}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
              />
            </>
        );
    }

    render() {
        let button;
        let data = this.props.items
        const COLORS = ['#00D4A3', '#7078AA', '#7FDEBD', '8F9BC4', '#00A881', '#4C5080', '#FF8042', 'B5BDD8', '#03C084'];
        let value = this.state.value ? "$"+this.state.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : this.props.totalValue



        if (this.props.match.params) {
            button = <div className="crud-button-continer"><button className="crud-create-button" onClick={()=> this.props.openModal('create portfolio')}>Create Portfolio</button><button className="crud-delete-button">Remove Portfolio</button></div>
        }
        if (this.props.match.params.portfolioId) {
            button = <div className="crud-button-continer"><button className="crud-create-button">Create Pie</button><button className="crud-delete-button">Rebalance</button><button className="crud-delete-button">Delete Pie</button></div>
        }
        if (this.props.match.params.pieId) {
            button = <div className="crud-button-continer"><button className="crud-create-button">Buy Stock</button><button className="crud-delete-button">Rebalance</button><button className="crud-delete-button">Sell Stock</button></div>
        }
        if (this.props.match.params.stockId) {
            button = <div className="crud-button-continer"><button className="crud-create-button">Buy Stock</button><button className="crud-delete-button">Rebalance</button><button className="crud-delete-button">Sell Stock</button></div>
        }
        
        return (
            <div className="pie-container">
                <div className="pie-title-container">
                    <h3 className="pie-section-title">{this.state.name}</h3>
                </div>
                <PieChart width={300} height={300} >
                    <text x={150} y={150} textAnchor="middle" dominantBaseline="middle" className="pie-value">
                        {value}
                    </text>
                    <Pie
                        onMouseEnter={this.onPieEnter}
                        onMouseLeave={this.onPieLeave}
                        activeIndex={this.state.active}
                        activeShape={this.renderActiveShape}
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

                </PieChart>
                {button}
            </div>
        )
    }
}

export default withRouter(InvestmentPie)