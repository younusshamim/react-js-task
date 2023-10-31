import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import ImageCardOverlay from "./ImageCardOverlay";

const ImageCard = ({ index, img }) => {
  const [checked, setChecked] = useState(false);

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
      <Image src={img} alt="" borderRadius="xl" opacity={checked ? 0.5 : 1} />

      <ImageCardOverlay checked={checked} setChecked={setChecked} />
    </Box>
  );
};

export default ImageCard;
