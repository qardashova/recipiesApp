import React from "react";
import "./Categories.scss";
import Category from "./components/Category";

type categories = string[];

const Categories = () => {
  return (
    <div className="Categories">
      <h2>Categories</h2>
      <div className="categories-container">
        {categoriesData.map((category, i: number) => {
          return <Category key={i} categoryName={category} />;
        })}
      </div>
    </div>
  );
};

export default Categories;

const categoriesData: categories = [
  "African",
  "Asian",
  "American",
  "British",
  "Chinese",
  "European",
  "French",
  "German",
  "Indian",
  "Italian",
  "Japanese",
  "Korean",
  "Mexican",
  "Spanish",
  "Thai",
];
