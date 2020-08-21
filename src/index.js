// 自己学习时的版本： 使用 redux(createStore) + react-redux(Provider, connect) 做的counter 示例 https://www.redux.org.cn/docs/basics/ExampleTodoList.html
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
