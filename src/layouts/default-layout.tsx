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
    <div className="container flex flex-col items-center mx-auto font-mono">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfolio for Daniel C. Bucher." />
      </Head>
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  );
}
