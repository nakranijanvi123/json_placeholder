import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonOne from './ButtonOne';

function Home() {
  return (
    <div className='App'>
     <ButtonOne></ButtonOne>
    </div>
  );
}

export default Home;