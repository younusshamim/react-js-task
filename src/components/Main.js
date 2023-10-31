import React from "react";
import { Stack } from "@chakra-ui/react";
import Header from "./Header";

import Content from "./Content";

const Main = () => {
  return (
    <Stack bg="#ecf2f6" p="20px" minH="100vh" align="center" justify="center">
      <Stack bg="#fefeff" borderRadius="xl" w="960px" boxShadow="md" pb="10px">
        <Header />
        <Content />
      </Stack>
    </Stack>
  );
};

export default Main;
