import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import counterReducer from './reducers/counter.reducer';
import userReducer from './reducers/user.reducer';
import {thunk} from 'redux-thunk';

const reducers = combineReducers({
    counter: counterReducer,
    user: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

 