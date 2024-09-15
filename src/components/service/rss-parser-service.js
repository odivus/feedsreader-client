export default class RssParserService {

  async getRssSourceInfo(rssUrl, rssParserUrl) {
    try {
      const response = await fetch(rssParserUrl, {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rssUrl: rssUrl }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const source = await response.json();
      return JSON.stringify(source);
    
    } catch (error) {
      console.error('rss-parser-service Error:', error);
      return {error: {message: true}};
    }
  }
}
