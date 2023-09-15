import { configureStore } from "@reduxjs/toolkit";
import { recipeReducer } from "../reducer/recipeReducer";
import { oneRecipeReducer } from "../reducer/detailsReducer";
import { onePriceReducer } from "../reducer/priceReducer";
// import { onePriceReducer } from "../reducer/priceReducer";

export const store = configureStore({
    reducer:{
        recipe: recipeReducer,
        oneRecipe : oneRecipeReducer,
        onePrice : onePriceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

