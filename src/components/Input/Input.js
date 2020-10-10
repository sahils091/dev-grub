import React from 'react';
import "./input.css";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";


const Input = (props) => {
    return (
        <div className="field" >
         <form className="field__input-form" onSubmit={props.clickHandler}>
          <TextField
           variant="standard"
           type="text"
           label="Search"
           name="search"
           className="field__input"
           margin="normal"
          ></TextField>
          <div>
          <Button variant="contained" color="primary" size="small" endIcon={<SearchIcon/>}
     margin="normal"  type="submit">
     Search
     </Button>
            

          </div>
    
      
        </form>
            
        </div>
    );
};

export default Input;