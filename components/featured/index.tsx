import Image from 'next/image';
import React from 'react';
import { featured } from '@/app/api/response.json';
import Link from 'next/link';
import Button from '../common/button';

const { title, desc, img, url } = featured;

type Props = {};

const Featured = (props: Props) => {
  return (
    <section className='mt-8'>
      <Image
        src={img.mobile}
        alt='test'
        height={768}
        width={768}
        sizes='100%'
      />
      <h1 className='mt-6 font-extrabold text-[40px] leading-[40px] md:text-[56px] md:leading-[56px] w-[80%]'>
        <Link href={url}>{title}</Link>
      </h1>
      <p className='mb-5 mt-4 text-[15px] leading-[26px] text-grey'>{desc}</p>
      <Button title='read more' styles='orange' url='/' />
    </section>
  );
};

export default Featured;
