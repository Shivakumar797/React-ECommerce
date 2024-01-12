import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContectProvider from './Context/shopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContectProvider>
        <App />
  </ShopContectProvider>
);


reportWebVitals();
