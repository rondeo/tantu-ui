
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';
import Homepage from './Homepage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
