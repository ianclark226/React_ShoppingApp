import { applyMiddleware, compose } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import reducer from './reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({reducer: reducer}, composeEnhancers(applyMiddleware()));

const persistor = persistStore(store);

export { store, persistor };