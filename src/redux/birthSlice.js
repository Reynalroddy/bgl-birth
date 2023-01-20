import { createSlice } from "@reduxjs/toolkit";

export const birthSlice = createSlice({
  name: "header",
  initialState: {
    geoPoliticalZones:[],
    states:[],
    lgas:[],
    centers:[],
    registerations:[],
isLoading:false,
search: "",
    result_per_page: 20,
    page: 1,
    GeoZoneID: 1,
    StateID: null,
    LGAID: null,
    CenterId: null,
    Sex: null,
    Age: null,
    BirthType: null,
    BirthOrder: null,
    BirthPlace: null
  },

  reducers: {
    getZonesStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getZonesSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          geoPoliticalZones: action.payload,
        };
      },
      getZonesFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },

      getStateStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getStateSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          states: action.payload,
        };
      },
      getStateFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },
      getRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          registerations: action.payload,
        };
      },
      getRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },
      changePage: (state, action) => {
        return {
          ...state,
          page: action.payload,
        };
      },
      handleChange: (state, action) => {
        return {
          ...state,
          page: 1,
          [action.payload.name]: action.payload.value,
        };
      },

//     addItem:(state,action)=>{
// state.items = [...state.items,action.payload];
// localStorage.setItem('itemsInvoice',JSON.stringify(state.items));
//     },
//     removeItem:(state,action)=>{
// const id = action.payload;
// const newItem = state.items.filter((item)=>item.id !==id);
// state.items =newItem;
// localStorage.setItem('itemsInvoice',JSON.stringify(state.items));
//     },
//     toggleHeader: (state) => {
//       return { ...state, isOpen: !state.isOpen };
//     },

//     handleChange:(state,action)=>{
// return {...state,[action.payload.name]:action.payload.value};

//     }
  },
});

export const { getZonesFailure,getZonesStart,getZonesSuccess,getStateFailure,getStateStart,getStateSuccess,getRegFailure,getRegStart,getRegSuccess,changePage,handleChange } = birthSlice.actions;

export default birthSlice.reducer;