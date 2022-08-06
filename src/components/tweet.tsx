import { TwitterTweetEmbed } from "react-twitter-embed";

type TweetProps = {  tweetId: string };

export default function Tweet({ tweetId }: TweetProps) {
  return <TwitterTweetEmbed tweetId={tweetId} />;
}
