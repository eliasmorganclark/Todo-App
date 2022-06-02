import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import New from './components/New';
import ViewAll from './components/ViewAll';




const root = ReactDOM.createRoot(
  
  document.getElementById('root'));


root.render(
<>

<Router>
  <Routes>
    <Route path="/v1/todos" element={<App />}>
      <Route path="" element={<ViewAll/>}/>
      <Route path="new" element={<New />} />
    </Route>
  </Routes>
</Router>
</>

  
);


