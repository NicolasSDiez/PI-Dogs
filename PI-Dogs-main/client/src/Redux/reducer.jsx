import {
  CREATE_DOG,
  GET_DOGS,
  TEMPERAMENT,
  FILTER_TEMPERAMENT,
  FILTER_ORIGIN,
  GET_DOG_ID,
  ORDER_DOGS,
  GET_DOG_NAME
} from "./actions-types";

const initialState = {
  allDogs: [],
  dogs: [],
  temperament: [],
  detail: []
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_DOGS:
      return {
        ...state,
        allDogs: actions.payload,
        dogs: actions.payload,
      };

    case FILTER_TEMPERAMENT:
      const selectedTemperament = actions.payload;
      const filteredDogs = state.allDogs.filter((dog) =>
        dog.temperamento?.includes(selectedTemperament)
      );
      return {
        ...state,
        dogs: actions.payload === "" ? state.allDogs : filteredDogs,
      };

    case FILTER_ORIGIN:
    const selectedOrigin = actions.payload === "AllOrigins" ? state.allDogs :
    actions.payload ===  "Database" ? state.allDogs.filter((dog) =>
    dog.isDB) : 
    actions.payload === "API" &&  state.allDogs.filter((dog) =>
    !dog.isDB)
    return {
      ...state,
      dogs: selectedOrigin,
    }
    
   
    case CREATE_DOG:
      return {
        ...state,
        dogs: actions.payload,
      };

    case TEMPERAMENT:
      return {
        ...state,
        temperament: actions.payload,
      };

      case GET_DOG_ID:
      return {
        ...state,
        detail: actions.payload,
      };

      case ORDER_DOGS:
        const orderedDogs = actions.payload === 'name-asc' ?
          [...state.dogs].sort((a, b) => a.nombre.localeCompare(b.nombre)) :
          actions.payload === 'name-desc' ?
          [...state.dogs].sort((a, b) => b.nombre.localeCompare(a.nombre)) :
          [...state.dogs].sort((a, b) => {
            const parseWeight = (weight) => {
              const [min, max] = weight.split(' - ');
              return (parseFloat(min) + parseFloat(max)) / 2;
            };
      
            const weightA = parseWeight(a.peso?.metric || '0');
            const weightB = parseWeight(b.peso?.metric || '0');
      
            return actions.payload === 'weight-asc' ? weightA - weightB : weightB - weightA
          }) 
        
        return {
          ...state,
          dogs: actions.payload === "" ? state.allDogs : orderedDogs,
        };
      

        case GET_DOG_NAME:
          console.log(actions.payload);
        return {
        ...state,
        dogs: actions.payload,
        };

    default:
      return {
        ...state,
      };

      
  }
};

export default reducer;
