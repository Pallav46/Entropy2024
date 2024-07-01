import React from 'react'
import ReactDOM from 'react-dom/client'
import TeamPage from './pages/TeamPage/TeamPage.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import WebAndCreatives from './pages/TeamPage/SubTeams/WebAndCreatives/WebAndCreatives.jsx'
import EventManagement from './pages/TeamPage/SubTeams/EventManagement/EventManagement.jsx'
import DesignTeam from './pages/TeamPage/SubTeams/DesignTeam/DesignTeam.jsx'
import Sponsorship from './pages/TeamPage/SubTeams/Sponsorship/Sponsorship.jsx'
import FacultyCoordinators from './pages/TeamPage/SubTeams/FacultyCoordinators/FacultyCoordinators.jsx'
import PastEvents from './pages/PastEvents/PastEvent.jsx'
import Events from './pages/Events/Events.jsx'
import Team from './pages/Team/Team.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/teams",
    // element: <TeamPage/>
    element: <Team/>
  },
  {
    path: "/teams/webAndCreatives",
    element: <WebAndCreatives/>
  },
  {
    path: "/teams/eventManagement",
    element: <EventManagement/>
  },
  {
    path: "/teams/design",
    element: <DesignTeam/>
  },
  {
    path: "/teams/sponsorship",
    element: <Sponsorship/>
  },
  {
    path: "/teams/faculty",
    element: <FacultyCoordinators/>
  },
  {
    path: "/past-events",
    element: <PastEvents/>
  },
  {
    path: "/events",
    element: <Events/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
