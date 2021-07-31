import cx from 'classnames';

export const classNamefeedTextWrap = (theme, feedFullText, feedText) => cx(
  'feed-text-wrap',
  {
    'feed-text-wrap_theme_light': theme === 'Light',
    'feed-text-wrap_theme_dark': theme === 'Dark',
    'feed-text-wrap_hidden': !feedFullText && !feedText,
  }
);

export const classNamefeedText = (theme) => cx(
  'feed-text',
  {
    'feed-text_theme_light': theme === 'Light',
    'feed-text_theme_dark': theme === 'Dark',
  }
);