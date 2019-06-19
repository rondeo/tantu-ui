import * as React from 'react';
import List from '../../packages/List';
import './style.scss';

export default function Homepage() {

  return (
    <div id="homepage">
      <h1>Homepage</h1>
      <List>
        <List.Item onClick={() => {
          console.log('fff');
        }}>List</List.Item>
        <List.Item>List</List.Item>
        <List.Item>List</List.Item>
      </List>
    </div>
  );
}
