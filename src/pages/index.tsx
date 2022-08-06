import { InferGetServerSidePropsType } from "next";

import AboutMe from "../components/about-me";
import Contacts from "../components/contacts";
import Profile from "../components/profile";
import TweetEmbed from "../components/tweet";
import { name } from "../constants";
import Layout from "../layouts/default-layout";
import { getLatestTweets } from "../services/twitter";

export const getServerSideProps = async () => {
  const tweets = await getLatestTweets();
  return {
    props: { tweets },
  };
};

type HomeProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home = ({ tweets }: HomeProps) => {
  return (
    <Layout home>
      <section className="h-screen flex flex-col justify-evenly">
        <header>
          <div className="container flex flex-col items-center justify-center">
            <Profile home name={name} />
          </div>
        </header>
        <AboutMe />
        <Contacts />
      </section>
      <section>
        <h2 className="text-4xl tracking-tighter">What I've been tweeting lately</h2>
        <ul className="flex flex-col items-center mt-10">
          {tweets.map((tweet) => (
            <TweetEmbed key={tweet.id} tweetId={tweet.id} />
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
