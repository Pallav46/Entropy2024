import React from 'react'
import ReactDOM from 'react-dom/client'
import TeamPage from './pages/TeamPage/TeamPage.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import WebAndCreatives from './pages/TeamPage/SubTeams/WebAndCreatives/WebAndCreatives.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/teams",
    element: <TeamPage/>
  },
  {
    path: "/teams/webAndCreatives",
    element: <WebAndCreatives/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
