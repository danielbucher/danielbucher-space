import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Profile from "../components/profile";

const name = "Daniel C. Bucher";
export const siteTitle = "Daniel C. Bucher";

type LayoutProps = React.PropsWithChildren<{ home: boolean }>;

export default function Layout(props: LayoutProps) {
  const { children, home } = props;

  return (
    <div className="container flex flex-col items-center py-2 mt-12 mb-24 mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfolio for Daniel C. Bucher." />
      </Head>
      <header>
        <div className="container flex flex-col items-center justify-center">
          <Profile home={home} name={name} />
        </div>
      </header>
      <main className="max-w-3xl mx-auto">{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
