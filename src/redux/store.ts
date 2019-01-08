// import { applyMiddleware, compose, createStore } from "redux";
// import createSagaMiddleware from "redux-saga";
import Reducers from "./reducer/Reducers";
import {applyMiddleware, compose, createStore} from "redux";
// import sagas from "./saga/Saga";

// const sagaMiddleware = createSagaMiddleware();
// /**
//  * 插件的安装,第二个参数是使用redux谷歌浏览器插件
//  */
let middleware = applyMiddleware();
// /**
//  * 使用浏览器插件
//  */
 // @ts-ignore
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
 // @ts-ignore
 if(window.__REDUX_DEVTOOLS_EXTENSION__){
     middleware = compose(middleware,composeEnhancers) ;
 }
 const stroe = createStore(Reducers, middleware);
/**
 * 启动saga
 */
// sagaMiddleware.run(sagas);
export default stroe;