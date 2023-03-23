import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import AppOptions from './AppOptions';
import './index.scss';

const container = document.getElementById('app-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <HashRouter>
    <AppOptions />
  </HashRouter>
);
