import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            value: null}
    }

    updateState(data) {
        this.setState({
            value: "$"+data.activePayload[0].value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
        })
    }

    render() {
        const opacityZero = { opacity: 0 }
        return (
            <div className="chart-container">
                <div className="portfolio-chart">
                    <div className="portfolio-text">
                        <h1 className="portfolio-header">Value over time</h1>
                        <p className="portfolio-graph-value">{this.state.value}</p>
                    </div>
                    <LineChart width={800} height={250} data={this.props.data} onMouseMove={(data) => this.updateState(data)} onMouseLeave={()=> this.setState({value: null})}>
                        <Line type="monotone" dataKey="high" stroke="#00D4A3" strokeWidth={2} fill="#8884d8" dot={false}/>
                        <Tooltip contentStyle={opacityZero} cursor={{strokeWidth: 20, opacity: .2}}/>
                        <XAxis dataKey="label" hide={true} />
                        <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true} />
                    </LineChart>
                </div>
            </div>
        )
    }
}

export default Chart