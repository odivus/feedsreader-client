import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { signUp } from '../../../../store/actions/sign-up';
import FormItems from '../../form-items/form-items';
import { withFirebase } from '../../../firebase';

import withSignInUpForm from '../../hoc/with-sign-in-up-form';

const SignWithSocial = () => ('');

const SignInFormBase = withSignInUpForm(FormItems, SignWithSocial, 'signUp');

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

function mapStateToProps(state) {
  return {
    error: state.signUp.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: (email, password, firebase) => {
      dispatch(signUp(email, password, firebase));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);