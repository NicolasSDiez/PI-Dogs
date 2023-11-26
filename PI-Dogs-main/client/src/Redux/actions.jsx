import axios from "axios";
import {
  GET_DOGS,
  CREATE_DOG,
  TEMPERAMENT,
  FILTER_TEMPERAMENT,
  FILTER_ORIGIN,
  GET_DOG_ID,
  ORDER_DOGS,
  GET_DOG_NAME
} from "./actions-types";

export const fetchDogs = () => {
  const endpoint = "http://localhost:3001/dogs";
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      ;
      return dispatch({
        type: GET_DOGS,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};
export const Temperaments = () => {
  const endpoint = "http://localhost:3001/temperaments";
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      
      return dispatch({
        type: TEMPERAMENT,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};
export const filterByTemperament = (selectedTemperament) => {
  return {
    type: FILTER_TEMPERAMENT,
    payload: selectedTemperament,
  };
};

export const originFilter = (origin) => {
  return {
    type: FILTER_ORIGIN,
    payload: origin,
  }
}

export const createDog = (dogData) => {
  const endpoint = "http://localhost:3001/dogs";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, dogData);
      console.log("El perro fue creado exitosamente");
      return dispatch({
        type: CREATE_DOG,
        payload: await fetchDogs(),
      });
    } catch (error) {
      console.error(error.message);
    }
  };


};

export const getId = (id)=>{
  return async (dispatch) => {
    try {
      const {data} = await axios(`http://localhost:3001/dogs/${id}`);
      //console.log("esto es el perruqui", data);
      dispatch({
        type: GET_DOG_ID,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };

}

export const orderDogs = (order) => {
  return {
    type: ORDER_DOGS,
    payload: order,
  };
};


export const getDogsName = (name) => {
  return async (dispatch) => {
    try {
      const {data} = await axios(`http://localhost:3001/dog/name`, {params: {name}});
      console.log(data)
      dispatch({
        type: GET_DOG_NAME,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  
}
