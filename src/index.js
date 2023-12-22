import React from 'react'
import { Provider } from 'react-redux'
import {rootReducer} from './redux/CombineReducers'
import App from './App'
import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { createRoot } from 'react-dom/client';

const store = configureStore({reducer:rootReducer}, (compose(applyMiddleware(thunk))))
const root= createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
 
)