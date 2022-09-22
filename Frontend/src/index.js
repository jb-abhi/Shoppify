import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);