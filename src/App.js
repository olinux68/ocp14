import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CreateEmployee from './components/CreateEmployee/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import NotFound from './components/NotFound';
import './App.css';

const routeConfig = [
  { path: '/create-employee', element: <CreateEmployee /> },
  { path: '/employee-list', element: <EmployeeList /> },
  { path: '/', element: <CreateEmployee />, exact: true },
  { path: '*', element: <NotFound /> }
];

const App = () => (
  <Router>
    <Header />
    <Routes>
      {routeConfig.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  </Router>
);

export default App;