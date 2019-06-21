import * as React from 'react';
import classNames from 'classnames';
import prefixClass from '../util/prefix-class';
import Item from './Item';

import './style.scss'

export interface Props {
  header?: React.ReactChild;
  footer?: React.ReactChild;
  children: React.ReactChild | React.ReactFragment;
  className?: string;
};


export default function List(props: Props) {
  const {header, footer, children, className, ...rest} = props;
  const cls = classNames(className, prefixClass('list'));

  return (
    <div {...rest} className={cls}>
      {header ? (
        <div className='header'>{header}</div>
      ) : null}
      <div className="body">{children}</div>
      {footer ? (
        <div className='footer'>{footer}</div>
      ) : null}
    </div>
  );
}

List.Item = Item;
