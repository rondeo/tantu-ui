
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pages from './pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {pages.map((item) => {
          const {name, component, ...route} = item;
          const key = `${name}`;
          const Page = component;

          return (<Route key={key} component={Page} {...route} />);
        })}
      </Switch>
    </BrowserRouter>
  );
}
