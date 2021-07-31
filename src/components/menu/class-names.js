import cx from 'classnames';

export const classNameMenu = (theme) => cx(
  {
    'modal-settings_theme_dark': theme === 'Dark',
    'modal-settings_theme_light': theme === 'Light',
  }
);