import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'; //action 和store的中间件
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//react-devtools-extensions

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
