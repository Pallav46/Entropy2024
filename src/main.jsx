import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import WebAndCreatives from './pages/TeamPage/SubTeams/WebAndCreatives/WebAndCreatives.jsx';
import EventManagement from './pages/TeamPage/SubTeams/EventManagement/EventManagement.jsx';
import DesignTeam from './pages/TeamPage/SubTeams/DesignTeam/DesignTeam.jsx';
import Sponsorship from './pages/TeamPage/SubTeams/Sponsorship/Sponsorship.jsx';
import FacultyCoordinators from './pages/TeamPage/SubTeams/FacultyCoordinators/FacultyCoordinators.jsx';
import Events from './pages/Events/Events.jsx';
import Team from './pages/Team/Team.jsx';
import Sponsors from './pages/Sponsors/Sponsors.jsx';
import EventsDay1 from './pages/Events/Day 1/EventsDay1.jsx';
import EventsDay2 from './pages/Events/Day 2/EventsDay2.jsx';
import Gallery from './pages/PastEvents/gallery.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/teams',
    element: <Team />,
  },
  {
    path: '/teams/webAndCreatives',
    element: <WebAndCreatives />,
  },
  {
    path: '/teams/eventManagement',
    element: <EventManagement />,
  },
  {
    path: '/teams/design',
    element: <DesignTeam />,
  },
  {
    path: '/teams/sponsorship',
    element: <Sponsorship />,
  },
  {
    path: '/teams/faculty',
    element: <FacultyCoordinators />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/events',
    element: <Events />,
  },
  {
    path: '/sponsors',
    element: <Sponsors />,
  },
  {
    path: '/events/day1',
    element: <EventsDay1 />,
  },
  {
    path: '/events/day2',
    element: <EventsDay2 />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
