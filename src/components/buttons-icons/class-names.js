import cx from 'classnames';

export const classNames = (theme) => cx(
  'icons-wrapper',
  {
    'icons-wrapper_theme_dark': theme === 'Dark',
    'icons-wrapper_theme_light': theme === 'Light',
  });

export const classNameIcoWrapper = (isActive = true) => cx(
  'ico-wrapper ico-wrapper_align_center ico-wrapper_header',
  {
    'ico-wrapper_noactive': isActive === false,
  }
);

export const classNameIcoWrapperBody = (isActive = true) => cx(
  'ico-wrapper ico-wrapper_align_center',
  {
    'ico-wrapper_noactive': isActive === false,
  }
);

export const classNameIconsWrapper = (theme, isActive = true) => cx(
  'icons-wrapper',
  {
    'icons-wrapper_noactive': isActive === false,
    'icons-wrapper_theme_dark': theme === 'Dark' && isActive === true,
    'icons-wrapper_theme_light': theme === 'Light' && isActive === true,
  }
);

export const classNameSettingsIcoWrapper = (isActive = true) => cx(
  'ico-wrapper ico-wrapper_align_center',
  {
    'ico-wrapper_noactive': isActive === false,
  }
);

export const classNameSettingsIconsWrapper = (theme, isActive = true) => cx(
  'icons-wrapper settings-icon',
  {
    'settings-icon_noactive_theme_dark'
    : (isActive === false) && (theme === 'Dark'),

    'settings-icon_noactive_theme_light'
    : (isActive === false) && (theme === 'Light'),

    'settings-icon_theme_dark'
    : (theme === 'Dark') && (isActive === true),

    'settings-icon_theme_light'
    : (theme === 'Light') && (isActive === true),
  }
);

export const classNameIconsWrapHover = (theme) => cx(
  'icon-context-menu-wrap icons-wrap-hover',
  {
    'icons-wrap-hover_theme_dark': theme === 'Dark',
    'icons-wrap-hover_theme_light': theme === 'Light',
  }
);

export const classNameLogoLogoHeaderWrapper = (isActive) => cx(
  'ico-wrapper logo-header-wrapper',
  {
    'ico-wrapper_noactive': isActive === false,
  }
);

export const classNamesLogoHeaderWrap = (theme, isActive = true) => cx(
  'logo-header-wrap',
  {
    'icons-wrapper_theme_dark': theme === 'Dark' && isActive === true,
    'icons-wrapper_theme_light': theme === 'Light' && isActive === true,
    'logo-header-wrap_theme_dark': theme === 'Dark',
    'logo-header-wrap_theme_light': theme === 'Light',
  }
);
