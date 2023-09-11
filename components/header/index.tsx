'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '@/public/images/logo.svg';
import { navData } from '@/utils/constants';
import { LiaTimesSolid } from 'react-icons/lia';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  const [mobileNavState, setMobileNavState] = useState(false);

  return (
    <header className='flex justify-between items-center'>
      <Link href='/'>
        <Image src={LogoImage} alt='Logo' height={40} width={64} />
      </Link>
      <div className='flex items-center'>
        <div
          onClick={() => setMobileNavState(false)}
          className={`${
            mobileNavState ? 'block lg:hidden' : 'hidden'
          } fixed left-0 top-0 w-screen h-screen bg-transparentBlue z-10`}
        ></div>
        <RxHamburgerMenu
          className='lg:hidden text-4xl cursor-pointer hover:text-orange transition-all'
          onClick={() => setMobileNavState(true)}
        />
        <nav
          className={`${
            mobileNavState ? 'flex' : 'hidden'
          } lg:flex bg-white w-[256px] lg:w-auto lg:h-auto h-screen fixed lg:static right-0 top-0 flex-col lg:flex-row justify-center z-20 max-w-full`}
        >
          {navData.map(({ title, url }) => (
            <Link
              key={title}
              href={url}
              className='ml-10 mb-6 lg:mb-0 leading-[26px] hover:text-orange transition-colors text-darkBlue lg:text-grey text-lg lg:text-base leading-24'
            >
              {title}
            </Link>
          ))}
          <LiaTimesSolid
            className='block lg:hidden text-4xl text-darkBlue absolute right-[30px] top-[30px] cursor-pointer hover:text-orange transition-all'
            onClick={() => setMobileNavState(false)}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
