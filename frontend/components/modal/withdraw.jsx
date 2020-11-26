import React from "react";

class Withdraw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buying_power: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateBuyingPower({
      id: this.props.user.id,
      buying_power: -this.state.buying_power,
    });
    this.props.createActivity({
      activity: "",
      name: "Withdraw",
      value: this.state.buying_power,
      user_id: this.props.user.id,
    });
    this.props.closeModal();
  }

  update(field) {
    return (e) => {
      e.currentTarget.style.width = e.currentTarget.value.length + "ch";
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    return (
      <div className="create-portfolio-container">
        <div onClick={this.props.closeModal} className="close-x">
          X
        </div>
        <div className="deposit-form-container">
          <form onSubmit={this.handleSubmit} className="buy-form">
            <div className="deposit-form-items">
              <div className="create-portfolio-name">
                <h3>One time transfer</h3>
                <p>Please enter the amount you want to withdraw.</p>
              </div>
              <div className="input-value-number-container">
                <p className="buy-dollar-sign">$</p>
                <input
                  type="number"
                  className="input-value-buy"
                  step=".01"
                  value={this.state.value}
                  onChange={this.update("buying_power")}
                  placeholder="0"
                />
              </div>
            </div>
            <input
              type="submit"
              value="Withdraw"
              className="create-portfolio-submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Withdraw;
