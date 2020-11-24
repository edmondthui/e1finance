import React from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Tooltip from 'recharts/lib/component/Tooltip';
import { fetchInterdayData } from '../../util/IEX_api_util';

class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null,
            label: null,
            hover: false,
            chartX: null,
            render: false,
        }
        this.data = [];
        this.formattedChart = [];
    }

    componentDidMount() {
        this.props.fetchStocks()
        if (Array.isArray(this.props.tickers)) {
            let holdingsLength = this.props.tickers.length
            this.props.tickers.forEach((ticker, idx)=> {
                fetchInterdayData(ticker).then(response => {
                    this.data.push(response)
                }).then(() => {
                    if (idx === holdingsLength-1) {
                        this.data.forEach(data => {
                            let dataObj = {price: (data[data.length-1].high + data[data.length-1].low) / 2, id: this.props.stocks.filter(stock => stock.ticker === ticker)[0].id}
                            this.props.updateStock(dataObj);
                        })
                        this.setState({render: true})
                    }
                })
            })
        }
        else {
            fetchInterdayData(this.props.tickers).then(response => {
                this.data.push(response)
                let dataObj = {price: response[response.length-1].high, id: this.props.id}
                this.props.updateStock(dataObj);
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
            label: data.activePayload[0].payload.label
        })
    }

    render() {
        if (this.state.render) {
            if (Array.isArray(this.props.quantities)) {
                for (let i = 0 ; i < this.data[0].length ; i ++) {
                    let sumHigh = 0;
                    let label = "";
                    for (let j = 0 ; j<this.data.length; j++) {
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
                        <p className="portfolio-graph-label">{this.state.label}</p>
                    </div>
                    <ResponsiveContainer>
                        <LineChart height={300} data={this.state.chart} onMouseMove={(data) => this.updateState(data)} onMouseLeave={()=>this.setState({value: null, hover: false, chartX: null, label: null})}>
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