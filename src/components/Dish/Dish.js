import React from "react";
import "./dish.css";

const Dish = (props) => {
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
          <strong>Direction : </strong> {props.keyword.strInstructions}
        </p>

        <h4 className="dish__link">
          {props.keyword.strSource ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.keyword.strSource}
            >
              <strong>Full Recipe Here</strong>
            </a>
          ) : null}
        </h4>
        <h4 className="dish__video">
          {props.keyword.strYoutube ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.keyword.strYoutube}
            >
              <strong>Watch the Video</strong>
            </a>
          ) : null}
        </h4>
      </div>
    </section>
  );
};

export default Dish;
