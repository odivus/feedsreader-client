import React, { Component } from 'react';
import { withTheme } from '../theme';

import './menu.css';

class MenuSourcesList extends Component {
  renderSources({ rssSources, selectRssSource, selectedRssSource }, classNameTheme) {
    return Object.entries(rssSources)
      .sort((a, b) => {
        if (a[1].sourceName > b[1].sourceName) {
          return 1;
        }
        if (a[1].sourceName < b[1].sourceName) {
          return -1;
        }
        return 0;
      })
      .map(item => {
        let selected = '';

        if (item[1].sourceName === selectedRssSource) {
          selected = `selected ${classNameTheme}`;
        }

        return (
        <li 
          className={selected}
          key={item[0]}
          onClick={() => selectRssSource(item[1].sourceName, item[1].url)}>
            {item[1].sourceName}
        </li>
      )}
    );
  }

  render() {
    const { selectRssSource, selectedRssSource, theme } = this.props;
    const classNameTheme = theme === 'Light' 
                                 ? 'selected_theme_light' 
                                 : 'selected_theme_dark';
    const listClassNameTheme = theme === 'Light'
      ? 'menu-sources-list menu-sources-list_theme_light'
      : 'menu-sources-list menu-sources-list_theme_dark';

    const sources = this.renderSources(this.props, classNameTheme);
    let selected = '';

    if (!selectedRssSource) selected = `selected ${classNameTheme}`;

    return (
      <ul className={listClassNameTheme}>
        <li 
          onClick={() => selectRssSource('', '')}
          className={selected}>
            All sources
        </li>
        {sources}
      </ul>
    );
  }
}

export default withTheme(MenuSourcesList);
