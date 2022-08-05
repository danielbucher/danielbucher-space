import Image from "next/image";
import Link from "next/link";

type ProfileProps = {
  home?: boolean;
  name: string;
};

export default function Profile(props: ProfileProps) {
  const { home, name } = props;
  const imageSize = home ? 144 : 108;

  return (
    <>
      {home ? (
        <>
          <Image
            priority
            src="/images/profile.jpg"
            className="rounded-full"
            height={imageSize}
            width={imageSize}
            alt={name}
          />
          <h1 className="text-3xl font-extrabold leading-loose mt-1">{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-full"
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <Link href="/">
            <a className="text-xl font-bold leading-loose mt-1">{name}</a>
          </Link>
        </>
      )}
    </>
  );
}
