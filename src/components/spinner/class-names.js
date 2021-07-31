import cx from 'classnames';

export const ClassNameSpinner = (theme) => cx(
  'spinner spinner_animation',
  {
    'spinner_theme_light': theme === 'Light',
    'spinner_theme_dark': theme === 'Dark',
  }
);