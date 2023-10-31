import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const ImageCard = ({ index, img }) => {
  const featureImgStyle = {
    gridRowStart: 1,
    gridColumnStart: 1,
    gridRowEnd: 3,
    gridColumnEnd: 3,
  };

  return (
    <Flex
      style={index === 0 ? featureImgStyle : {}}
      borderWidth="2px"
      borderColor="borderColor"
      borderRadius="xl"
      w="100%"
      h="100%"
    >
      <Image src={img} alt="" borderRadius="xl" />
    </Flex>
  );
};

export default ImageCard;
