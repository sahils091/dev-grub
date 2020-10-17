import React from "react";
import "./input.css";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Input = (props) => {

  useEffect(() => {
    Aos.init({
      duration: 2500,
    });
  }, []);
  return (
    <div className="field">
      <form className="field__input-form" onSubmit={props.clickHandler} data-aos="fade-up">
        <TextField
          variant="standard"
          type="text"
          label="Search"
          name="search"
          className="field__input"
          margin="normal"
          data-aos="fade-up-right"
        ></TextField>
        <div>
          <Button
            variant="contained"
            color="primary"
            size="small"
            endIcon={<SearchIcon />}
            margin="normal"
            type="submit"
            data-aos="fade-up-right"
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Input;
