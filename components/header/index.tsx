'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import LogoImage from '@/public/images/logo.svg';
import Link from 'next/link';
import { navData } from '@/utils/constants';
import { LiaTimesSolid } from 'react-icons/lia';
import { RxHamburgerMenu } from 'react-icons/rx';

type Props = {};

const Header = (props: Props) => {
  const [mobileNavState, setMobileNavState] = useState(false);

  return (
    <header className='flex justify-between items-center mt-20'>
      <Link href='/'>
        <Image src={LogoImage} alt='Logo' height={40} width={64} />
      </Link>
      <div className='flex items-center'>
        <div
          onClick={() => setMobileNavState(false)}
          className={`${
            mobileNavState ? 'block md:hidden' : 'hidden'
          } absolute left-0 top-0 w-screen h-screen bg-transparentBlue z-10`}
        ></div>
        <RxHamburgerMenu
          className='md:hidden text-4xl cursor-pointer'
          onClick={() => setMobileNavState(true)}
        />
        <nav
          className={`${
            mobileNavState ? 'flex' : 'hidden'
          } md:flex bg-white w-[256px] md:w-auto md:h-auto h-screen absolute md:static right-0 top-0 flex-col md:flex-row justify-center z-20 max-w-full`}
        >
          {navData.map(({ title, url }) => (
            <Link
              key={title}
              href={url}
              className='ml-10 mb-6 md:mb-0 leading-[26px] hover:text-orange transition-colors text-darkBlue md:text-grey text-lg md:text-base leading-24'
            >
              {title}
            </Link>
          ))}
          <LiaTimesSolid
            className='block md:hidden text-4xl text-darkBlue absolute right-[30px] top-[30px] cursor-pointer'
            onClick={() => setMobileNavState(false)}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
