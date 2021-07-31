export default class RssParserService {

  async getRssSourceInfo(rssUrl, rssParserUrl) {
    try {
      const response = await fetch(rssParserUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rssUrl: rssUrl }),
      });

      const source = await response.json();
      return JSON.stringify(source);
    
    } catch (error) {
      console.error('rss-parser-service Error:', error);
      return {error: {message: true}};
    }
  }
}