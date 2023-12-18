import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// css
import './index.css'; // not sure why but have reason to believe that this is necessary
import "./css/global.css";

// context
import  {AuthProvider}  from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
