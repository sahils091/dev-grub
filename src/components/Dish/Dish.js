import React from "react";
import "./dish.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Dish = (props) => {
  return (
    <section className="dish">
      <div className="dish__wrapper" data-aos="fade-up">
        <h1 className="dish__title"  data-aos="fade-up-right"> Name: {props.keyword.strMeal}</h1>
        <h2 className="dish__subtitle"  data-aos="fade-up-right">
          Country Of Origin : {props.keyword.strArea}
        </h2>
        <img
          className="dish__img"
          src={props.keyword.strMealThumb}
          alt={props.keyword.idMeal}
          data-aos="fade-up-right"
        />
        <p className="dish__blurb">
          {" "}
          <strong >Direction : </strong> {props.keyword.strInstructions}
        </p>

        <h4 className="dish__link"  data-aos="fade-up-right">
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
        <h4 className="dish__video"  data-aos="fade-up-right">
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
