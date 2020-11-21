import React from 'react'

class CreatePortfolio extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="create-portfolio-container">
                <div className="create-portfolio-form-container">
                    <form>
                        <div className="create-portfolio-name">
                            <h3>Account name</h3>
                            <input type="text"/>
                        </div>
                        <h3>Select account type</h3>
                        <p>Choose between a taxable or retrement investing account.</p>
                        <div className="create-portfolio-radio">
                            <input type="radio" name="portfolio-type"/>
                            <div>
                                <p className="radio-title">Individual Investing</p>
                                <p>Open a taxable individual brokerage account</p>
                            </div>         
                        </div>
                        <div className="create-portfolio-radio">
                            <input type="radio" name="portfolio-type"/>
                            <div>
                                <p className="radio-title">Joint Investing</p>
                                <p>Open a taxable joint brokerage account. Please note that we will ask for the personal information for both people on the account.</p>
                            </div>         
                        </div>
                        <div className="create-portfolio-radio">
                            <input type="radio" name="portfolio-type"/>
                            <div>
                                <p className="radio-title">Retirement</p>
                                <p>Open a Traditional, Roth or SEP IRA or rollover an existing 401(k)</p>
                            </div>         
                        </div>
                        <div className="create-portfolio-radio">
                            <input type="radio" name="portfolio-type"/>
                            <div>
                                <p className="radio-title">Trust Account</p>
                                <p>Open an investment account for your trust.</p>
                            </div>         
                        </div>
                        <input type="submit" value="Create Portfolio" className="create-portfolio-submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreatePortfolio