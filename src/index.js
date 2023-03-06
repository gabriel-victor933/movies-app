import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppProvider from './context';
import Head from './components/Head';
import Foot from './components/Foot';
import GlobalStyle from './components/GlobalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <GlobalStyle />
      <Head />
      <App />
      <Foot />
    </AppProvider>
  </React.StrictMode>
);

