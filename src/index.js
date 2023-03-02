import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"
import reportWebVitals from './reportWebVitals';
import { PallyIndex } from './component/pally_index/pally_index';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Pally_Home } from './component/pally_Home/pally_home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PallyIndex/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
