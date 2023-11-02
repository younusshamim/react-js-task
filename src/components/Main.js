import React, { useState } from "react";
import { Box, Grid, Image, Stack, Text } from "@chakra-ui/react";
import Header from "./Header";
import ImageCard from "./ImageCard";
import AddImages from "./AddImages";
import { useItems } from "../contexts/ItemsProvider";
import MyDragOverlay from "./MyDragOverlay";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";

const Main = () => {
  const { itemsData, setItemsData } = useItems();
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active?.id !== over?.id) {
      setItemsData((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  function handleDragCancel() {
    setActiveId(null);
  }

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  return (
    <Stack
      bg="#ecf2f6"
      p={{ base: "0px", md: "20px" }}
      minH="100vh"
      align="center"
      justify="center"
    >
      <Stack
        bg="#fefeff"
        borderRadius={{ base: "none", md: "xl" }}
        w={{ base: "100%", lg: "960px" }}
        boxShadow="md"
        pb="10px"
      >
        <Header />

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <SortableContext items={itemsData} strategy={() => null}>
            <Grid
              p="30px 40px"
              p={{ base: "30px 30px", md: "30px 40px" }}
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(5, 1fr)",
              }}
              gap="5"
              position="relative"
            >
              {itemsData.map((item, indx) => (
                <ImageCard index={indx} item={item} key={indx} />
              ))}

              <AddImages />
            </Grid>
          </SortableContext>

          <MyDragOverlay activeId={activeId} itemsData={itemsData} />
        </DndContext>
      </Stack>
    </Stack>
  );
};

export default Main;
