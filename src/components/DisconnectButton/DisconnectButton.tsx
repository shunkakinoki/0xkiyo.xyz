import { useDisconnectWallet } from "ethereal-react";

export const DisconnectButton = () => {
  const disconnect = useDisconnectWallet();

  return (
    <>
      <button
        className="p-4 text-3xl text-white border-4 border-current"
        onClick={disconnect}
      >
        Disconnect
      </button>
    </>
  );
};
