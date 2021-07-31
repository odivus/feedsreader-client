import cx from 'classnames';

export const classNameFormWrap = (theme) => cx(
  'fg-sm-12 form-items form-wrap',
  {
    'form-wrap_theme_light': theme === 'Light',
    'form-wrap_theme_dark': theme === 'Dark',
  }
);

export const classNameFormItems = (theme) => cx(
  'form-items form-items_size_sm',
  {
    'form-items_theme_light': theme === 'Light',
    'form-items_theme_dark': theme === 'Dark',
  }
);

export const classNameSocial = (socialName) => cx(
  'button button_social_login',
  {
    'button_social_google': socialName === 'google',
    'button_social_facebook': socialName === 'facebook',
    'button_social_github': socialName === 'github',
  }
);