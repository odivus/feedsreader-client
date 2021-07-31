import cx from 'classnames';

export const classNameWrapper = (theme) => cx(
  'wrapper',
  {
    'wrapper_theme_light': theme === 'Light',
    'wrapper_theme_dark': theme === 'Dark',
  }
);