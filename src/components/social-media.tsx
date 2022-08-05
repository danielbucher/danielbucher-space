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
      className="ml-2 mr-2 first:ml-0 last:mr-0"
    >
      {children}
    </a>
  );
}
