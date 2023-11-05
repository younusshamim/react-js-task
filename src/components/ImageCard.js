import React, { forwardRef } from "react";
import { useItems } from "../contexts/ItemsProvider";
import { Box, Image } from "@chakra-ui/react";
import ImageCardOverlay from "./ImageCardOverlay";

const ImageCard = forwardRef(({ item, index, faded, style, ...props }, ref) => {
  const { selectedItems } = useItems();
  const isChecked = selectedItems.some((el) => el.id === item.id);

  const featureImgStyle = {
    opacity: faded ? "0.2" : "1",
    transformOrigin: "0 0",
    gridRowStart: index === 0 ? "span 2" : null,
    gridColumnStart: index === 0 ? "span 2" : null,
    ...style,
  };

  return (
    <Box
      {...props}
      ref={ref}
      style={featureImgStyle}
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
      h={index == 0 ? "350" : "165px"}
    >
      <Image
        src={item.img}
        alt=""
        borderRadius="xl"
        opacity={isChecked ? 0.5 : 1}
        objectFit="cover"
        w="full"
        h="full"
      />

      <ImageCardOverlay isChecked={isChecked} item={item} />
    </Box>
  );
});

export default ImageCard;
