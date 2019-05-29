import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import thunk from 'redux-thunk';

// copy từ advance github
// thêm thunk vào như là tham số
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);



// cài đặt thunk xem hướng dẫn Github: redux thunk
// 1. import  2. thêm applyMiddleware  3. Chèn apply như là tham số
const store = createStore(rootReducer,enhancer);
// buộc phải xóa redux dev tools vì createStore chỉ nhận vào 2 tham số, 
// cách khác để dùng 2 cái là dùng enhacer kết hợp thunk & redux dev tools
// xem advanced 


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
