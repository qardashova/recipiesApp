import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface eachFood {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

type data = {
  results: eachFood[];
  offset: number;
  number: number;
  totalResults: number;
};

type filtering = {
  offset: number;
  cuisine: string;
  sort: string;
  query: string;
  type: string;
};

type initialState = {
  loading: boolean;
  error: null;
  objFilter: filtering;
  result: data;
};

const initialState: initialState = {
  loading: false,
  error: null,
  objFilter: {
    offset: 0,
    cuisine: "",
    sort: "",
    query: "",
    type: "",
  },
  result: {
    results: [],
    offset: 0,
    number: 0,
    totalResults: 0,
  },
};

const url: string = "https://api.spoonacular.com";
const apiKey: string = "6e3d472b569a470d99a31ed6fd59174e";

//! Fetch All
const fetchAllRecipes = createAsyncThunk(
  "recipe/fetchAllRecipes",
  async ({ offset, cuisine, sort, query, type }:filtering) => {
    const response = await axios.get<data>(
      `${url}/recipes/complexSearch?apiKey=${apiKey}&number=9&offset=${offset}&cuisine=${cuisine}&sort=${sort}&query=${query}&type=${type}`
    );
    return response.data;
  }
);

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setObjFilter: (state:any, action: PayloadAction<any>) => {
      // const {name, value} = action.payload
      state.objFilter[action.payload.name] = action.payload.value;
    },
    clearObjFilter: (state) => {
      state.objFilter = initialState.objFilter
    }
  },
  extraReducers: (builder) => {
    //!fetchAllRecipes
    builder.addCase(fetchAllRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchAllRecipes.fulfilled,
      (state, action: PayloadAction<data>) => {
        state.loading = false;
        state.result = action.payload;
      }
    );
    builder.addCase(fetchAllRecipes.rejected, (state) => {
      state.loading = false;
      // state.error = null;
    });
  },
});

export const recipeReducer = recipeSlice.reducer;
export const { setObjFilter,clearObjFilter } = recipeSlice.actions;
export {
  fetchAllRecipes,
  // fetchRecipesBycategory,
  // sortRecipes,
  // searchRecipes,
  // typeRecipes,
};
