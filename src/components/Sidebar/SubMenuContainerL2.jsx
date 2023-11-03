import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function SubMenuContainerL2({
  isSideMenu,
  text,
  toggleSidebar,
  urlInclude,
  state,
  icon,
  children,
}) {
  const pathname = usePathname();
  return (
    <li className={'submenu-2'}>
      <Link
        href='#'
        className={
          pathname.includes(urlInclude)
            ? 'subdrop active'
            : '' || isSideMenu == state
            ? 'subdrop active'
            : ''
        }
        onClick={toggleSidebar}
      >
        <>
          {text}
          <span className='menu-arrow' />
        </>
      </Link>
      {children}
    </li>
  );
}

export default SubMenuContainerL2;
