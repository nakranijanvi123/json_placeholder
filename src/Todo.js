import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonOne from './ButtonOne';

function Todo() {
     const[data,setdata]=useState([]);

     useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/todos')
       .then(function (response) {
         console.log(response.data)
         setdata(response.data)
       })
       .catch(function (error) {
         console.log(error)
       })  
     },[])
  return (
    <div className='App'>
     <ButtonOne></ButtonOne>
          <table border={1}>
               <tr>
                    <td>USERID</td>
                    <td>ID</td>
                    <td>TITLE</td>
                    <td>COMPLATED</td>
               </tr>
               {
        data.map((ele,ind)=>{
          return(
           <>
              <tr key={ind}>
                    <td>{ele.userId}</td>
                    <td>{ele.id}</td>
                    <td>{ele.title}</td>
                    <td>{ele.completed ? 'True' : 'False'}</td>
              </tr>
           </>
          )
        })
      }
          </table>
    </div>
  );
}

export default Todo;