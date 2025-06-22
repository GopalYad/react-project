import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from './compnents/Counter'
import Home from './compnents/Home';
import Examine from './compnents/Examine';
import Todo from './compnents/Todo';
import Ecommerce from './compnents/ecommerce/Ecommerce';
const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/examine" element={<Examine />} />
        <Route path="/todo" element ={<Todo/>}/>
        <Route path="/ecommerce" element ={<Ecommerce/>}/>
      </Routes>
  
  )
}

export default App
