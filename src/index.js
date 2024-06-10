import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainComponent from './components/ReuseableButton/MainComponent';
import ArrayMethods from './components/ArrayMethods/ArrayMethods'
import FilterMethod from './components/ArrayMethods/FilterMethod';
import FlatMethod from './components/ArrayMethods/FlatMethod';
import PaginateTable from './components/PaginateTable/PaginateTable'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();
