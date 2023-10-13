import { Flex } from "@chakra-ui/layout";
import React from "react";
import { VulcanoGamesLogo } from "../Icons/vulcano-games-logo";

type Props = {
  children: JSX.Element;
};

export const Main: React.FC<Props> = ({ children }) => {
  return (
    <Flex overflow="hidden" backgroundColor="#BABAC2" flexDir="column">
      <Flex justifyContent="center">
        <VulcanoGamesLogo />
      </Flex>
      {children}
    </Flex>
  );
};
