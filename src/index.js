import React from 'react';
import ReactDOM from 'react-dom';
import App4 from "./App4";
import './index.css'
import reducer,{ initialState } from './reducer';
import { StateProvider } from './StateProvider';

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
    <App4/>
    </StateProvider>,
    document.getElementById('root'));




