import React from 'react';

import { createStore, applyMiddleware } from 'redux'; // 中间件和 store
import { composeWithDevTools } from 'redux-devtools-extension'; // 调试工具
import rootReducer from './reducers'; // reducers


import createSagaMiddleware from 'redux-saga'; // 1：saga 引入createSagaMiddleware
import rootSaga from './sagas'; // 5：自己写的根rootSaga

import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 2：创建saga中间件
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools( // 3：把sagaMiddleware当做一个中间件，引用调试工具`
        applyMiddleware(sagaMiddleware)
    )
)

// 4：启动saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
