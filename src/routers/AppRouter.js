import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';
import PreFooter from '../components/PreFooter';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/food/:slug" component={DashboardPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
      <PreFooter />
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
