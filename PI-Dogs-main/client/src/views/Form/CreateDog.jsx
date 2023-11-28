import React, { useEffect } from "react";
import { Temperaments, createDog } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Form/CreateDog.module.css";
import validateForm from "./ValidateForm";

const CreateDog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const temperaments = useSelector(state => state.temperament);
  const [form, setForm] = useState({
    imagen: "",
    nombre: "",
    alturaMin: "",
    alturaMax: "",
    pesoMin: "",
    pesoMax: "",
    longevidad: "",
    temperamento: [],
  });

  useEffect(() => {
    dispatch(Temperaments());
  }, [dispatch]);
  


  const [errorMessage, setErrorMessage] = useState({});
  const [successMessage, setSuccessMessage] = useState("")



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });

    setErrorMessage(validateForm({
      ...form,
      [name]: value,
    }))
  };

  const handleTemperamentChange = (event) => {
    const selectTemperament = event.target.value;

    setForm((prevForm) => ({
      ...prevForm,
      temperamento: prevForm.temperamento.includes(selectTemperament)
        ? prevForm.temperamento.filter((item) => item !== selectTemperament)
        : [...prevForm.temperamento, selectTemperament],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    const newDog = {
      imagen: form.imagen,
      nombre: form.nombre,
      altura: `${form.alturaMin} - ${form.alturaMax}`,
      peso: `${form.pesoMin} - ${form.pesoMax}`,
      longevidad: parseInt(form.longevidad),
      temperaments: form.temperamento
    };

    dispatch(createDog(newDog))

      .then(() => {
        setSuccessMessage("Dog created successfully!");
        setTimeout(() => {
          navigate(`/home`);
        }, 2000);
      })
      .catch((error) => {
        setErrorMessage("Error creating dog");
        console.error("Error creating dog:", error);
      });
  };



  return (

    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div>
          <label className={styles.label}>Image: </label>
          <input
            className={styles.inputField}
            type="text"
            name="imagen"
            value={form.imagen}
            onChange={handleInputChange}
          />
        </div>
        {!errorMessage.imagen ? "" : (
          <div className={styles.errorMessage}>{errorMessage.imagen}</div>
        )}

        <div>
          <label className={styles.label}>Name: </label>
          <input
            className={styles.inputField}
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleInputChange}
          />
        </div>
        {errorMessage.nombre && (
          <div className={styles.errorMessage}>{errorMessage.nombre}</div>
        )}



        <div>
          <label className={styles.label}>Min Height: </label>
          <input
            className={styles.inputField}
            type="number"
            name="alturaMin"
            value={form.alturaMin}
            onChange={handleInputChange}
          />

        </div>

        <div>
          <label className={styles.label}>Max Height: </label>
          <input
            className={styles.inputField}
            type="number"
            name="alturaMax"
            value={form.alturaMax}
            onChange={handleInputChange}
          />
          {errorMessage.alturaMin && <div className={styles.errorMessage}>{errorMessage.alturaMin}</div>}
        </div>

        <div>
          <label className={styles.label}>Min Weight: </label>
          <input
            className={styles.inputField}
            type="number"
            name="pesoMin"
            value={form.pesoMin}
            onChange={handleInputChange}
          />

        </div>

        <div>
          <label className={styles.label}>Max Weight: </label>
          <input
            className={styles.inputField}
            type="number"
            name="pesoMax"
            value={form.pesoMax}
            onChange={handleInputChange}
          />
          {errorMessage.pesoMin && <div className={styles.errorMessage}>{errorMessage.pesoMin}</div>}
        </div>

        <div>
          <label className={styles.label}>Life Span: </label>
          <input
            className={styles.inputField}
            type="number"
            name="longevidad"
            value={form.longevidad}
            onChange={handleInputChange}
          />
        </div>
        {errorMessage.longevidad && (
          <div className={styles.errorMessage}>{errorMessage.longevidad}</div>
        )}

        <div>
          <label>
            Temperaments:
            <select className={styles.select} multiple value={form.temperamento} onChange={handleTemperamentChange}>
              {temperaments.map((temperament, index) => (
                <option key={index} value={temperament.nombre}>
                  {temperament.nombre}
                </option>
              ))}
            </select>
          </label>
        </div>
        {successMessage && <div className={styles.successMessage}>{successMessage}</div>}

        <button className={styles.buttonContainer} type="submit">
          Create Dog
        </button>
      </form>
    </div>
  );
};

export default CreateDog;