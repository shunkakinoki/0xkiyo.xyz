import { useBlock, useBalance } from "ethereal-react";

export const Summary = () => {
  const [block] = useBlock();
  const balance = useBalance();

  return (
    <div className="text-3xl text-white">
      <div>Block number: {block.number}</div>
      <div>Balance: {balance.toString()}</div>
    </div>
  );
};
