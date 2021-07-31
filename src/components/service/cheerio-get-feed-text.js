import CheerioService from './cheerio-service';

const cheerioService = new CheerioService();

function getFeedTextData(feedLink, getFeedTextUrl) {
  return cheerioService.getFeedText(feedLink, getFeedTextUrl);
}

export default getFeedTextData;