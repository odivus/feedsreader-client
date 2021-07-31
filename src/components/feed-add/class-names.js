import cx from 'classnames';

export const classNameAddSource = (theme) => cx(
  'items_size_sm feed-add-source-items',
  {
    'feed-add-source-items_theme_light': theme === 'Light',
    'feed-add-source-items_theme_dark': theme === 'Dark',
  }
);