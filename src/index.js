import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderDom = state => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 updatePostText={store.updatePostText.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 updateMessageText={store.updateMessageText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderDom(store.getState())
store.subscribe(renderDom)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
