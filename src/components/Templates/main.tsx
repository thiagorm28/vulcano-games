import { Flex } from "@chakra-ui/layout";
import React from "react";
import { VulcanoGamesLogo } from "../Icons/vulcano-games-logo";

type Props = {
  children: JSX.Element;
};

export const Main: React.FC<Props> = ({ children }) => {
  return (
    <Flex
      h={"100vh"}
      overflow="hidden"
      backgroundColor="#babac2"
      flexDir="column"
    >
      <VulcanoGamesLogo />
      {children}
    </Flex>
  );
};
