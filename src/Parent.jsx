import React, { createContext, useEffect, useState } from "react";

export const MovieContext= createContext();


export const MovieProvider =props=>{
    const[movies,setmovie]= useState([]);
    const[loaded, setload]= useState(false);


    async function getdata(){
        const data= await fetch('https://my.careerera.com/API/course/TopCategoryMenubar.php');
        const data1= await data.json();
        setmovie(data1.records);
        setload(true);
    }
useEffect(()=>{
            getdata();
        },[])

    return(
<>
        <MovieContext.Provider  value={{value1:[movies,setmovie], value2:[loaded, setload]}}  >
        {props.children}
        </MovieContext.Provider>
</>
    );
}