import type { NextPage } from "next";

import AboutMe from "../components/about-me";
import Contacts from "../components/contacts";
import Layout from "../layouts/default-layout";

const Home: NextPage = () => {
  return (
    <Layout home>
      <AboutMe />
      <Contacts />
    </Layout>
  );
};

export default Home;
