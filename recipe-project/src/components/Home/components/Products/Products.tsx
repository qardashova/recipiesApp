import React, { useEffect } from "react";
import "./Products.scss";
import Product from "./components/Product";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store/store";
import { fetchAllRecipes } from "../../../../redux/reducer/recipeReducer";
import { PulseLoader } from "react-spinners";
// import { setResult } from "../../../../redux/reducer/recipeReducer";

const Products = () => {
  const { result, loading,objFilter } = useSelector<RootState, any>(
    (state) => state.recipe
  );
  
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // getAllRecepies().then((res) => dispatch(setResult(res.data)));
    dispatch(fetchAllRecipes(objFilter));
    console.log(result);
    
  }, [objFilter.sort, objFilter.type, objFilter.cuisine, objFilter.offset]);

  // console.log(result);

  // console.log(result[0]?.results);

  return (
    <div className="Products">
      <h2>Products</h2>

      {/* <Link to="./details" style={{ textDecoration: "none" }}>
          <Product />
        </Link> */}
      {loading || Object.keys(result).length === 0 ? (
        <div className="loading-container">
          <PulseLoader color="#2b80b5"/>
        </div>
      ) : (
        <div className="products-container">
          {result?.results?.map((recipe: any) => {
            return (
              <Link
                key={recipe.id}
                to={`./${recipe.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Product title={recipe.title} image={recipe.image} productId={recipe.id}/>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
