import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {withTheme} from '../theme';

import HeaderFeedText from '../header-feed-text';

import {classNameWrapper} from '../home/class-names';
import {
  classNamefeedTextWrap,
  classNamefeedText,
} from './class-names';

import '../home/home.css';
import './feed-text.css';

class FeedTextPage extends Component {
  constructor(props) {
    super(props);
    this.feedTextRef = React.createRef();
  }

  componentDidMount() {
    const { feedText, feedFullText } = this.props;

    if (feedText || feedFullText) {
      window.scroll(0, 0);
      this.feedTextRef.current.innerHTML = feedText || feedFullText;
    }
  }
  
  componentDidUpdate(prevProps) {
    const { feedText, feedFullText } = this.props;

    if (feedText || feedFullText) {
      if (prevProps.feedText !== feedText ||
        prevProps.feedFullText !== feedFullText) {
          window.scroll(0, 0);
          this.feedTextRef.current.innerHTML = feedText || feedFullText;
      }
    }
  }

  render() {
    const { 
      rssSourcesData,
      feedFullText,
      imgAvailable, 
      feedLink, 
      feedText,
      header, 
      imgSrc,
      title, 
      theme, 
      date, 
    } = this.props;

    if (!localStorage.token) return <Redirect to="/signin" />;
    if (!rssSourcesData) return <Redirect to="/" />;
    
    return (
      <div className={classNameWrapper(theme)}>
        <HeaderFeedText />
        <div className={classNamefeedTextWrap(theme, feedFullText, feedText)}>
          <div className={classNamefeedText(theme)}>
            <div className='feed-text__title'>{title}</div>
            <div className='feed-text__date'>{date}</div>
            <div className='feed-text__h1'>
              <a
                href={`${feedLink}`}
                target="_blank"
                rel='noopener noreferrer'>
                {header}
              </a>
            </div>
            {imgSrc && imgAvailable
              ? <div className='feed-text__img'>
                <img src={imgSrc} alt='' />
              </div>
              : null}
            <div
              className='feed-text__content'
              ref={this.feedTextRef}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { 
    getFeedText: {
      feedFullText,
      imgAvailable, 
      feedLink,
      feedText,
      header, 
      imgSrc, 
      title, 
      date, 
    },
    getRssSourcesData: { 
      rssSourcesData 
    },
  } = state;
  
  return { 
    rssSourcesData,
    feedFullText,
    imgAvailable,
    feedLink,
    feedText,
    header,
    imgSrc,
    title,
    date,
  };
}

export default compose(
  connect(mapStateToProps, null), 
  withRouter, withTheme)(FeedTextPage);
