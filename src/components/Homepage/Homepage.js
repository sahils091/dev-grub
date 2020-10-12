import React, { useEffect, useState } from "react";
import "./homepage.css";
import axios from "axios";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Dish from "../Dish/Dish";
import Footer from "../Footer/Footer";

const Homepage = () => {
  const [keyword, setKeyword] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    let key = e.target.search.value;
    console.log(key);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + key)
      .then((res) => {
        let meal;
        if (res.data.meals === null) {
          return;
        } else {
          meal = res.data.meals[0];
        }
        setKeyword(meal);
      });
  };

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        console.log(res.data.meals);
        setKeyword(res.data.meals[0]);
      });
  }, []);

  console.log(keyword);

  return (
    <div className="home">
      <header>
        <Header />
      </header>
      <main className="home__main-wrapper">
        <div>
          <Input clickHandler={clickHandler} />
          <Dish keyword={keyword} />
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Homepage;
