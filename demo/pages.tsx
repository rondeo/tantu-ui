import Homepage from './Homepage';
import ListPage from './List';
import NotFoundPage from './NotFound';
import ButtonPage from './Button';

const config: Array<{
  name?: string;
  path?: string;
  exact?: boolean;
  component: React.FunctionComponent | React.ComponentClass;
}> = [
  {
    name: 'List',
    path: '/list',
    exact: true,
    component: ListPage
  },
  {
    name: 'Button',
    path: '/button',
    exact: true,
    component: ButtonPage
  },
  {
    name: 'Homepage',
    path: '/',
    exact: true,
    component: Homepage
  },
  {
    name: 'NotFound',
    component: NotFoundPage
  }
];

export default config;
