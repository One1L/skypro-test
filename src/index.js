import React from 'react';
import { combineReducers } from 'redux';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { configureStore } from '@reduxjs/toolkit';
import { Provider as StoreProvider } from 'react-redux';
import App from './App';
import cartReducer from './slices/cart';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({reducer: combineReducers({cart: cartReducer})});
root.render(
  <StoreProvider store={store}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </StoreProvider>
);
