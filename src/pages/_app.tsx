import WalletConnectProvider from "@walletconnect/web3-provider";
import { RequireNetwork, WalletProvider } from "ethereal-react";
import type { AppProps } from "next/app";
import { Suspense } from "react";

import { ConnectButton } from "@/components/ConnectButton";
import { Seo } from "@/components/Seo";
import { SwitchNetwork } from "@/components/SwitchNetwork";
import "@/styles/index.css";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
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
      fallback={<ConnectButton />}
      loading={null}
    >
      <Suspense fallback={null}>
        <Seo />
        <RequireNetwork chainId={80001} fallback={<SwitchNetwork />}>
          {/* <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CLOUDFLARE_API_KEY}"}`}
      /> */}
          <Component {...pageProps} />
        </RequireNetwork>
      </Suspense>
    </WalletProvider>
  );
};

export default CustomApp;
