import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import NewTask from './components/NewTask';
import DataGet from './components/Data';




const root = ReactDOM.createRoot(
  
  document.getElementById('root'));


root.render(
<>

<Router>
  <Routes>
    <Route path="/v1/todos" element={<App />}>
      <Route path="" element={<DataGet />}/>
      <Route path="new" element={<NewTask />} />
    </Route>
  </Routes>
</Router>
</>

  
);


