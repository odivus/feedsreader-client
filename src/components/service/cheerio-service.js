export default class CheerioService {

  async getFeedText(feedLink, getFeedTextUrl) {
    try {
      const response = await fetch(getFeedTextUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedLink: feedLink }),
      });

      const feedText = await response.json();
      return JSON.stringify(feedText);

    } catch (error) {
      console.error('cheerio-get-feed-text-service Error:', error);
      return { error: true };
    }
  }
}
