import { DisconnectButton } from "@/components/DisconnectButton";
import { Summary } from "@/components/Summary";

export const IndexPage = (): JSX.Element => {
  return (
    <>
      <Summary />
      <DisconnectButton />
    </>
  );
};

export default IndexPage;
