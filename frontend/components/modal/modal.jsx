import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePortfolio from './create_portfolio_container'

// function Modal({modal, closeModal, createPortfolio}) {
//   if (!modal) {
//     return null;
//   }
//   let component;
//   switch (modal) {
//     case 'create portfolio':
//       component = <CreatePortfolio createPortfolio={createPortfolio}/>;
//       break;
//     default:
//       return null;
//   }
  // return (
  //   <div className="modal-background fadeIn" onClick={closeModal}>
  //     <div className="modal-child fadeIn" onClick={e => e.stopPropagation()}>
  //       { component }
  //     </div>
  //   </div>
  // );
// }

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
      case 'create portfolio':
        component = <CreatePortfolio/>;
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