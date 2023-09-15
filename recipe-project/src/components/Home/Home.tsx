import React from "react";
import Search from "./components/Search";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import Pages from "./components/Pages";
import Sort from "./components/Sorting/Sort";
import "./Home.scss";
import Type from "./components/Typing/Type";

const Home = () => {
  return (
    <div className="Home-page">
      <div className="Main">
        <div className="main-container">
          <div className="black-layout">
            <h1>Search for your favorite Food </h1>
            <Search />
            <Type />
          </div>
        </div>
      </div>
      <div className="products-categories">
        <div>
          <Products />
          <Pages />
        </div>
        <div>
          <Sort />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Home;
