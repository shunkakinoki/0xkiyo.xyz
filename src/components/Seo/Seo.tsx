import { DefaultSeo as Default } from "next-seo";
import Head from "next/head";
import type { FC } from "react";

export const Seo: FC = () => {
  return (
    <>
      <Default
        noindex={false}
        nofollow={false}
        title="Kiyo-san 2021 Birthday"
        canonical="https://0xkiyo.xyz"
        openGraph={{
          locale: "en_US",
          site_name: "0xkiyo.xyz",
          type: "website",
          url: "https://0xkiyo.xyz",
          images: [{ url: "https://0xkiyo.xyz/favicon.svg" }],
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </>
  );
};
