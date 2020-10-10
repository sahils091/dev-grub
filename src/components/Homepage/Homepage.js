import React, { useEffect, useState } from "react";
import "./homepage.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Header from "../Header/Header";
import Input from "../Input/Input";



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
          return }else {
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
    <Header/>
      <div className="home__input-wrapper">
      <Input clickHandler={clickHandler}/>
      
      </div>

      <main>
        <div>
          <h1> Name: {keyword.strMeal}</h1>
          <h2>Country Of Origin : {keyword.strArea}</h2>
          <img src={keyword.strMealThumb} alt={keyword.idMeal} />
          <p> Direction: {keyword.strInstructions}</p>
        </div>
      </main>
    </div>
  );
};

export default Homepage;


// {/* <form className="home__input-form" onSubmit={clickHandler}>
// {/* <input type="text" name="search" className="home__input" /> */}

// <TextField
// //  onSubmit={clickHandler}
//  variant="standard"
//  type="text"
//  label="Search"
//  name="search"
// ></TextField>
// <Button variant="contained" color="primary" size="small" endIcon={<SearchIcon/>}  type="submit">
// Search
// </Button>
  

// </form> */}