import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import SocialMedia from "./social-media";

export default function Contacts() {
  return (
    <section>
      <div className="flex flex-row justify-center">
        <SocialMedia url="https://twitter.com/danielcbucher">
          <FaTwitter className="text-6xl text-gray-900" />
        </SocialMedia>
        <SocialMedia url="https://github.com/danielbucher">
          <FaGithub className="text-6xl text-gray-900" />
        </SocialMedia>
        <SocialMedia url="https://www.linkedin.com/in/daniel-bucher-b57a89a9/">
          <FaLinkedin className="text-6xl text-gray-900" />
        </SocialMedia>
      </div>
    </section>
  );
}
