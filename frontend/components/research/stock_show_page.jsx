import React from 'react'
import { withRouter } from 'react-router-dom'
// import PortfolioChart from './portfolio_value_chart_container'
// import PortfolioPie from './portfolio_value_pie_container'

class StockShowPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            render: false,
        }
    }

    componentDidMount() {
        this.props.fetchHolding(this.props.match.params.stockId)
        setTimeout(() => {
            this.props.fetchCompanyInfo(this.props.stock.ticker)
            this.props.fetchStockNews(this.props.stock.ticker)
            this.setState({render: true}) 
        }, 500)
    }


    render () {
        return (
            <div>
                
            </div>
        )
    }
}

export default withRouter(StockShowPage)