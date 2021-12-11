import { ERC721_ABI, useContract } from "ethereal-react";

import { DisconnectButton } from "@/components/DisconnectButton";
import { Minter } from "@/components/Minter";
import { Summary } from "@/components/Summary";
import KiyoSanBirthdayDeployment from "@/deployments/KiyoSanBirthday.json";

export const IndexPage = (): JSX.Element => {
  const KiyoSanBirthdayContract = useContract(
    KiyoSanBirthdayDeployment.address,
    [...ERC721_ABI, "function mint()"],
  );

  return (
    <>
      <Summary contract={KiyoSanBirthdayContract} />
      <Minter contract={KiyoSanBirthdayContract} />
      <DisconnectButton />
    </>
  );
};

export default IndexPage;
