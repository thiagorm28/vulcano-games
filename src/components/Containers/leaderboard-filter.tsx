import { Flex, Grid, GridItem, Text } from "@chakra-ui/layout";
import React from "react";
import { Select } from "@chakra-ui/react";

export const LeaderboardFilter: React.FC = () => {
  return (
    <Flex
      h={"70px"}
      backgroundColor="#F4F4F7"
      flexDir="column"
      mx="2%"
      borderRadius="4"
      boxShadow="md"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        templateRows="1"
        templateColumns="repeat(2, 5fr)"
        columnGap={5}
        w="94%"
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Select borderRadius="6" placeholder="Categoria" size="sm" />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Select borderRadius="6" placeholder="Workout" size="sm" />
        </GridItem>
      </Grid>
    </Flex>
  );
};
