import type { AppProps } from "next/app";

import "@/styles/index.css";
import { Seo } from "@/components/Seo";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      {/* <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CLOUDFLARE_API_KEY}"}`}
      /> */}
      <Seo />
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
