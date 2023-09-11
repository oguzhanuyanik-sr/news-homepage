import React from 'react';
import NewPost from '../common/new-post';
import { newPosts } from '@/app/api/response.json';

const News = () => {
  return (
    <section className='bg-darkBlue mt-16 lg:mt-8 p-5 lg:w-[30%]'>
      <h2 className='text-yellow font-bold text-[32px] leading-[32px] lg:text-[40px] lg:leading-[40px] mb-[35px]'>
        New
      </h2>
      {newPosts.map(({ title, desc, url }, index) => (
        <NewPost
          key={index}
          isLast={index === newPosts.length - 1}
          title={title}
          desc={desc}
          url={url}
        />
      ))}
    </section>
  );
};

export default News;
