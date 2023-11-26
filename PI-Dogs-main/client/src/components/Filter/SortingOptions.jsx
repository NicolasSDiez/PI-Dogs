import React, { useState } from "react";
import styles from "./SortingOptions.module.css";
import { useDispatch } from "react-redux";
import { orderDogs } from "../../Redux/actions";


const SortingOptions = () => {
  const [orderBy, setOrderBy] = useState('');
  const dispatch = useDispatch();
  
  const handleSortChange = (event) => {
    setOrderBy(event.target.value);
    dispatch(orderDogs(event.target.value));
    console.log("este es mi valor",event.target.value)
  };

  return (
    <div className={styles.sortingOptions}>
      <label className={styles.label}>Sort by:</label>
      <select className={styles.select} onChange={handleSortChange} value={orderBy}>
        <option value="">All</option>
        <option value="name-asc">A-Z</option>
        <option value="name-desc">Z-A</option>
        <option value="weight-asc">Weight Ascending</option>
        <option value="weight-desc">Weight Descending</option>
      </select>
    </div>
  );
};

export default SortingOptions;