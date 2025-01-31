"use client";

import React from 'react';
import VideoPlayer from './VideoPlayer';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const src = searchParams.get('src') || '';
  const title = searchParams.get('title') || '';
  const thumbnail = searchParams.get('thumbnail') || '';

  return (
    <>
      <VideoPlayer 
        src={src} 
        title={title} 
        thumbnail={thumbnail}
      />
    </>
  );
};

export default Page;