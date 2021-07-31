import React, {Component} from 'react';
import { withTheme } from '../theme';

import {
  classNameSettingsIcoWrapper,
  classNameSettingsIconsWrapper,
} from '../buttons-icons/class-names';

import '../buttons-icons/buttons-icons.css';

class ToggledItem extends Component {
  constructor(props) {
    super(props);
    this.handleSetAction = this.handleSetAction.bind(this);
  }

  handleSetAction(nameItem, itemType, setAction, firebase) {
    if (itemType !== nameItem) setAction(nameItem, firebase);
  }

  render() {
    const { nameItem, itemType, setAction, firebase, theme } = this.props;

    const nameItemSmall = nameItem.toLowerCase(); 
    const isActive = itemType !== nameItem ? true : false;   
    
    return (
      <div className='settings-ico-items-wrap'>
        <div
          className={classNameSettingsIcoWrapper(isActive)}
          onClick={() => {
            this.handleSetAction(nameItem, itemType, setAction, firebase)
          }}>
            <div className={classNameSettingsIconsWrapper(theme, isActive)}>
              <div className='icons-wrap'>
                <div className={`icons ${nameItemSmall}`}></div>
              </div>
            </div>
        </div>
        <div
          className={`icons-capture`}>
          {nameItem}
        </div>
      </div>
    );
  }
}

export default withTheme(ToggledItem);