import * as React from 'react';
import List from '../../packages/List';
import {withRouter} from 'react-router-dom';
import * as History from 'history';
import pages from '../pages';
import './style.scss';


export default withRouter(Homepage);

export interface Props {
  history: History.History;
};


function Homepage(props: Props) {
  const {history} = props;

  return (
    <div id="homepage">
      <h1>Homepage</h1>
      <List>
        {pages.filter(({name}) => {
          return ['NotFound', 'Homepage'].indexOf(name) === -1;
        }).map((item, index) => {
          const {name, path} = item;
          const key = `${name}`;

          return (
            <List.Item key={key} onClick={() => {
              history.push(path);
            }}>{name}</List.Item>
          );
        })}
      </List>
    </div>
  );
}











