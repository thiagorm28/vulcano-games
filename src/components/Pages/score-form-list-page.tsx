import { Flex, Box, Text } from "@chakra-ui/layout";
import React from "react";
import { ScoreForm } from "../Containers/score-form";
import { LeaderboardTable } from "../Containers/leaderboard-table";

export const ScoreFormListPage: React.FC = () => {
  return (
    <Flex flexDir="column">
      <ScoreForm />
      <Box
        backgroundColor="#F4F4F7"
        mx="2%"
        borderRadius="6"
        boxShadow="lg"
        justifyContent="center"
        alignItems="center"
        p="10"
        pt="6"
        mt="10"
        mb="12"
      >
        <Text fontSize="20px" fontWeight="600">
          Leaderboard
        </Text>
        <LeaderboardTable />
      </Box>
    </Flex>
  );
};
