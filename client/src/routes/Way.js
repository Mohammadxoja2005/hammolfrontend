import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import {Home, SinglePage, Category, SearchRes} from '../pages';

function Way() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/page/:id' element={<SinglePage/>}/> 
            <Route exact path='/category/:name' element={<Category/>}/> 
            <Route exact path='/search/:name' element={<SearchRes/>}/> 
        </Routes>
    </Router>
  )
}

export default Way