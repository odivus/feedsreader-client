import cx from 'classnames';

export const classNameSourceItem = (theme) => cx(
  'source-item',
  {
    'source-item_theme_light': theme === 'Light',
    'source-item_theme_dark': theme === 'Dark',
  }
);

export const classNameSourceItemP = (theme) => cx(
  'source-item__p',
  {
    'source-item__p_theme_light': theme === 'Light',
    'source-item__p_theme_dark': theme === 'Dark',
  }
);