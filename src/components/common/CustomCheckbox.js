import React from "react";
import { Checkbox } from "@chakra-ui/react";

const CustomCheckbox = ({ children, ...rest }) => {
  return (
    <Checkbox {...rest} spacing="15px" size="md" colorScheme="blueSchema">
      {children}
    </Checkbox>
  );
};

export default CustomCheckbox;
