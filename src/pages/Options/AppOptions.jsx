import React from 'react';
import { useRoutes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PageHome from './pages/Home/PageHome';

import PageOptions from './pages/Options/PageOptions';
import AutoDeployVersion from './options/AutoDeployVersion';
import LinkedGitIssues from './options/LinkedGitIssues';
import TrackersCodeEditor from './options/TrackersCodeEditor';
import LcBackground from './options/LcBackground';
import LcDeveloperBar from './options/LcDeveloperBar';
import SandboxSelectorBtns from './options/SandboxSelectorBtns';
import LcRichPages from './options/LcRichPages';
import ForcedForceView from './options/ForcedForceView';
import ScrollToDump from './options/ScrollToDump';
import Notify from './components/Notify';
import PageBlog from './pages/Blog/PageBlog';
import PagePost from './pages/Post/PagePost';
import PageChangelog from './pages/Changelog/PageChangelog';

const AppOptions = () => {
  let routes = [
    {
      path: '/',
      element: <PageHome />,
    },
    {
      path: '/options',
      element: <PageOptions />,
    },
    {
      path: '/options/autoDeployVersion',
      element: <AutoDeployVersion />,
    },
    {
      path: '/options/linkedGitIssues',
      element: <LinkedGitIssues />,
    },
    {
      path: '/options/trackersCodeEditor',
      element: <TrackersCodeEditor />,
    },
    {
      path: '/options/lcBackground',
      element: <LcBackground />,
    },
    {
      path: '/options/lcDeveloperBar',
      element: <LcDeveloperBar />,
    },
    {
      path: '/options/sandboxSelectorBtns',
      element: <SandboxSelectorBtns />,
    },
    {
      path: '/options/lcRichPages',
      element: <LcRichPages />,
    },
    {
      path: '/options/forcedForceView',
      element: <ForcedForceView />,
    },
    {
      path: '/options/scrollToDump',
      element: <ScrollToDump />,
    },
    {
      path: '/blog',
      element: <PageBlog />,
    },
    {
      path: '/post/:postId',
      element: <PagePost />,
    },
    {
      path: '/changelog',
      element: <PageChangelog />,
    },
  ];

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(routes);

  return (
    <div id="layout">
      <div className="layout-content">
        <Sidebar />
        <main>{element}</main>
      </div>
      <Notify />
    </div>
  );
};

export default AppOptions;
