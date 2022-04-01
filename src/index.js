import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';

const Landing = React.lazy(()=>import("./landing.js"));

ReactDOM.render(
  <Router>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </Suspense>
  </Router>,
  document.getElementById('page-wraper')
);