import React from 'react';

export const TrackerItem = ({ index, item, rowClass }) => (
  // 
  <tr  className={rowClass} >
    <th>{index + 1}</th>
    <td>{item.sym}</td>
    <td>{`$${item.price.USD}`}</td>
    <td>{`$${item.price.EUR}`}</td>
  </tr>
);



