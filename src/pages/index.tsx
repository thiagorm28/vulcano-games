import { LeaderboardFilter } from "@/components/Containers/leaderboard-filter";
import { LeaderboardTable } from "@/components/Containers/leaderboard-table";
import { Main } from "@/components/Templates/main";
import { Flex } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Main>
      <Flex flexDir="column">
        <LeaderboardFilter />
        <LeaderboardTable />
      </Flex>
    </Main>
  );
}
