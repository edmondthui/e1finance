import {connect} from 'react-redux'
import SessionForm from './session_form'
import {login} from '../../actions/session_actions'

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Log In'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (formUser) => dispatch(login(formUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)