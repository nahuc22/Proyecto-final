import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store/index'
import { AuthProvider } from "react-auth-kit";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthProvider 
      authName={"_auth"} 
      authType={"cookie"} 
      cookieDomain={window.location.hostname} 
      cookieSecure={false}>  
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
</AuthProvider>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
