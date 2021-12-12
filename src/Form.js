import React, { useState } from "react";

const Form=()=>{
const[name,setName]=useState("");
const[email,setemail]=useState("");
const[phone,setphone]=useState("");

function saveUser(){
console.log({name,email,phone})
let data={name,email,phone}
fetch("https://my.careerera.com/API/course/TopCategoryMenubar.php",{
    method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
}).then((result)=>{
    result.json().then((resp)=>{
        console.log("resp",resp)
    })
})
}

    return(
        <>

    <input type="text" placeholder="enter name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
    <input type="email" placeholder="enter email" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}} /><br/>
    <input type="text" placeholder="enter phone" name="phone" value={phone} onChange={(e)=>{setphone(e.target.value)}} /><br/>
    <button type="submit" onClick={saveUser}>Register</button>



        </>
    );
};

export default Form;