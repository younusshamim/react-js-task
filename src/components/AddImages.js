import React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { FaRegImage } from "react-icons/fa";

const AddImages = () => {
  return (
    <Stack
      borderColor="borderColor"
      borderWidth="2px"
      borderStyle="dashed"
      borderRadius="xl"
      align="center"
      justify="center"
      gap="15px"
      cursor="pointer"
    >
      <Box fontSize="20px">
        <FaRegImage />
      </Box>
      <Heading fontSize="18px" fontWeight="semibold">
        Add Images
      </Heading>
    </Stack>
  );
};

export default AddImages;
