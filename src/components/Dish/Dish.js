import React from "react";
import "./dish.css";

const Dish = (props) => {
  console.log(props);
  return (
    <section className="dish">
      <div className="dish__wrapper">
        <h1 className="dish__title"> Name: {props.keyword.strMeal}</h1>
        <h2 className="dish__subtitle">
          Country Of Origin : {props.keyword.strArea}
        </h2>
        <img
          className="dish__img"
          src={props.keyword.strMealThumb}
          alt={props.keyword.idMeal}
        />
        <p className="dish__blurb">
          {" "}
          Direction: {props.keyword.strInstructions}
        </p>
      </div>
    </section>
  );
};

export default Dish;
