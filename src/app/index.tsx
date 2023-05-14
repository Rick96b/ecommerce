import React from 'react';
import './index.css';

import './styles/styles.scss'

import { withProviders } from './providers';
import { Routing } from 'pages';

function App() {
  return (
    <Routing />
  );
}

export default withProviders(App);
