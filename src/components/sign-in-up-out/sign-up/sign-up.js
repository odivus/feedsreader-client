import { connect } from 'react-redux';
import withSignInUpPage from '../hoc/with-sign-in-up-page';
import SignUpForm from
  '../containers/sign-up-form/sign-up-form';

const SignUpPage = withSignInUpPage(SignUpForm);

function mapStateToProps(state) {
  return {
    token: state.signUp.token,
  }
}

export default connect(mapStateToProps)(SignUpPage);