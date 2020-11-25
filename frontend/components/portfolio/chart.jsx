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
            chart: null,
        }
        this.data = [];
        this.formattedChart = [];
        this.formatData = this.formatData.bind(this)
        this.formatDataArray = this.formatDataArray.bind(this)
    }

    componentDidMount() {
        this.props.fetchStocks()
        if (Array.isArray(this.props.tickers)) {
            this.props.tickers.forEach((ticker, idx)=> {
                fetchInterdayData(ticker).then(response => {
                    this.data.push(response)
                    this.formatDataArray(response, idx);
                })
            })
        }
        else {
            fetchInterdayData(this.props.tickers).then(response => {
                this.data.push(response)
                let dataObj = {price: (response[response.length-1].high + response[response.length-1].low) / 2, id: this.props.id}
                this.props.updateStock(dataObj);
                this.formatData();
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

    formatData() {
        for (let i = 0 ; i < this.data[0].length ; i ++) {
            let average = 0;
            let label = "";
            for (let j = 0 ; j<this.data.length; j++) {
                average += ((this.data[j][i].high + this.data[j][i].low) / 2) * this.props.quantities
                label = this.data[j][i].label
            }
            this.formattedChart.push({average: average, label: label})
        }
        this.setState({chart: this.formattedChart})
        this.formattedChart = [];
    }

    formatDataArray(response, idx) {
        let average = 0;
        let label;
        for (let i = 0 ; i<response.length; i++) {
            average = ((response[i].high + response[i].low) / 2) * this.props.quantities[idx]
            label = response[i].label
            this.formattedChart[i] ? this.formattedChart[i].average += average : this.formattedChart.push({average: average, label: label})
        }
        this.setState({chart: this.formattedChart})
    }

    componentDidUpdate(prevProps) {
        if (prevProps.quantities.length !== this.props.quantities.length ) {
            this.data = []
            this.formattedChart = []
            this.props.tickers.forEach((ticker, idx)=> {
                fetchInterdayData(ticker).then(response => {
                    this.data.push(response)
                    this.formatDataArray(response, idx);
                })
            })
        }
    }

    componentWillUnmount() {
        this.setState({chart: null})
    }


    render() {
        let chart;
        if (this.state.chart) {
            chart = <ResponsiveContainer>
                <LineChart height={300} data={this.state.chart} onMouseMove={(data) => this.updateState(data)} onMouseLeave={()=>this.setState({value: null, hover: false, chartX: null, label: null})}>
                    <Line type="monotone" dataKey="average" stroke="#00D4A3" strokeWidth={2} fill="#8884d8" dot={false} />
                    <XAxis dataKey="minute" hide={true} />
                    <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true} />
                    <Tooltip contentStyle={{opacity: 0}} cursor={{strokeWidth: 20, opacity: .2}}/>
                </LineChart>
            </ResponsiveContainer>
        }
        return (
            <div className="chart-container">
                <div className="portfolio-chart">
                    <div className="portfolio-text">
                        <h1 className="portfolio-header">Value over time</h1>
                        <p className="portfolio-graph-value">{this.state.value}</p>
                        <p className="portfolio-graph-label">{this.state.label}</p>
                    </div>
                    {chart}
                </div>
            </div>
        )
    }
}

export default Chart