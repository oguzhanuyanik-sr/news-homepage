import React from 'react';
import { topPosts } from '@/app/api/response.json';
import PopularPost from '../common/popular-post';

type Props = {};

const Popular = (props: Props) => {
  return (
    <section className='my-16'>
      {topPosts.map((post, index) => (
        <PopularPost key={index} post={post} />
      ))}
    </section>
  );
};

export default Popular;
