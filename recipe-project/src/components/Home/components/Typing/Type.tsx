import React from "react";
import "./Type.scss";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
// import { typeRecipes } from "../../../../redux/reducer/recipeReducer";
import { fetchAllRecipes,setObjFilter } from "../../../../redux/reducer/recipeReducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store/store";

const typeData: string[] = [
  "main course",
  "breakfast",
  "bread",
  "soup",
  "dessert",
  "appetizer",
  "salad",
  "beverage",
  "snack",
  "drink",
];

const Type = () => {
  const dispatch = useDispatch<AppDispatch>();

  function typingRecipes(data: string) {
    dispatch(setObjFilter({name: "type",value: data}));
  }

  return (
    <div className="Type">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Type"
          sx={{
            width: 250,
            height: 50,
          }}
        >
        {typeData.map((data, i: number) => {
          return (
            <MenuItem key={i} value={i + 1} onClick={() => typingRecipes(data)}>
              {data}
            </MenuItem>
          );
        })}
        </Select>
      </FormControl>

    </div>
  );
};

export default Type;
