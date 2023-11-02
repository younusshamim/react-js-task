import React from "react";
import { Box, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import { FaRegImage } from "react-icons/fa";
import { useItems } from "../contexts/ItemsProvider";

const AddImages = () => {
  const { itemsData, setItemsData } = useItems();

  const handleFileChange = (e) => {
    const selectedImage = e.target.files;

    const newItems = Array.from(selectedImage).map((file) => {
      const id = itemsData.length + 1;
      const img = URL.createObjectURL(file);
      return { id, img };
    });
    setItemsData([...itemsData, ...newItems]);
  };

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
      py="40px"
    >
      <Input
        display="none"
        type="file"
        multiple
        name="images"
        id="images"
        title="Upload Images"
        onChange={handleFileChange}
      />

      <FormLabel htmlFor="images">
        <Stack align="center" cursor="pointer">
          <Box fontSize="20px">
            <FaRegImage />
          </Box>
          <Heading fontSize="18px" fontWeight="semibold">
            Add Images
          </Heading>
        </Stack>
      </FormLabel>
    </Stack>
  );
};

export default AddImages;
