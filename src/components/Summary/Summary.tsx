import { useBlock, useBalance } from "ethereal-react";
import type { Contract } from "ethereal-react";
import { useEffect } from "react";

import { useTokenId } from "@/hooks/useTokenId";

export const Summary = ({ contract }: { contract: Contract }) => {
  const [block] = useBlock();
  const balance = useBalance();
  const tokenId = useTokenId(contract);

  useEffect(() => {
    console.log(`balance: ${balance}`);
    console.log(`block: ${block}`);
  });

  return (
    <div className="py-3 text-white">
      <h1 className="px-3 mx-auto max-w-xl text-5xl text-center">
        Mint one of the words from blessings from all around the world
      </h1>
      <h1 className="px-3 mx-auto mt-3 text-3xl font-medium text-center ">
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
        {tokenId.toString()} / 27
      </h1>
      <div className="my-5 mx-3 w-full max-w-sm sm:max-w-xl md:max-w-3xl h-9 bg-gray-300">
        <div
          className="h-full text-xs leading-none text-white bg-green-400"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          style={{ width: `${(Number(tokenId.toString()) / 27) * 100}%` }}
        />
      </div>
    </div>
  );
};
