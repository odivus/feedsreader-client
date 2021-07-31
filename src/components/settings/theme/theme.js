import React, {Component} from 'react';

import {connect} from 'react-redux';
import {withFirebase} from '../../firebase';
import {compose} from 'recompose';

import {getTheme} from '../../../store/actions/get-theme';
import {setTheme} from '../../../store/actions/set-theme';

import ToggledItem from '../../../components/settings/settings-toggled-item';

class Theme extends Component {
  componentDidMount() {
    if (!this.props.localTheme) {
      this.props.getTheme(this.props.firebase);
    }
  }

  render() {
    const { setTheme, firebase, theme, localTheme } = this.props;
    const currentTheme = localTheme ? localTheme : theme;

    return (
      <div className='settings-items-wrap'>
        <h3>Theme</h3>
        <div className='icons-capture-box'>
          <ToggledItem 
            nameItem={'Light'}
            itemType={currentTheme}
            setAction={setTheme}
            firebase={firebase}/>
          <ToggledItem 
            nameItem={'Dark'}
            itemType={currentTheme}
            setAction={setTheme}
            firebase={firebase}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    setTheme: { localTheme },
    getTheme: { theme },
  } = state;

  return {
    localTheme,
    theme,
  }
}

const mapDispatchToProps = {
  getTheme,
  setTheme,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFirebase)(Theme);