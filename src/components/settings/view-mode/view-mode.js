import React, {Component} from 'react';

import {connect} from 'react-redux';
import {withFirebase} from '../../firebase';
import {compose} from 'recompose';

import {getViewMode} from '../../../store/actions/get-view-mode';
import {setViewMode} from '../../../store/actions/set-view-mode';

import ToggledItem from '../../../components/settings/settings-toggled-item';

class ViewMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: this.props.localViewMode || this.props.viewMode || 'Cards',
    }
  }

  componentDidMount() {
    if (!this.props.localViewMode) {
      this.props.getViewMode(this.props.firebase);
    } else {
      this.setState({ viewMode: this.props.localViewMode });
    }
  }

  componentDidUpdate(prevProps) {
    const { viewMode, localViewMode } = this.props;
    
    if (prevProps.localViewMode !== localViewMode) {
      this.setState({ viewMode: localViewMode });
    }

    if (viewMode !== prevProps.viewMode) {
      this.setState({ viewMode: viewMode });
    }
  }

  render() {
    let { setViewMode, firebase } = this.props;
    const { viewMode } = this.state;

    return (
      <div className='settings-items-wrap'>
        <h3>View mode</h3>
        <div className='icons-capture-box'>
          <ToggledItem 
            nameItem={'Cards'}
            itemType={viewMode}
            setAction={setViewMode}
            firebase={firebase}/>
          <ToggledItem 
            nameItem={'Headers'}
            itemType={viewMode}
            setAction={setViewMode}
            firebase={firebase}/>
          <ToggledItem 
            nameItem={'Journal'}
            itemType={viewMode}
            setAction={setViewMode}
            firebase={firebase}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    getViewMode: { viewMode },
    setViewMode: { localViewMode },
  } = state;

  return {
    viewMode,
    localViewMode,
  }
}

const mapDispatchToProps = {
  getViewMode,
  setViewMode,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFirebase)(ViewMode);