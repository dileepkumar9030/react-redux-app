import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk'
import {applyMiddleware, compose, combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'


const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

const allstoreEnhancers= compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
    allReducers, 
    {
        products: [{name: 'iPhone'}], 
        user: 'Michael'
    },
    allstoreEnhancers
);
console.log(store.getState());


//store.dispatch(updateUserAction); 


ReactDOM.render(<Provider store={store}><App aRandomProps="whatever" /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
