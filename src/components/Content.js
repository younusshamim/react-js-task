import { Grid } from "@chakra-ui/react";
import React from "react";
import imgData from "../data/imgData";
import AddImages from "./AddImages";
import ImageCard from "./ImageCard";

const Content = () => {
  return (
    <Grid p="30px 40px" templateColumns="repeat(5, 1fr)" gap="5">
      {imgData.map((img, indx) => (
        <ImageCard key={indx} index={indx} img={img} />
      ))}

      <AddImages />
    </Grid>
  );
};

export default Content;
