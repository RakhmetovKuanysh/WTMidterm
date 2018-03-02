import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Products from './Products';
import registerServiceWorker from './registerServiceWorker';

// to change to second project use App component instead of Products
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
