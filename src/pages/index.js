import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Insta from '../components/insta';
import usePosts from '../hooks/usePosts';
import PostPreview from '../components/postPreview';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my blog!!!</h2>
        {posts.map(post => (
          // <pre key={post.slug}>{JSON.stringify(post, null, 2)}</pre>
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};
