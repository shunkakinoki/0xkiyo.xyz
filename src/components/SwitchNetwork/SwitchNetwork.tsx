import { useSwitchNetwork } from "ethereal-react";

export const SwitchNetwork = () => {
  const [switchNetwork, { loading }] = useSwitchNetwork({ chainId: 80001 });

  return (
    <div className="w-full min-h-screen text-white bg-black">
      <div className="flex flex-col justify-center items-center h-screen">
        <h3 className="text-5xl">
          The example only supports the Polygon network.
        </h3>
        <button
          className="p-4 mt-8 text-3xl hover:bg-gray-300 hover:bg-opacity-40 border-4 border-current"
          disabled={loading}
          onClick={switchNetwork}
        >
          Switch to Polygon Network
        </button>
      </div>
    </div>
  );
};
