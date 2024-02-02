import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonOne from './ButtonOne';

function Post() {
     const[data,setdata]=useState([]);

     useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts')
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
                    <td>BODY</td>
               </tr>
               {
        data.map((ele,ind)=>{
          return(
           <>
              <tr key={ind}>
                    <td>{ele.userId}</td>
                    <td>{ele.id}</td>
                    <td>{ele.title}</td>
                    <td>{ele.body}</td>
              </tr>
           </>
          )
        })
      }
          </table>
    </div>
  );
}

export default Post;