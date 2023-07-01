import { type AppType } from "next/app";
import { type Session } from "next-auth";
import "../styles/globals.css";
import Head from "next/head";

import { useRouter } from "next/router";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen	flex-col justify-between">
      <Head>
        <title>New Galaxy Space Mart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="WidgetSite" />
        <meta name="theme-color" content="rgb(20,29,40)"></meta>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
