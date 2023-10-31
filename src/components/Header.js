import { Button, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import CustomCheckbox from "./common/CustomCheckbox";

const Header = () => {
  return (
    <HStack
      justify="space-between"
      p="10px 40px"
      borderBottomWidth="2px"
      borderBottomColor="borderColor"
    >
      <CustomCheckbox defaultChecked>
        <Heading fontSize="20px">3 Files Selected</Heading>
      </CustomCheckbox>

      <Button variant="unstyled" color="#ed5045" fontSize="17px">
        Delete files
      </Button>
    </HStack>
  );
};

export default Header;
