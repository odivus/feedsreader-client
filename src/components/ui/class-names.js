import cx from 'classnames';

export const classNameInput = (theme, loading) => cx(
  'input',
  {
    'input_theme_dark': theme === 'Dark',
    'input_theme_light': theme === 'Light' || !theme,
    'input-animation input-animation_theme_dark ': loading && theme === 'Dark',
    'input-animation input-animation_theme_light ': loading && theme === 'Light',
  });

export const classNameButton = (theme) => cx(
  'button',
  {
    'button_theme_dark': theme === 'Dark',
    'button_theme_light': theme === 'Light' || !theme,
  });
  
export const classNameConfirmDialog = (theme) => cx(
  {
    'confirm-dialog_theme_dark': theme === 'Dark',
    'confirm-dialog_theme_light': theme === 'Light',
  }
);