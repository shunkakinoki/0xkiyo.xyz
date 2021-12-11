/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { Contract, ContractTransaction } from "ethereal-react";
import {
  useWriteContract,
  useWaitForTransaction,
  useReadContract,
  useTokenBalance,
  useTokenMetadata,
} from "ethereal-react";

import React, { Suspense } from "react";

import { useTokenId } from "@/hooks/useTokenId";

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
  const metadata = useTokenMetadata(contract, tokenId);
  return (
    <div className="flex justify-center text-2xl">
      Minted!
      {confirmation.status}
      {JSON.stringify(tokenURI)}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-[300px] h-[300px]"
        src={metadata.image}
        alt={metadata.name}
      />
      {metadata.name}
    </div>
  );
};

export const Minter = ({ contract }: { contract: Contract }) => {
  const [mint, { loading, data }] = useWriteContract(contract, "mint");
  const tokenId = useTokenId(contract);
  const balance = useTokenBalance(contract);

  if (balance.toNumber() !== 0) {
    return <div>Minted already: {JSON.stringify(balance)}</div>;
  }

  if (data) {
    return (
      <Suspense fallback={<div className="my-2 text-2xl">Minting...</div>}>
        <Minted
          contract={contract}
          tokenId={Number(tokenId)}
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
      Mint NFT #{Number(tokenId.toString()) + 1}
    </button>
  );
};
