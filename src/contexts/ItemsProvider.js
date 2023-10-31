import React, { createContext, useContext, useState } from "react";
import imgData from "../data/imgData";
const ItemContext = createContext();

const ItemsProvider = ({ children }) => {
  const [itemsData, setItemsData] = useState(imgData);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChecked = (isChecked, img) => {
    if (isChecked) {
      setSelectedItems((prev) => [...prev, img]);
    } else {
      const filterd = selectedItems.filter((item) => item !== img);
      setSelectedItems(filterd);
    }
  };

  const handleDelete = () => {
    const filterd = itemsData.filter((item) => !selectedItems.includes(item));
    setItemsData(filterd);
    setSelectedItems([]);
  };

  const value = { itemsData, selectedItems, handleChecked, handleDelete };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};

export const useItems = () => {
  return useContext(ItemContext);
};

export default ItemsProvider;
