import WalletConnectProvider from "@walletconnect/web3-provider";
import { WalletProvider } from "ethereal-react";
import type { AppProps } from "next/app";
import { Suspense } from "react";

import { Container } from "@/components/Container";
import { Intro } from "@/components/Intro";
import { Loading } from "@/components/Loading";
import { Seo } from "@/components/Seo";
import "@/styles/index.css";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Container>
      <Seo />
      <WalletProvider
        cacheProvider
        providerOptions={{
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
            },
          },
        }}
        fallback={<Intro />}
        loading={null}
      >
        <Suspense fallback={<Loading />}>
          <Component {...pageProps} />
        </Suspense>
      </WalletProvider>
    </Container>
  );
};

export default CustomApp;
