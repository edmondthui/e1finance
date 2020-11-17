import React from 'react'

class PortfolioIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPortfolios()
    }

    render() {
        return (
            <div className="portfolio-index-container">
                <div className="portfolio-index-header">
                    <p className="header-name">Name</p>
                    <p className="header-value">Value</p>
                </div>
                {this.props.portfolios.map((portfolio) => (
                    <div key={portfolio.id} className="portfolio-index-item">
                        <div className="portfolio-name">
                        <img src="https://i.postimg.cc/ncKSVm8J/pie-image.png" alt="pie-image" height="40" width="40"/>
                        <p>{portfolio.portfolio_name}</p>
                        </div>
                        <p className="item-value">{"$" + portfolio.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                    </div>
                ))}

            </div>
        )
    }
}

export default PortfolioIndex