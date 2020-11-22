import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import DeletePortfolio from './delete_portfolio_container'
import CreatePortfolio from './create_portfolio_container'

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