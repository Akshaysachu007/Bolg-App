import React from 'react';import{createRoot}from'react-dom/client';import{BrowserRouter}from'react-router-dom';import{Provider}from'react-redux';
import{store}from'./store';import{UIProvider}from'./context/UIContext';import App from './App';import './index.css';
createRoot(document.getElementById('root')).render(<React.StrictMode><Provider store={store}><UIProvider><BrowserRouter><App/></BrowserRouter></UIProvider></Provider></React.StrictMode>);
