import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import DeletePortfolio from './delete_portfolio_container'
import CreatePortfolio from './create_portfolio_container'
import CreatePie from './create_pie_container'
import DeletePie from './delete_pie_container'
import BuyStock from './buy_stock_container'
import SellStock from './sell_stock_container'

class Modal extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.modal) {
      return null;
    }
    let component;
    switch (this.props.modal) {
      case 'createPortfolio':
        component = <CreatePortfolio/>;
        break;
      case 'deletePortfolio':
        component = <DeletePortfolio/>;
        break;
      case 'createPie':
        component = <Route path="/dashboard/:portfolioId" component={CreatePie} />
        break;
      case 'deletePie':
        component = <Route path="/dashboard/:portfolioId" component={DeletePie} />
        break;
      case 'buyStock':
        // component = <Route path="/dashboard/:portfolioId/:pieId" component={BuyStock} />
        break;
      case 'sellStock':
        // component = <Route path="/dashboard/:portfolioId/:pieId" component={SellStock} />
        break
      default:
        return null;
    }
    return (
      <div className="modal-background fadeIn" onClick={this.props.closeModal}>
        <div className="modal-child fadeIn" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);