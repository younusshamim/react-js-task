import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useItems } from "../contexts/ItemsProvider";
import ImageCardOverlay from "./ImageCardOverlay";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const ImageCard = ({ index, item }) => {
  const { selectedItems } = useItems();
  const isChecked = selectedItems.some((el) => el.id === item.id);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const featureImgStyle = {
    gridRowStart: index === 0 ? "span 2" : null,
    gridColumnStart: index === 0 ? "span 2" : null,
    ...style,
  };

  return (
    <Box
      style={index === 0 ? featureImgStyle : style}
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
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <Image
        src={item.img}
        alt=""
        borderRadius="xl"
        opacity={isChecked ? 0.5 : 1}
        h="full"
        objectFit="contain"
      />

      <ImageCardOverlay isChecked={isChecked} item={item} />
    </Box>
  );
};

export default ImageCard;
