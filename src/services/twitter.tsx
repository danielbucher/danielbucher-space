import queryString from "query-string";
import Twitter from "twitter-lite";

const twitterClient = new Twitter({
  version: "2",
  extension: false,
  consumer_key: process.env.TWITTER_API_KEY as string,
  consumer_secret: process.env.TWITTER_API_KEY_SECRET as string,
  bearer_token: process.env.TWITTER_BEARER_TOKEN as string,
});

export type Tweet = { id: string; text: string };

export async function getLatestTweets() {
  const userId = process.env.TWITTER_USER_ID;
  const apiPath = `users/${userId}/tweets`;
  const params = queryString.stringify({
    exclude: "retweets,replies",
    max_results: 5,
  });
  const url = `${apiPath}?${params}`;
  const response = await twitterClient.get(url);
  return response.data as Array<Tweet>;
}
