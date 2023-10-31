import React from "react";
import { Grid, Stack } from "@chakra-ui/react";
import Header from "./Header";
import ImageCard from "./ImageCard";
import AddImages from "./AddImages";
import { useItems } from "../contexts/ItemsProvider";

const Main = () => {
  const { itemsData } = useItems();

  return (
    <Stack bg="#ecf2f6" p="20px" minH="100vh" align="center" justify="center">
      <Stack bg="#fefeff" borderRadius="xl" w="960px" boxShadow="md" pb="10px">
        <Header />

        <Grid p="30px 40px" templateColumns="repeat(5, 1fr)" gap="5">
          {itemsData.map((img, indx) => (
            <ImageCard key={indx} index={indx} img={img} />
          ))}

          <AddImages />
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Main;
