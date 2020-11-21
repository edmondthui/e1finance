import React from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';


let formattedChart = [];
let chartValue;
let value = 0;
let multiplier1 = 1;
let multiplier2 = 1;

class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null,
            hover: false,
            chartX: null,
        }
        this.getValue = this.getValue.bind(this)
        this.formatData = this.formatData.bind(this)
    }

    updateState(data) {
        if (!data.activePayload) {
            return
        }
        this.setState({
            value: "$"+data.activePayload[0].value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
            hover: true,
            chartX: data.chartX,
        })
    }


    getValue() {
        this.props.holdings.forEach(holding => value += holding.value)
    }

    formatData(dataArray) {
        if (this.props.holdings) {
            if (Array.isArray(dataArray[0])) {
                let filteredPrices = dataArray.filter(function (el) {
                    return el.length>0;
                });
                let newPrices = [];
                this.getValue();
                for (let i = 0 ; i < filteredPrices.length -1; i++ ) {
                    for (let j = 0 ; j < filteredPrices[i].length; j+=30) {
                        multiplier1 = value / filteredPrices[0][0].high
                        multiplier2 = value / filteredPrices[0+1][0].high
                        newPrices.push({ high: (filteredPrices[i][j].high*multiplier1) + (filteredPrices[i+1][j].high * multiplier2), label: filteredPrices[i][j].label, date: filteredPrices[i][j].date, minute: filteredPrices[i][j].minute })
                    }
                }
                multiplier1 = 1
                multiplier2 = 1
                value = 0;
                return newPrices;
            } 
        }
        else {
            return dataArray;
        }
    }

    updateChartValue(data) {
        chartValue = "$"+data.activePayload[0].value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    }


    render() {
        formattedChart = [];
        let verticalLine = null;
        let dot = null;
        if (this.props.data !== undefined) {
            if (this.props.data.length > 0) {
                formattedChart = this.formatData(this.props.data)
            }
        }
        if (this.state.hover) {
            verticalLine =  <line x1={this.state.chartX} y1={0} x2={this.state.chartX} y2={400} stroke="white" strokeWidth="20" opacity=".2"  />;
        }
        return (
            <div className="chart-container">
                <div className="portfolio-chart">
                    <div className="portfolio-text">
                        <h1 className="portfolio-header">Value over time</h1>
                        <p className="portfolio-graph-value">{this.state.value}</p>
                    </div>
                    <ResponsiveContainer>
                        <LineChart height={300} data={formattedChart} onMouseMove={(data) => this.updateState(data)} onMouseLeave={()=>this.setState({value: null, hover: false, chartX: null})}>
                            {verticalLine}
                            {dot}
                            <Line type="monotone" dataKey="high" stroke="#00D4A3" strokeWidth={2} fill="#8884d8" dot={false} />
                            <XAxis dataKey="minute" hide={true} />
                            <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    }
}

export default Chart