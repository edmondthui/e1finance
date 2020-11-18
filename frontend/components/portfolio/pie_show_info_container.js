import {connect} from 'react-redux'
import PortfolioPieInfo from './portfolio_pie_info'
import {fetchPies, fetchHoldings, fetchPortfolios} from '../../actions/portfolio_actions'


const mapStateToProps = (state, ownProps) => {
    debugger;
    return {
        items: Object.values(state.entities.holdings), // change from portfolios to pies
        user: Object.values(state.entities.users)[0],
        pie: state.entities.pies[ownProps.match.params.pieId],
        type: "Pie Show"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHoldings: (pieId) => dispatch(fetchHoldings(pieId)), //change to fetch pies
        fetchPies: (portfolioId) => dispatch(fetchPies(portfolioId)),
        fetchPortfolios: () => dispatch(fetchPortfolios())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPieInfo)