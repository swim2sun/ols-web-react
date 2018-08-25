import React from 'react';
import ReactDOM from 'react-dom';
import './assests/css/index.css';
import Router from './router/index';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
