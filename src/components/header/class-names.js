import cx from 'classnames';

export const classNamesHeader = (theme) => cx(
  'header',
  {
    'header_theme_dark': theme === 'Dark',
    'header_theme_light': theme === 'Light',
  });
