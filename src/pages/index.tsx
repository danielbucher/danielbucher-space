import AboutMe from "../components/about-me";
import Contacts from "../components/contacts";
import Profile from "../components/profile";
import { name } from "../constants";
import Layout from "../layouts/default-layout";

const Home = () => {
  return (
    <Layout home>
      <div className="h-screen flex flex-col justify-evenly">
        <header>
          <div className="container flex flex-col items-center justify-center">
            <Profile home name={name} />
          </div>
        </header>
        <AboutMe />
        <Contacts />
      </div>
    </Layout>
  );
};

export default Home;
