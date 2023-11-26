import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Temperaments, filterByTemperament } from '../../Redux/actions';
import styles from './TemperamentFilter.module.css';

const TemperamentFilter = () => {
  const [selectedTemperament, setSelectedTemperament] = useState('');
  const dispatch = useDispatch(); 

  const handleTemperamentChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTemperament(selectedValue);
    dispatch(filterByTemperament(selectedValue));
  };

  const temperamentos = useSelector(state => state.temperament);

  return (
    <div className={styles.sortingOptions}>
      <label className={styles.label}>Filter by Temperament:</label>
      <select className={styles.select} value={selectedTemperament} onChange={handleTemperamentChange}>
        <option value="">All</option>
        {temperamentos.map((temperament) => (
          <option key={temperament.id} value={temperament.nombre}>
            {temperament.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TemperamentFilter;