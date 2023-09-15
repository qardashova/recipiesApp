import React, { useEffect, useState } from "react";
import "./Details.scss";
import AboutProduct from "./components/AboutProduct";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../../redux/reducer/detailsReducer";
import { priceBreakdown } from "../../redux/reducer/priceReducer";

const Details = () => {
  const { loading, result, error } = useSelector<RootState, any>(
    (state) => state.oneRecipe
  );
  const {
    loading: priceLoading,
    result: priceResult,
    error: priceError,
  } = useSelector<RootState, any>((state) => state.onePrice);

  console.log(priceResult);
  console.log(result);
  

  let dispatch = useDispatch<AppDispatch>();

  let params = useParams();
  // console.log(params);

  useEffect(() => {
     dispatch(fetchRecipeById(params?.id));
     dispatch(priceBreakdown(params?.id));
  }, []);

  // console.log(loading);
  // console.log(result);
  // console.log(error);

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e: React.SyntheticEvent, tabIndex: number) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };

  // console.log();
  //? occasions

  return (
    <div className="Details">
      <div className="page-title">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <span>
            <BiArrowBack />
            <span style={{ marginLeft: "10px" }}>Back</span>
          </span>
        </Link>
        <h1>Details Page</h1>
      </div>
      <div className="details-container">
        <AboutProduct result={result} priceResult={priceResult} />
        <Tabs value={currentTabIndex} style={{}} onChange={handleTabChange}>
          <Tab label="Summary" />
          <Tab label="Instructions" />
          <Tab label="Analyzed Instructors" />
        </Tabs>

        {/* TAB 1 Contents */}
        {currentTabIndex === 0 && (
          <Box sx={{ p: 3 }} style={{ height: "300px" }}>
            <Typography variant="h5">Summary of the Recipe</Typography>
            <Typography>{`${result.summary}`}</Typography>
          </Box>
        )}

        {/* TAB 2 Contents */}
        {currentTabIndex === 1 && (
          <Box sx={{ p: 3 }} style={{ height: "300px" }}>
            <Typography variant="h5">Instructions of the Recipe</Typography>
            <Typography>{result.instructions}</Typography>
          </Box>
        )}

        {/* TAB 3 Contents */}
        {currentTabIndex === 2 && (
          <Box sx={{ p: 3 }} style={{ height: "300px" }}>
            <Typography variant="h5">Analyzed Instructors</Typography>
            <Typography>
              <div className="ingredients">
                {priceResult.ingredients && priceResult.ingredients?.map((ing:any,i:number) => {
                  return <div key={i} className="indredient">
                    <p><span>Name:</span> {ing.name}</p>
                    <p><span>Price:</span> {ing.price} $</p>
                  </div>
                })}
              </div>
            </Typography>
          </Box>
        )}
      </div>
    </div>
  );
};

export default Details;
