import cx from 'classnames';

export const classNamesShowFeeds = (viewMode, theme) => cx(
  {
    'feeds-wrap-viewmode-journal': viewMode === 'Journal',
    'fg-row feeds-wrap-viewmode-headers': viewMode === 'Headers',
    'fg-row feeds-wrap-viewmode-cards': viewMode === 'Cards',
    'feeds-wrap-viewmode-cards_theme_light': theme === 'Light',
    'feeds-wrap-viewmode-cards_theme_dark': theme === 'Dark',
  }
);