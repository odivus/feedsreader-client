import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {connect} from 'react-redux';

import {signIn} from '../../../../store/actions/sign-in';
import FormItems from '../../form-items/form-items';
import { withFirebase } from '../../../firebase';
import SignWithSocial from '../sign-in-social';

import withSignInUpForm from '../../hoc/with-sign-in-up-form';

const SignInFormBase = withSignInUpForm(FormItems, SignWithSocial, 'signIn');

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

function mapStateToProps(state) {
  return {
    error: state.signIn.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (email, password, firebase) => {
      dispatch(signIn(email, password, firebase));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);