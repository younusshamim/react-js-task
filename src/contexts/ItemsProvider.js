import React, { createContext, useContext, useState } from "react";
import imgData from "../data/imgData";
const ItemContext = createContext();

const ItemsProvider = ({ children }) => {
  const [itemsData, setItemsData] = useState(imgData);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChecked = (isChecked, item) => {
    if (isChecked) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      const filterd = selectedItems.filter((el) => el.id !== item.id);
      setSelectedItems(filterd);
    }
  };

  const handleDelete = () => {
    const filterd = itemsData.filter((item) => !selectedItems.includes(item));
    setItemsData(filterd);
    setSelectedItems([]);
  };

  const value = {
    itemsData,
    selectedItems,
    handleChecked,
    handleDelete,
    setItemsData,
    setSelectedItems,
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};

export const useItems = () => {
  return useContext(ItemContext);
};

export default ItemsProvider;
