
import * as React from 'react';
import List from '../../packages/List';
import './style.scss';


export interface Props {

};

export default function ListPage() {

  return (
    <div id="list-page">
      <h1>List</h1>
      <div>
        <List
          header="我是 header"
          footer="我是 footer"
        >
          <List.Item>list-1</List.Item>
          <List.Item>list-2</List.Item>
          <List.Item>list-3</List.Item>
        </List>

        <List
          header={(<strong>可点击</strong>)}
        >
          <List.Item
            onClick={() => {
              alert(1);
            }}
          >
            alert(1)
          </List.Item>
          <List.Item
            onClick={() => {
              alert(2);
            }}
          >
            alert(2)
          </List.Item>
        </List>
      </div>
    </div>
  );
}
