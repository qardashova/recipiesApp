import React from "react";
import "./AboutProduct.scss";
import food from "../../Home/assets/food.jpg";

const AboutProduct = ({ result,priceResult }: any) => {
  return (
    <div className="AboutProduct">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${result?.image})` }}
      ></div>
      <div className="product-details">
        <h2><span>Product Title :</span> {result?.title}</h2>
        <p><span>Ready Minute:</span> {result?.readyInMinutes} mins</p>
        <p>
          <span>DishTypes:</span>
          {result.dishTypes ? result?.dishTypes.map((dish: string) => {
            return <span>{dish + " "}</span>;
          }) : ""}
        </p>
        <p><span>DishTypes:</span> {result.vegan ? "Vegan food" : "Not a vegan food" }</p>
        <p><span>HealthScore:</span> {result.healthScore}</p>
        <p><span>Total price:</span> {priceResult.totalCost} $</p>
      </div>
    </div>
  );
};

export default AboutProduct;
