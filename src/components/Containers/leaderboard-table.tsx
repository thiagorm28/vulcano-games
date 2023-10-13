import React from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export const LeaderboardTable: React.FC = () => {
  return (
    <TableContainer mt="30px" mx="2%" borderRadius="4">
      <Table variant="striped">
        <Thead bgColor="#C52235">
          <Tr>
            <Th>Posição</Th>
            <Th>Times</Th>
            <Th isNumeric>Prova 1</Th>
            <Th>Geral</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>#1</Td>
            <Td>Cristinos</Td>
            <Td isNumeric>100</Td>
            <Td isNumeric>100</Td>
          </Tr>
          <Tr>
            <Td>#2</Td>
            <Td>Mcgyver e os scales</Td>
            <Td isNumeric>98</Td>
            <Td isNumeric>98</Td>
          </Tr>
          <Tr>
            <Td>#3</Td>
            <Td>Bugalu sem Danilo</Td>
            <Td isNumeric>96</Td>
            <Td isNumeric>96</Td>
          </Tr>
          <Tr>
            <Td>#4</Td>
            <Td>Outros</Td>
            <Td isNumeric>94</Td>
            <Td isNumeric>94</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
