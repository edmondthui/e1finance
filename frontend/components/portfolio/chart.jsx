import React from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Tooltip from 'recharts/lib/component/Tooltip';
import { fetchInterdayData } from '../../util/IEX_api_util';


// let formattedChart = [];
// let quantity = []

class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null,
            hover: false,
            chartX: null,
            render: false,
        }
        this.data = [];
        this.formattedChart = [];
        // this.getValue = this.getValue.bind(this)
        // this.formatData = this.formatData.bind(this)
    }

    componentDidMount() {
        // if (this.props.holdings.tickers) {
        //     this.props.holdings.tickers.forEach(ticker => {
        //         fetchInterdayData(ticker)
        //     })
        // }
        // ^ this is what I would want to do but I am limited by an external API and don't want to pay money
        // It would do too many API calls and my account would get limited and I would have to pay for premium
        debugger;
        if (Array.isArray(this.props.tickers)) {
            let holdingsLength = this.props.tickers.length
            this.props.tickers.forEach((ticker, idx)=> {
                fetchInterdayData(ticker).then(response => {
                    this.data.push(response)
                    if (idx === holdingsLength-1) {
                        this.setState({render: true}) 
                    }
                })
            })
        }
        else {
            fetchInterdayData(this.props.ticker).then(response => {
                this.data.push(response)
                this.setState({render: true})
            })
        }

    }

    

    updateState(data) {
        if (data === null || !data.activePayload ) {
            return
        }
        this.setState({
            value: "$"+data.activePayload[0].value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
            hover: true,
            chartX: data.chartX,
        })
    }

    // getValue() {
    //     this.props.holdings.forEach((holding) => {
    //         if (Array.isArray(holding.quantity)) {
    //             holding.quantity.forEach(quantityNum => {
    //                 quantity.push(quantityNum)
    //             })
    //         }
    //         else {
    //             quantity.push(holding.quantity)
    //         }
    //     })
    // }

    // formatData(dataArray) {
    //     if (this.props.holdings) {
    //         if (Array.isArray(dataArray[0])) {
    //             let filteredPrices = dataArray.filter((el) => {
    //                 return el.length>0;
    //             });
    //             let newPrices = [];
    //             this.getValue();
    //             for (let i = 0 ; i < filteredPrices.length -1; i++ ) {
    //                 for (let j = 0 ; j < filteredPrices[i].length; j+=30) {
    //                     if (quantity[i+1]) {
    //                         if (i > 1) {
    //                             newPrices[j/30].high += (filteredPrices[i][j].high*quantity[i]) + (filteredPrices[i+1][j].high * quantity[i+1])
    //                         } 
    //                         else {
    //                             newPrices.push({ high: (filteredPrices[i][j].high*quantity[i]) + (filteredPrices[i+1][j].high * quantity[i+1]), label: filteredPrices[i][j].label, date: filteredPrices[i][j].date, minute: filteredPrices[i][j].minute })
    //                         }
    //                         // newPrices.push({ high: (filteredPrices[i][j].high*quantity[i]), label: filteredPrices[i][j].label, date: filteredPrices[i][j].date, minute: filteredPrices[i][j].minute })
    //                     }
    //                 }
    //             }
    //             quantity = []
    //             return newPrices;
    //         } 
    //     }
    //     else {
    //         return dataArray;
    //     }
    // }

    render() {
        debugger;
        // let verticalLine = null;
        // let filteredPrices
        // if (this.props.data !== undefined) {
        //     if (this.props.data.length > 0) {
        //         filteredPrices = this.props.data.filter((dataArray) => {
        //             return dataArray.length>0;
        //         });
        //         if (this.props.holdings) {
        //             if (this.props.holdings.length === 1) {
        //                 formattedChart = filteredPrices[0]
        //             }
        //             else {
        //                 formattedChart = this.formatData(this.props.data)
        //             }
        //         }
        //         else {
        //             formattedChart = this.props.data
        //         }
        //     }
        // }
        // if (this.state.hover) {
        //     verticalLine =  <line x1={this.state.chartX} y1={0} x2={this.state.chartX} y2={400} stroke="white" strokeWidth="20" opacity=".2"  />;
        // }
        if (this.state.render) {
            if (Array.isArray(this.props.quantities)) {
                for (let i = 0 ; i < this.data[0].length ; i ++) {
                    let sumHigh = 0;
                    let label = "";
                    for (let j = 0 ; j<this.data.length; j++) {
                        debugger;
                        sumHigh += this.data[j][i].high * this.props.quantities[j]
                        label = this.data[j][i].label
                    }
                    this.formattedChart.push({high: sumHigh, label: label})
                }
            }
            else {
                for (let i = 0 ; i < this.data[0].length ; i ++) {
                    let sumHigh = 0;
                    let label = "";
                    for (let j = 0 ; j<this.data.length; j++) {
                        debugger;
                        sumHigh += this.data[j][i].high * this.props.quantities
                        label = this.data[j][i].label
                    }
                    this.formattedChart.push({high: sumHigh, label: label})
                }
            }
            this.setState({chart: this.formattedChart})
            this.setState({render: false})
        }

        return (
            <div className="chart-container">
                <div className="portfolio-chart">
                    <div className="portfolio-text">
                        <h1 className="portfolio-header">Value over time</h1>
                        <p className="portfolio-graph-value">{this.state.value}</p>
                    </div>
                    <ResponsiveContainer>
                        <LineChart height={300} data={this.state.chart} onMouseMove={(data) => this.updateState(data)} onMouseLeave={()=>this.setState({value: null, hover: false, chartX: null})}>
                            {/* {verticalLine} */}
                            <Line type="monotone" dataKey="high" stroke="#00D4A3" strokeWidth={2} fill="#8884d8" dot={false} />
                            <XAxis dataKey="minute" hide={true} />
                            <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true} />
                            <Tooltip contentStyle={{opacity: 0}} cursor={{strokeWidth: 20, opacity: .2}}/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    }
}

export default Chart