import React from 'react';
import PropTypes from 'prop-types';
import {withTheme} from '../../theme';

import '../sign-in-up-out.css';

const WithSignPage = ({ signForm }) => (
  <div className='fg-row'>
    <div className='fg-sm-12 form-wrap'>
      {signForm}
    </div>
  </div>
);

WithSignPage.propTypes = {
  signForm: PropTypes.element,
}

export default withTheme(WithSignPage);
