import React from 'react'
import { Tooltip, LineChart, Line, XAxis, YAxis } from 'recharts';


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
        })
        debugger;
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
        formattedChart = []
        if (this.props.data !== undefined) {
            if (this.props.data.length > 0) {
                formattedChart = this.formatData(this.props.data)
            }
        }
        return (
            <div className="chart-container">
                <div className="portfolio-chart">
                    <div className="portfolio-text">
                        <h1 className="portfolio-header">Value over time</h1>
                        <p className="portfolio-graph-value">{this.state.value}</p>
                    </div>
                    <LineChart width={800} height={300} data={formattedChart} onMouseMove={(data) => this.updateState(data)} onMouseLeave={()=>this.setState({value: null})}>
                        <Tooltip cursor={{strokeWidth: 20, opacity: .2}} contentStyle={{ opacity: 0 }} />
                        <Line type="monotone" dataKey="high" stroke="#00D4A3" strokeWidth={2} fill="#8884d8" dot={false}/>
                        <XAxis dataKey="minute" hide={true} />
                        <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true} />
                    </LineChart>
                </div>
            </div>
        )
    }
}

export default Chart