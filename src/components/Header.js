import { Button, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import CustomCheckbox from "./common/CustomCheckbox";
import { useItems } from "../contexts/ItemsProvider";

const Header = () => {
  const { selectedItems, handleDelete } = useItems();
  const length = selectedItems.length;

  return (
    <HStack
      justify="space-between"
      p="10px 40px"
      borderBottomWidth="2px"
      borderBottomColor="borderColor"
    >
      {length > 0 ? (
        <CustomCheckbox defaultChecked>
          <Heading fontSize="20px">
            {length}
            {length === 1 ? " File" : " Files"} Selected
          </Heading>
        </CustomCheckbox>
      ) : (
        <Heading fontSize="20px">Gallery</Heading>
      )}

      <Button
        variant="unstyled"
        color="#ed5045"
        fontSize="17px"
        onClick={handleDelete}
      >
        Delete files
      </Button>
    </HStack>
  );
};

export default Header;
