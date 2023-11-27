import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Temperaments, filterByTemperament } from '../../Redux/actions';
import styles from './TemperamentFilter.module.css';

const TemperamentFilter = ({onPageChange}) => {
  const [selectedTemperament, setSelectedTemperament] = useState('');
  const dispatch = useDispatch(); 

  const handleTemperamentChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTemperament(selectedValue);
    dispatch(filterByTemperament(selectedValue));
    onPageChange(1)
  };

  const temperamentos = useSelector(state => state.temperament);

  return (
    <div className={styles.sortingOptions}>
      <label className={styles.label}>Filter by Temperament:</label>
      <select className={styles.select} value={selectedTemperament} onChange={handleTemperamentChange}>
        <option value="">All</option>
        {temperamentos.map((temperament, index) => (
          <option key={index} value={temperament.nombre}>
            {temperament.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TemperamentFilter;