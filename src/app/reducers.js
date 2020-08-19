/*
* reducers
*
* Action 处理
现在我们已经确定了 state 对象的结构，就可以开始开发 reducer。reducer就是一个纯函数，接收旧的 state 和 action，返回新的 state。
    e.g.     (previousState, action) => newState


最后，时刻谨记永远不要在克隆 state 前修改它。
* */

import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from "./actions";

const initialState = {
    visibilityFilter : VisibilityFilters.SHOW_ALL,
    todos: [],
};


//第一版 reducer  https://www.redux.org.cn/docs/basics/Reducers.html
// function todoApp(state = initialState, action) {
//     switch (action.type){
//         case SET_VISIBILITY_FILTER:
//             return Object.assign({}, state, {
//                visibilityFilter: action.filter
//             });
//
//         case ADD_TODO:
//             return Object.assign({}, state, {
//                 todos: [
//                     ...state.todos,
//                     {
//                         text: action.text,
//                         completed:false
//                     }
//                 ]
//             });
//
//         case TOGGLE_TODO:
//             return Object.assign({}, state, {
//                 todos: state.todos.map( (todo, index) => {
//                     if (index === action.index){
//                         return Object.assign({}, todo, {
//                             completed: !todo.completed
//                         });
//                     }
//                     return todo;
//                 })
//             });
//
//         default:
//             return state;
//     }
// }

//第二版 reducer
// function todos(state = [], action) {
//     switch (action.type) {
//         case ADD_TODO:
//             return [
//                 ...state,
//                 {
//                     text: action.text,
//                     completed: false
//                 }
//             ];
//
//         case TOGGLE_TODO:
//             return state.map((todo, index) => {
//                 if(index === action.index){
//                     return Object.assign({}, todo, {
//                         completed: !todo.completed
//                     })
//                 }
//                 return todo;
//             });
//
//         default:
//             return state;
//     }
// }
//
// function todoApp(state = initialState, action) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return Object.assign({}, state, {
//                 visibilityFilter: action.filter
//             });
//
//         case ADD_TODO:
//             return Object.assign({}, state, {
//                 todos: todos(state.todos, action)
//             });
//
//         case TOGGLE_TODO:
//             return Object.assign({}, state, {
//                 todos: todos(state.todos, action)
//             });
//
//         default:
//             return state;
//     }
// }


//最终版
import { combineReducers } from 'redux'
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            });
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp