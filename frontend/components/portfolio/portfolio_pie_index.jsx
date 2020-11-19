import React from 'react'
import { withRouter } from 'react-router-dom'
import PortfolioChart from './portfolio_value_chart_container'
import PortfolioPie from './portfolio_value_pie_container'

class PortfolioPieIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let paramsId = this.props.match.params.pieId ? this.props.match.params.pieId : ""
        this.props.action(paramsId)
    }

    handleClick(itemId) {
        this.props.history.push(this.props.match.url+`/${itemId}`);
    }

    render() {
        return (
            <div className="portfolio-content-container">
                <div className="portfolio-pie-container">
                    <div className="portfolio-pie">
                        <PortfolioPie/>
                    </div>
                </div>
                <div className="portfolio-main-content">
                    <PortfolioChart/> 
                    <h1 className="slice-title">Markets</h1>
                    <div className="portfolio-index-container">
                        <div className="portfolio-index-header">
                            <p className="header-name">Name</p>
                            <p className="header-value">Value</p>
                        </div>
                        {this.props.items.map((item) => (
                            <div key={item.id} className="portfolio-index-item" onClick={()=>this.handleClick(item.id)}>
                                <div className="portfolio-name">
                                <img src="https://i.postimg.cc/ncKSVm8J/pie-image.png" alt="pie-image" height="40" width="40"/>
                                <p>{item.portfolio_name} {item.pie_name} {item.stock_name}</p>
                                </div>
                                <p className="item-value">{"$" + item.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PortfolioPieIndex)