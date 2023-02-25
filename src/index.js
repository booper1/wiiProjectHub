import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/ShinGo/ShinGoBold.otf';
import './fonts/ShinGo/ShinGoDeBold.otf';
import './fonts/ShinGo/ShinGoExLight.otf';
import './fonts/ShinGo/ShinGoHeavy.otf';
import './fonts/ShinGo/ShinGoLight.otf';
import './fonts/ShinGo/ShinGoMedium.otf';
import './fonts/ShinGo/ShinGoRegular.otf';

import './fonts/RodinBokutoh/RodinBokutohB.otf';
import './fonts/RodinBokutoh/RodinBokutohDB.otf';
import './fonts/RodinBokutoh/RodinBokutohEB.otf';
import './fonts/RodinBokutoh/RodinBokutohL.otf';
import './fonts/RodinBokutoh/RodinBokutohL.otf';
import './fonts/RodinBokutoh/RodinBokutohUB.otf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
