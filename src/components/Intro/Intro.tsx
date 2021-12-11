import { useConnectToWallet } from "ethereal-react";

export const Intro = () => {
  const [connect, { loading }] = useConnectToWallet();
  return (
    <>
      <h1 className="text-6xl text-center">Kiyo-san 2021 Birthday Mint</h1>
      <span className="mt-3 text-5xl text-center">🎉🎂🥰</span>
      <button
        disabled={loading}
        className="p-4 mt-8 text-3xl text-white border-4 border-current"
        onClick={connect}
      >
        Connect
      </button>
    </>
  );
};
