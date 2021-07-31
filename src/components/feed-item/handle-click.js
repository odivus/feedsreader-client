export const handleClick = (props) => {
  const {
    feed, 
    feedFullText, 
    title, 
    date, 
    header, 
    imgSrc, 
    imgAvailable, 
    getFeedText, 
    checkIsReadLaterText,
    doActions,
    history,
  } = props;

  doActions(feed.link, feedFullText, title, date, header, imgSrc, imgAvailable, getFeedText, checkIsReadLaterText);

  history.push('/text');
}