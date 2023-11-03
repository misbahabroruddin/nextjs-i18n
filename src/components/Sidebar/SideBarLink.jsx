import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SideBarLink({ text, href, urlInclude, icon }) {
  const pathname = usePathname();
  return (
    <li className={pathname.includes(urlInclude) ? 'active' : ''}>
      <Link href={href}>
        {icon ? (
          <>
            <FeatherIcon icon={icon} />
            <span>{text}</span>
          </>
        ) : (
          `${text}`
        )}
      </Link>
    </li>
  );
}

export default SideBarLink;
