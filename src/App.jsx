import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from './compnents/Counter'
import Home from './compnents/Home';

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
  
  )
}

export default App
