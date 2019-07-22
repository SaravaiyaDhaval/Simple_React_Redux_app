import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    {}, // defaultstate of Redux
    applyMiddleware(thunk)
);

export default store;