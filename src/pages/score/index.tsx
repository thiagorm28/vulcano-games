import { ScoreFormListPage } from "@/components/Pages/score-form-list-page";
import { Main } from "@/components/Templates/main";
import { Flex } from "@chakra-ui/react";
import React from "react";

export default function ScorePage() {
  return (
    <Main>
      <Flex flexDir="column">
        <ScoreFormListPage />
      </Flex>
    </Main>
  );
}
