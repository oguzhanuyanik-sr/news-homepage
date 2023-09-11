import Image from 'next/image';
import React from 'react';
import { featured } from '@/app/api/response.json';
import Link from 'next/link';
import Button from '../common/button';

const { title, desc, img, url } = featured;

type Props = {};

const Featured = (props: Props) => {
  return (
    <section className='mt-8 lg:w-[65%] lg:mr-[5%] md:flex md:flex-col md:justify-evenly'>
      <Link href={url} className='w-full'>
        <Image
          className='lg:hidden w-full'
          src={img.mobile}
          alt='test'
          height={768}
          width={768}
          sizes='100%'
        />
        <Image
          className='hidden lg:block w-full'
          src={img.desktop}
          alt='test'
          height={768}
          width={768}
          sizes='100%'
        />
      </Link>
      <div className='lg:flex lg:justify-between'>
        <h1 className='mt-6 font-extrabold text-[40px] leading-[40px] lg:text-[56px] lg:leading-[56px] w-[80%] lg:min-w-[35%]'>
          <Link href={url}>{title}</Link>
        </h1>
        <div className='lg:max-w-[40%]'>
          <p className='mb-5 mt-4 text-[15px] leading-[26px] text-grey'>
            {desc}
          </p>
          <Button title='read more' styles='orange' url={url} />
        </div>
      </div>
    </section>
  );
};

export default Featured;
