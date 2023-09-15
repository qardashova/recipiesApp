import React from "react";
import "./Pages.scss";
import Pagination from "@mui/material/Pagination";
import { useSelector, useDispatch } from "react-redux";
// import { getAllRecepies } from '../../../api/api-recipe'
import { AppDispatch, RootState } from "../../../redux/store/store";
import { fetchAllRecipes,setObjFilter } from "../../../redux/reducer/recipeReducer";

const Pages = () => {
  const { result } = useSelector<RootState, any>((state) => state.recipe);

  let dispatch = useDispatch<AppDispatch>();
  // console.log(result);

  // let number = Math.floor(result?.totalResults/result?.number)
  function handleChange(e: any,p: any) {
    console.log(e);
    // console.log(p);
    // dispatch(fetchAllRecipes({offset: p*9}))
    dispatch(setObjFilter({name: "offset", value: p*9}));
  }

  return (
    <div className="Pages">
      <Pagination
        count={Math.floor(result?.totalResults/result?.number)}
        variant="outlined"
        color="primary"
        onChange={handleChange}
      />
    </div>
  );
};

export default Pages;
