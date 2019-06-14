import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'element-theme-default';

import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'

import App from './components/App';
import reducers from './reducers';

i18n.use(locale);

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);