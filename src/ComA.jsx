import React, { createContext, useContext, useState } from "react";
import { MovieContext, MovieProvider } from "./Parent";
const ComA=()=>{

    const {value1, value2}= useContext(MovieContext);
    const [movies,setmovie] = value1;
    const [loaded, setload] = value2;


    // const value= useContext(MovieContext)
    // console.log(value)

console.log(loaded? movies: "Loading");
    
    
    return(
<>
{/* {
    loaded?


    <h1>{movies[0].category_title}</h1>
    
    
    
    
    
    
    
    
    
    
    
    
    :"Loading"
} */}
<h1>HEllo</h1>
</>
    );
}

export default ComA;