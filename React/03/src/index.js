import React from 'react';
import ReactDOM from 'react-dom/client';
// import REACT_USE_EFFECT from './useEffect';
import Fetch from './Fetch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <REACT_USE_EFFECT /> */}
    <Fetch />
  </React.StrictMode>
);
