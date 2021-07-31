import RssParserService from './rss-parser-service';

const rssParserService = new RssParserService();

function getSourceRssData(rssUrl, rssParserUrl) {
  return rssParserService.getRssSourceInfo(rssUrl, rssParserUrl);
}

export default getSourceRssData;
