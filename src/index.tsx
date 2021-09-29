import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import {store} from "./App/store";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);

reportWebVitals();
