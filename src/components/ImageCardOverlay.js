import { Box } from "@chakra-ui/react";
import React from "react";
import CustomCheckbox from "./common/CustomCheckbox";

const ImageCardOverlay = ({ checked, setChecked }) => {
  return (
    <Box
      borderRadius="xl"
      bg={checked ? null : "#0000008a"}
      w="full"
      h="full"
      position="absolute"
      left="0"
      top="0"
      visibility={checked ? "visible" : "hidden"}
      opacity={checked ? 1 : 0}
      className="overlay"
      transition="0.3s ease"
    >
      <CustomCheckbox
        m="6"
        isChecked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      ></CustomCheckbox>
    </Box>
  );
};

export default ImageCardOverlay;
