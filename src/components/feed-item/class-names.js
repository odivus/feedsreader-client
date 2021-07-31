import cx from 'classnames';

export const classNamesFeedItem = (theme, viewMode) => cx(
  'feed-item',
  {
    'feed-item_theme_dark': theme === 'Dark',
    'feed-item_theme_light': theme === 'Light',
    'feed-item_viewmode_cards': viewMode === 'Cards',
    'feed-item_viewmode_headers': viewMode === 'Headers',
    'feed-item_viewmode_journal': viewMode === 'Journal',
  });

export const classNamesFeedItemTitle = (theme, viewMode) => cx(
  'feed-item__title',
  {
    'feed-item__title_theme_dark': theme === 'Dark',
    'feed-item__title_theme_light': theme === 'Light',
    'feed-item__title_viewmode_cards': viewMode === 'Cards',
    'feed-item__title_viewmode_headers': viewMode === 'Headers',
    'feed-item__title_viewmode_journal': viewMode === 'Lournal',
  });

export const classNamesFeedItemBg = (theme) => cx(
  'feed-item__bg',
  {
    'feed-item__bg_theme_dark': theme === 'Dark',
    'feed-item__bg_theme_light': theme === 'Light',
  });

export const classNamesFeedItemHeader = (theme, viewMode) => cx(
  'feed-item__h2',
  {
    'feed-item__h2_theme_dark': theme === 'Dark',
    'feed-item__h2_theme_light': theme === 'Light',
    'feed-item__h2_viewmode_cards feed-item__bg': viewMode === 'Cards',
    'feed-item__h2_viewmode_headers': viewMode === 'Headers',
    'feed-item__h2_viewmode_journal': viewMode === 'Journal',
  });

export const classNamesFeedItemDate = (theme, viewMode) => cx(
  'feed-item__date',
  {
    'feed-item__date_theme_dark': theme === 'Dark',
    'feed-item__date_theme_light': theme === 'Light',
    'feed-item__date_viewmode_cards': viewMode === 'Cards',
    'feed-item__date_viewmode_headers': viewMode === 'Headers',
    'feed-item__date_viewmode_journal': viewMode === 'Journal',
  });

  export const classNamesReadLater = (theme, readLater, viewmode) => cx(
    'feed-icon-wrap',
    {
      'feed-icon-wrap_theme_dark': theme === 'Dark',
      'feed-icon-wrap_theme_light': theme === 'Light',
      'feed-icon-wrap_viewmode_cards': viewmode === 'Cards',
      'feed-icon-wrap_viewmode_headers': viewmode === 'Headers',
      'feed-icon-wrap_viewmode_journal': viewmode === 'Journal',
      'feed-icon-wrap_selected_theme_dark': readLater === true && theme === 'Dark',
      'feed-icon-wrap_selected_theme_light': readLater === true && theme === 'Light',
    }
  )