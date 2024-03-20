import "./style/index.scss"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { DefaultTemplate } from "./template/defaultTemplate/index.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DefaultTemplate>
    <App />
    </DefaultTemplate>
  </React.StrictMode>,
)
