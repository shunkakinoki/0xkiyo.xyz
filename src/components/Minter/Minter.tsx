/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { Contract, ContractTransaction } from "ethereal-react";
import {
  useWriteContract,
  useWaitForTransaction,
  useReadContract,
  useTokenBalance,
  useTokenMetadata,
  useUserAddress,
} from "ethereal-react";

import React, { Suspense } from "react";

import { useTokenId } from "@/hooks/useTokenId";

export const Mint = ({
  contract,
  index,
}: {
  contract: Contract;
  index: number;
}) => {
  const address = useUserAddress();
  const tokenID = useReadContract(
    contract,
    "tokenOfOwnerByIndex",
    address,
    index,
  );
  const metadata = useTokenMetadata(contract, tokenID);

  return (
    <div className="mt-3">
      <h3 className="text-3xl text-center">{metadata.name}</h3>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="mt-3 w-[300px] h-[300px]"
        src={metadata.image}
        alt={metadata.name}
      />
    </div>
  );
};

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
  const metadata = useTokenMetadata(contract, tokenId);

  return (
    <div>
      Minted!{confirmation.status}
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
    return (
      <div>
        <h2 className="text-2xl text-center">Minted already:</h2>
        {Array.from({ length: balance.toNumber() }, (_, index) => {
          return <Mint key={index} index={index} contract={contract} />;
        })}
      </div>
    );
  }

  if (data) {
    return (
      <Suspense fallback={<div className="my-2 text-2xl">Minting...</div>}>
        <div>
          <Minted
            contract={contract}
            tokenId={Number(tokenId)}
            transaction={data}
          />
        </div>
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
