import React from 'react';

export default function SideBarMenuContainer({ title, children }) {
  return (
    <ul>
      <li className='submenu-open'>
        <h6 className='submenu-hdr fw-bold'>{title}</h6>
      </li>
      <ul>{children}</ul>
    </ul>
  );
}
