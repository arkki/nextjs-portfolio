'use client';

import { ReactNode, FunctionComponent, useRef, MutableRefObject, useState } from 'react';

export type Link = {
  label: string;
  href: string;
};

interface HeaderProps {
  className?: string;
  logo?: ReactNode;
  label?: string;
  links?: Array<Link>;
}

const Header: FunctionComponent<HeaderProps> = ({ className, logo, label, links }) => {
  // const menuOpenRef: MutableRefObject<HTMLButtonElement> = useRef(undefined);
  // const menuCloseRef: MutableRefObject<HTMLButtonElement> = useRef(undefined);

  const [displayMenu, setDisplayMenu] = useState(false);

  const handleOpenMenu = () => {
    setDisplayMenu(true);
  };

  const handleCloseMenu = () => {
    setDisplayMenu(false);
  };

  return (
    <header className={className}>
      <nav className="w-full z-50 py-3 sm:py-5">
        <div className="w-full flex items-center justify-between">

          {/* logo */}
          <div className="left-0 absolute">
            <a href="/" className="absolute rounded-full h-48 w-48">
              {logo}
            </a>
          </div>

          {/* label */}
          {label && (
            <div className="flex-1">
              <h1>{label}</h1>
            </div>
          )}

          {/* navigation */}
          <div className="right-0 absolute">
            <div className="hidden lg:block">
              <ul className="flex items-center px-3">
                {links?.length &&
                  links.map(({ label, href }: Link, index) => (
                    <li key={`${index}-${label}`} className="group pl-6">
                      <a className="text-blue-500 hover:text-blue-800" href={href}>
                        {label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={handleOpenMenu}
                className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
              >
                {/* <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg> */}
                <span>menu</span>
              </button>
            </div>
            {displayMenu && (
              <div className="fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 transition-opacity lg:hidden opacity-100 pointer-events-auto">
                <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
                  {/* React ref mobileMenu close */}
                  {/* @click="mobileMenu = false" */}
                  <button
                    onClick={handleCloseMenu}
                    className="absolute top-0 right-0 mt-4 mr-4 text-teal-200 border-teal-400 hover:text-white hover:border-white"
                  >
                    {/* TODO: Convert to CSS cross */}
                    {/* <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>    <path d='M35.6 34.4L28 26.8l7.6-7.6c.2-.2.2-.5 0-.7l-.5-.5c-.2-.2-.5-.2-.7 0l-7.6 7.6-7.5-7.6c-.2-.2-.5-.2-.7 0l-.6.6c-.2.2-.2.5 0 .7l7.6 7.6-7.6 7.5c-.2.2-.2.5 0 .7l.5.5c.2.2.5.2.7 0l7.6-7.6 7.6 7.6c.2.2.5.2.7 0l.5-.5c.2-.2.2-.5 0-.7z' /></svg> */}
                    <span>close</span>
                  </button>
                  <ul className="mt-8 flex flex-col">
                    {links?.length &&
                      links.map(({ label, href }: Link, index) => (
                        <li key={`${index}-${label}`} className="py-2">
                          <a onClick={handleCloseMenu} href={href} className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                            {label}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
