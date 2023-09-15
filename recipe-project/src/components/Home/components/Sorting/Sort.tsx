import React from "react";
import "./Sort.scss";
import { Select, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
// import { sortRecipes } from "../../../../redux/reducer/recipeReducer";
import { fetchAllRecipes,setObjFilter } from "../../../../redux/reducer/recipeReducer";
import { AppDispatch } from "../../../../redux/store/store";

const sortData: string[] = [
  "price",
  "healthiness",
  "time",
  "alcohol",
  "energy",
  "calcium",
  "max-used-ingredients",
  "min-missing-ingredients",
  "protein",
];

const Sort = () => {
  const dispatch = useDispatch<AppDispatch>();

  function sortingRecipes(data: string) {
    dispatch(setObjFilter({ name: "sort" , value : data}));
  }

  return (
    <div className="Sort">
      <h2>Sort</h2>
      <Select
        sx={{
          width: 250,
          height: 50,
        }}
      >
        {sortData.map((data, i: number) => {
          return (
            <MenuItem
              key={i}
              value={i + 1}
              onClick={() => sortingRecipes(data)}
            >
              {data}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};

export default Sort;
