import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import LoggedInNavBar from "./logged_in_nav_bar";

const mapStateToProps = (state) => {
  return {
    user: Object.values(state.entities.users)[0],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInNavBar);
