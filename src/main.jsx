import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Button from './components/Button/Button.jsx';

const WebAndCreatives = lazy(() => import('./pages/TeamPage/SubTeams/WebAndCreatives/WebAndCreatives.jsx'));
const EventManagement = lazy(() => import('./pages/TeamPage/SubTeams/EventManagement/EventManagement.jsx'));
const DesignTeam = lazy(() => import('./pages/TeamPage/SubTeams/DesignTeam/DesignTeam.jsx'));
const Sponsorship = lazy(() => import('./pages/TeamPage/SubTeams/Sponsorship/Sponsorship.jsx'));
const FacultyCoordinators = lazy(() => import('./pages/TeamPage/SubTeams/FacultyCoordinators/FacultyCoordinators.jsx'));
const Events = lazy(() => import('./pages/Events/Events.jsx'));
const Team = lazy(() => import('./pages/Team/Team.jsx'));
const Sponsors = lazy(() => import('./pages/Sponsors/Sponsors.jsx'));
const EventsDay1 = lazy(() => import('./pages/Events/Day 1/EventsDay1.jsx'));
const EventsDay2 = lazy(() => import('./pages/Events/Day 2/EventsDay2.jsx'));
const Gallery = lazy(() => import('./pages/PastEvents/gallery.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/teams',
    element: <Suspense fallback={<div>Loading...</div>}><Team /></Suspense>,
  },
  {
    path: '/teams/webAndCreatives',
    element: <Suspense fallback={<div>Loading...</div>}><WebAndCreatives /></Suspense>,
  },
  {
    path: '/teams/eventManagement',
    element: <Suspense fallback={<div>Loading...</div>}><EventManagement /></Suspense>,
  },
  {
    path: '/teams/design',
    element: <Suspense fallback={<div>Loading...</div>}><DesignTeam /></Suspense>,
  },
  {
    path: '/teams/sponsorship',
    element: <Suspense fallback={<div>Loading...</div>}><Sponsorship /></Suspense>,
  },
  {
    path: '/teams/faculty',
    element: <Suspense fallback={<div>Loading...</div>}><FacultyCoordinators /></Suspense>,
  },
  {
    path: '/gallery',
    element: <Suspense fallback={<div>Loading...</div>}><Gallery /></Suspense>,
  },
  {
    path: '/events',
    element: <Suspense fallback={<div>Loading...</div>}><Events /></Suspense>,
  },
  {
    path: '/sponsors',
    element: <Suspense fallback={<div>Loading...</div>}><Sponsors /></Suspense>,
  },
  {
    path: '/events/day1',
    element: <Suspense fallback={<div>Loading...</div>}><EventsDay1 /></Suspense>,
  },
  {
    path: '/events/day2',
    element: <Suspense fallback={<div>Loading...</div>}><EventsDay2 /></Suspense>,
  },
  {
    path: '/btn',
    element: <Button/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
