/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { Contract, ContractTransaction } from "ethereal-react";
import {
  useWriteContract,
  useWaitForTransaction,
  useReadContract,
} from "ethereal-react";
import React, { Suspense } from "react";

export const Minted = ({
  transaction,
  contract,
  tokenId,
}: {
  transaction: ContractTransaction;
  contract: Contract;
  tokenId: number;
}) => {
  const confirmation = useWaitForTransaction(transaction);
  const tokenURI = useReadContract(contract, "tokenURI", tokenId);
  return (
    <div className="text-2xl">
      Minted!
      {confirmation.status}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={JSON.parse(tokenURI.split(",")[1]).image}
        alt={JSON.parse(tokenURI.split(",")[1]).name}
      />
    </div>
  );
};

export const Minter = ({ contract }: { contract: Contract }) => {
  const [mint, { loading, data }] = useWriteContract(contract, "mint");
  const tokenId = useReadContract(contract, "totalSupply");

  if (data) {
    return (
      <Suspense fallback={<div className="my-2 text-2xl">Minting...</div>}>
        <Minted
          contract={contract}
          tokenId={Number(tokenId.toString()) + 1}
          transaction={data}
        />
      </Suspense>
    );
  }

  return (
    <button
      className="p-4 text-3xl border-4 border-current"
      disabled={loading}
      onClick={() => {
        return mint();
      }}
    >
      Mint NFT #{tokenId.toString()}
    </button>
  );
};
