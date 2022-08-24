import React, { Fragment } from 'react';
import '../assets/styles/breadcrumb.scss';

function Breadcrumb({ items = ['cocinas', 'neveras', 'nevera'] }) {
  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb">
        {items.map((item, idx) => {
          // if is last in array then dont show ">"
          if (idx === items.length - 1) {
            return (
              <span className="item last-item" key={`breadcrumb-item-${idx}`}>
                {item}
              </span>
            );
          }

          return (
            <Fragment>
              <span
                className="item"
                key={`breadcrumb-item-${idx}`}
              >{`${item}`}</span>
              <span>&gt;</span>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Breadcrumb;
