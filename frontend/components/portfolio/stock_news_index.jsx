import React from 'react'
import { withRouter } from 'react-router-dom'

class StockIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div className="portfolio-index-container">
                    <div className="portfolio-index-header">
                        <p className="header-name">Price</p>
                        <p className="header-value">Daily Change</p>
                    </div>

                    <div className="portfolio-index-item">
                        <h1>test</h1>                        
                    </div>

                </div>

                <br/>

                <div className="portfolio-index-container">
                    <div className="portfolio-index-header">
                        <p className="header-name">BONUS SECTION</p>
                    </div>

                    <div className="portfolio-index-item">
                        <h1>BONUS fetch stock news</h1>                        
                    </div>
                    <div className="portfolio-index-item">
                        <h1>BONUS fetch stock news</h1>                        
                    </div>
                    <div className="portfolio-index-item">
                        <h1>BONUS fetch stock news</h1>                        
                    </div>
                    <div className="portfolio-index-item">
                        <h1>BONUS fetch stock news</h1>                        
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(StockIndex)