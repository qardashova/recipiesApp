import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
// import { searchRecipes } from "../../../redux/reducer/recipeReducer";
import {
  fetchAllRecipes,
  setObjFilter,
} from "../../../redux/reducer/recipeReducer";
import { useDispatch, useSelector } from "react-redux";
import "./Search.scss";
import { AppDispatch, RootState } from "../../../redux/store/store";

const Search = () => {
  // const [enteredWord, setEnteredword] = useState("");
  // const [counter, setCounter] = useState(0);
  // const [intervalId, setIntervalId] = useState<any | null>((null));
  const { objFilter } = useSelector<RootState, any>((state) => state.recipe);

  const dispatch = useDispatch<AppDispatch>();

  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    dispatch(
      setObjFilter({
        name: e.target.name,
        value: e.target.value,
      })
    );
    // setCounter(0)
    // startCounter()
  }

  // const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    let delayDebounceFn = 0
    if(!objFilter.query) {
      dispatch(fetchAllRecipes(objFilter));
    }
    else {
      delayDebounceFn = setTimeout(() => {
        // Send Axios request here
        dispatch(fetchAllRecipes(objFilter));
      }, 3000);
    }
    return () => clearTimeout(delayDebounceFn);

  }, [objFilter.query])

  function clearInput(e: any) {
    e.preventDefault();
    dispatch(
      setObjFilter({
        name: "query",
        value: "",
      })
    );
  }

  return (
    <div className="Seacrh">
      <form onSubmit={(e: any) => {e.preventDefault()}}>
        <input
          type="text"
          placeholder="Serach for..."
          name="query"
          onChange={handleFilter}
          value={objFilter.query}
        />
        <button>
          {objFilter.query.length <= 0 ? (
            <AiOutlineSearch className="icon" />
          ) : (
            <AiOutlineClose className="icon" onClick={clearInput} />
          )}
        </button>
      </form>
    </div>
  );
};

export default Search;
