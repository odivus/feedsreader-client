import { connect } from 'react-redux';
import withSignInUpPage from '../hoc/with-sign-in-up-page';
import SignInForm from '../containers/sign-in-form/sign-in-form';

const SignInPage = withSignInUpPage(SignInForm);

function mapStateToProps(state) {
  return {
    token: state.signIn.token,
  }
}

export default connect(mapStateToProps)(SignInPage);