import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/inter';
import App from './App.tsx'
import './index.scss'
import {
  Routes,
  Route,
  BrowserRouter,
  Outlet
} from "react-router-dom";
import Layout from './Components/Layout.tsx';
import UserHeader from './Components/UserHeader.tsx';
import Footer from './Components/Footer.tsx';
import Sidebar from './Components/Sidebar.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter >
      <Layout header={<UserHeader title="Podcaster" />}
        footer={<Footer />}
        sidebar={<Sidebar />}
        outlet={<Routes>
          <Route path="/" element={<App />} />
        </Routes>} />

    </BrowserRouter>
  </React.StrictMode>,
)
