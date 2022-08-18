import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";
import "../styles/globals.css";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
        description="vuuu.space - a diary to remember, cherish and thank for moments in ones life"
        openGraph={{
          type: "website",
          // locale: "en_EN",
          url: "https://vuuu.space/",
          site_name: "Vuuu Diary",
          title: "Vuuu Diary",
          description:
            "vuuu.space - a diary to remember, cherish and thank for moments in ones life"
        }}
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

// export default MyApp;
export default appWithTranslation(MyApp, nextI18NextConfig);

// import { appWithTranslation } from 'next-i18next';
// const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;
// export default appWithTranslation(MyApp);
