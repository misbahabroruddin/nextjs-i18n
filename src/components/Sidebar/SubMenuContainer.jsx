import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function SubMenuContainer({
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
    <li className={'submenu'}>
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
        <FeatherIcon icon={icon} />
        <span>{text}</span>
        <span className='menu-arrow' />
      </Link>
      {children}
    </li>
  );
}

export default SubMenuContainer;
