import cx from 'classnames';

export const classNameContextMenu = (theme) => cx(
  'context-menu',
  {
    'context-menu_theme_light': theme === 'Light',
    'context-menu_theme_dark': theme === 'Dark',
  }
);

export const classNameContextMenuItem = (theme) => cx(
  'context-menu__item',
  {
    'context-menu__item_theme_light': theme === 'Light',
    'context-menu__item_theme_dark': theme === 'Dark',
  }
);