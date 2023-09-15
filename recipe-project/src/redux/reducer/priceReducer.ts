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


const priceBreakdown: any = createAsyncThunk(
  "recihpe/fetchPriceById",
  async (id: number) => {    
    const response = await axios.get<any>(
      `${url}/recipes/${id}/priceBreakdownWidget.json?apiKey=${apiKey}`
    );
    // console.log(response);
    console.log(response.data);
    
    return response.data;
  }
);




const onePriceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    //! PriceBreakdown
    builder.addCase(
      priceBreakdown.pending,
      (state, action: PayloadAction<any>) => {
        // state.result.push(action.payload);
        state.loading = true;
      }
    );
    builder.addCase(
      priceBreakdown.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.result = action.payload;
      }
    );
    builder.addCase(
      priceBreakdown.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        // state.error = null;
      }
    );
  },
});

export const onePriceReducer = onePriceSlice.reducer;
export {  priceBreakdown };
