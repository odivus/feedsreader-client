import React, {Component} from 'react';

import { connect } from 'react-redux';
import { withFirebase } from '../../firebase';
import { getRssSources } from '../../../store/actions/get-rss-sources';

import { compose } from 'recompose';

import SourceItem from './source-item';
import ContextMenuItemAction from '../../settings/sources-context-menu/context-menu-item-action';

import './sources.css';

class Sources extends Component {

  componentDidMount() {
    this.props.getRssSources(this.props.firebase);
  }

  renderSources(objData) {
    if (objData) {
      return Object.keys(objData)
      .reverse()
      .map(item => {
        const sourceName = objData[item].sourceName;
        const title = objData[item].title;
        const rssUrl = objData[item].rssUrl;

        return this.props.sourceId === item
          ? <ContextMenuItemAction 
              sourceName={sourceName}
              rssUrl={rssUrl}
              key={item} 
              id={item} />
          : <SourceItem
              key={item}
              id={item}
              sourceName={sourceName}
              title={title} />
      });
    }
  }

  render() {
    const { rssSources, sourceId } = this.props;
    const sources = this.renderSources(rssSources, sourceId);
                                       
    return (
      <div className='settings-items-wrap'>
        <h3>Sources</h3>
        <div className='settings-items-wrap__position-left'>
          {sources}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { 
    getRssSources: { rssSources },
    toggleEditSourceVisible: { sourceId },
  } = state;
  return {
    rssSources,
    sourceId,
  }
}

const mapDispatchToProps = {
  getRssSources,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFirebase)(Sources);
