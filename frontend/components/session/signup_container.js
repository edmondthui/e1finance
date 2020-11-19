import {connect} from 'react-redux'
import SessionForm from './session_form'
import {signup, clearErrors} from '../../actions/session_actions'

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up Now'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (formUser) => dispatch(signup(formUser)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)