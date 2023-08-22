import Image from 'next/image';
// import Button from "@/components/button/button";
import Header, { Link } from '@/components/structure/header';
import { ReactNode } from 'react';
import Footer from '@/components/structure/footer';

const logo: ReactNode = (
  <Image src="/img/mugshot.jpg" 
    alt="Olli Niinioja profile picture"
    width="192"
    height="192" 
    className="fill rounded-full object-cover object-top w-full h-full" 
  />
);

const links: Array<Link> = [
  { label: 'Home', href: '#top' },
  { label: 'Contact', href: '#contact' }
];
const home = () => {
  return (
    <>
      <Header className="top-0 sticky bg-fuchsia-950" logo={logo} label="olli niinioja" links={links} />
      <main id="top" className="flex flex-col min-h-screen items-center justify-between">
        <div className="container flex flex-col items-center justify-between">
          <p className="py-52">
            <span>welcome to the portfolio page of olli niinioja</span>
            <br />
            <span>work in progress</span>
          </p>
          <p id="contact" className="py-52">
            <span>contact:</span>
            <br />
            <span>github.com/arkki</span>
          </p>
        </div>
      </main>
      <Footer className="w-full z-50 py-3 bg-fuchsia-950" />
    </>
  );
};

export default home;
