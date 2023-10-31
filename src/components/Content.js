import { Flex, Grid, Image } from "@chakra-ui/react";
import React from "react";
import imgData from "../data/imgData";

const Content = () => {
  const featureImgStyle = {
    gridRowStart: 1,
    gridColumnStart: 1,
    gridRowEnd: 3,
    gridColumnEnd: 3,
  };

  return (
    <Grid p="30px 40px" templateColumns="repeat(5, 1fr)" gap="5">
      {imgData.map((img, indx) => (
        <Flex
          style={indx === 0 ? featureImgStyle : {}}
          borderWidth="2px"
          borderColor="borderColor"
          borderRadius="xl"
          key={indx}
        >
          <Image src={img} alt="" borderRadius="xl" />
        </Flex>
      ))}
    </Grid>
  );
};

export default Content;
