import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useItems } from "../contexts/ItemsProvider";
import ImageCardOverlay from "./ImageCardOverlay";

const ImageCard = ({ index, item }) => {
  const { selectedItems, itemsData, setItemsData } = useItems();
  const isChecked = selectedItems.some((el) => el.id === item.id);

  const updateOrder = (draggedIndex, droppedIndex) => {
    const newItems = [...itemsData];
    const draggedItem = newItems[draggedIndex];
    newItems.splice(draggedIndex, 1);
    newItems.splice(droppedIndex, 0, draggedItem);
    setItemsData(newItems);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("index", index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const draggedIndex = e.dataTransfer.getData("index");
    const droppedIndex = index;
    updateOrder(draggedIndex, droppedIndex);
  };

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
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Image
        src={item.img}
        alt=""
        borderRadius="xl"
        opacity={isChecked ? 0.5 : 1}
      />

      <ImageCardOverlay isChecked={isChecked} item={item} />
    </Box>
  );
};

export default ImageCard;
