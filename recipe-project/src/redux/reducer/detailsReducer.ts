import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type initialState = {
  loading: boolean;
  error: null;
  result: any;
};

const initialState: initialState = {
  loading: false,
  error: null,
  result: []
};

const url: string = "https://api.spoonacular.com";
const apiKey: string = "5a012144de3f4d7fb15853a4793c84aa";


const fetchRecipeById: any = createAsyncThunk(
  "recipfgdge/fetchRecipeById",
  async (id: number) => {    
    const response = await axios.get<any>(
      `${url}/recipes/${id}/information?apiKey=${apiKey}`
    );
    // console.log(response);
    
    return response.data;
  }
);


const oneRecipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    //! fetchRecipeById
    builder.addCase(
      fetchRecipeById.pending,
      (state, action: PayloadAction<any>) => {
        // state.result.push(action.payload);
        state.loading = true;
      }
    );
    builder.addCase(
      fetchRecipeById.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.result = action.payload;
      }
    );
    builder.addCase(
      fetchRecipeById.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        // state.error = null;
      }
    );
  },
});

export const oneRecipeReducer = oneRecipeSlice.reducer;
export { fetchRecipeById };
