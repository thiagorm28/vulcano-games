import { Flex, Grid, GridItem, Text } from "@chakra-ui/layout";
import React from "react";
import { Button, Input, Select } from "@chakra-ui/react";

export const ScoreForm: React.FC = () => {
  return (
    <Flex
      backgroundColor="#F4F4F7"
      flexDir="column"
      mx="2%"
      borderRadius="6"
      boxShadow="lg"
      justifyContent="center"
      alignItems="center"
      p="8"
      pt="6"
    >
      <Flex w="98%" mb="6">
        <Text fontSize="20px" fontWeight="600">
          Cadastrar Score
        </Text>
      </Flex>
      <Grid
        templateRows="1"
        templateColumns="repeat(2, 1fr)"
        columnGap={5}
        rowGap={5}
        w="98%"
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Text mb="2px">Categoria</Text>
          <Select borderRadius="6" placeholder="Selecione" size="md" />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Text mb="2px">Workout</Text>
          <Select borderRadius="6" placeholder="Selecione" size="md" />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Text mb="2px">Time</Text>
          <Select borderRadius="6" placeholder="Selecione" size="md" />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Text mb="2px">Reps/Cap</Text>
          <Input borderRadius="6" placeholder="Reps/Cap" size="md" />
        </GridItem>
      </Grid>
      <Flex mt="40px" w="94%" justifyContent="right">
        <Button colorScheme="green" variant="solid" w="16%">
          Salvar
        </Button>
      </Flex>
    </Flex>
  );
};
