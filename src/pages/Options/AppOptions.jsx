import React from 'react';
import { useRoutes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNavBar from './components/TopNavBar';
import PageHome from './pages/Home/PageHome';
import PageOptions from './pages/Options/PageOptions';

const AppOptions = () => {
  let routes = [
    {
      path: '/',
      element: <PageHome />,
      // children: [
      // { index: true, element: <PageHome /> },
      // {
      //   path: "/courses",
      //   element: <Courses />,
      //   children: [
      //     { index: true, element: <CoursesIndex /> },
      //     { path: "/courses/:id", element: <Course /> },
      //   ],
      // },
      // { path: "*", element: <NoMatch /> },
      // ],
    },
    {
      path: '/options',
      element: <PageOptions />,
    },
  ];

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(routes);

  return (
    <div id="layout">
      <TopNavBar />
      <div className="layout-content">
        <Sidebar />
        <main>{element}</main>
      </div>
    </div>
  );
};

export default AppOptions;
