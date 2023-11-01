import { Box } from "@chakra-ui/react";
import React from "react";
import CustomCheckbox from "./common/CustomCheckbox";
import { useItems } from "../contexts/ItemsProvider";

const ImageCardOverlay = ({ isChecked, item }) => {
  const { handleChecked } = useItems();

  return (
    <Box
      borderRadius="xl"
      bg={isChecked ? null : "#0000008a"}
      w="full"
      h="full"
      position="absolute"
      left="0"
      top="0"
      visibility={isChecked ? "visible" : "hidden"}
      opacity={isChecked ? 1 : 0}
      className="overlay"
      transition="0.5s ease"
    >
      <CustomCheckbox
        m="6"
        isChecked={isChecked}
        onChange={(e) => handleChecked(e.target.checked, item)}
      ></CustomCheckbox>
    </Box>
  );
};

export default ImageCardOverlay;
