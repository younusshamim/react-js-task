import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import React from "react";

const DragOverlay = ({ activeId, itemsData }) => {
  return (
    <DragOverlay adjustScale={true} zIndex="99">
      {activeId ? (
        <Box borderWidth="2px" borderColor="borderColor" borderRadius="xl">
          <Image
            src={itemsData.find((item) => item.id === activeId)?.img}
            alt=""
            borderRadius="xl"
          />
        </Box>
      ) : null}
    </DragOverlay>
  );
};

export default DragOverlay;
