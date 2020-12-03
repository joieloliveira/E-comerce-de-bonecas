import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import configStore from './store/storeConfig';
import { Provider } from 'react-redux';

const store = configStore()

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );