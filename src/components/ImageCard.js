import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useItems } from "../contexts/ItemsProvider";
import CustomCheckbox from "./common/CustomCheckbox";

const ImageCard = ({ index, img }) => {
  const { selectedItems, handleChecked } = useItems();
  const isChecked = selectedItems.some((item) => item === img);

  const featureImgStyle = {
    gridRowStart: 1,
    gridColumnStart: 1,
    gridRowEnd: 3,
    gridColumnEnd: 3,
  };

  return (
    <Box
      style={index === 0 ? featureImgStyle : {}}
      borderWidth="2px"
      borderColor="borderColor"
      borderRadius="xl"
      key={index}
      cursor="pointer"
      position="relative"
      _hover={{
        ".overlay": {
          visibility: "visible",
          opacity: 1,
        },
      }}
    >
      <Image src={img} alt="" borderRadius="xl" opacity={isChecked ? 0.5 : 1} />

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
        transition="0.3s ease"
      >
        <CustomCheckbox
          m="6"
          isChecked={isChecked}
          onChange={(e) => handleChecked(e.target.checked, img)}
        ></CustomCheckbox>
      </Box>
    </Box>
  );
};

export default ImageCard;
