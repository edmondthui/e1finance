import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';


let formattedChart = [];
let chartValue;

class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.formatData = this.formatData.bind(this)
        this.state = {
            value: null
        }
    }

    updateState(data) {
        this.setState({
            value: "$"+data.activePayload[0].value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
        })
    }


    formatData(dataArray) {
        if (dataArray === undefined) {
            return dataArray
        }
        if (this.props.holdings) {
            if (Array.isArray(dataArray[0])) {
                let filteredPrices = dataArray.filter(function (el) {
                    return el.length>0;
                });
                let newPrices = [];
                for (let i = 0 ; i < filteredPrices.length -1; i++ ) {
                    let quantity1 = this.props.holdings[i].quantity
                    let quantity2 = this.props.holdings[i+1].quantity
                    for (let j = 0 ; j < filteredPrices[i].length; j+=30) {
                        if (quantity1 !== undefined && quantity2 !== undefined) {
                            newPrices.push({ high: (((filteredPrices[i][j].high*quantity1) + (filteredPrices[i+1][j].high*quantity2))), minute: filteredPrices[i][j].minute })
                        }
                        else {

                        }
                    }
                }
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
        const opacityZero = { opacity: 0 }
        return (
            <div className="chart-container">
                <div className="portfolio-chart">
                    <div className="portfolio-text">
                        <h1 className="portfolio-header">Value over time</h1>
                        <p className="portfolio-graph-value">{this.state.value}</p>
                    </div>
                    <LineChart width={800} height={250} data={formattedChart} onMouseMove={(data) => this.updateState(data)} onMouseLeave={()=>this.setState({value: null})}>
                    {/* <LineChart width={800} height={250} data={formattedChart} onMouseLeave={()=> this.setState({value: null})}> */}
                        <Tooltip contentStyle={opacityZero} cursor={{strokeWidth: 20, opacity: .2}}/>
                        <Line type="monotone" dataKey="high" stroke="#00D4A3" strokeWidth={2} fill="#8884d8" dot={false}/>
                        <XAxis dataKey="label" hide={true} />
                        <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true} />
                    </LineChart>
                </div>
            </div>
        )
    }
}

export default Chart