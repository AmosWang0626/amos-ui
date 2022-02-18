import React from 'react';
import {
  BrowserRouter as Router,
  useRoutes
} from 'react-router-dom';

// components
import ArticleList from './component/article-list';
import Article1 from './component/article01';
import Article2 from './component/article02';
import Article3 from './component/article03';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <ArticleList /> },
    { path: '/article1', element: <Article1 /> },
    { path: '/article2', element: <Article2 /> },
    { path: '/article3', element: <Article3 /> }
  ]);

  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;