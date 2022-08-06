import { PropsWithChildren } from "react";

type SocialMediaProps = PropsWithChildren<{
  url: string;
}>;

export default function SocialMedia(props: SocialMediaProps) {
  const { children, url } = props;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="ml-6 mr-6 first:ml-0 last:mr-0"
    >
      {children}
    </a>
  );
}
