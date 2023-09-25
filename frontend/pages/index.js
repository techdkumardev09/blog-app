import React from 'react';
import Layout from '../components/layout/Layout'
import Meta from '../utils/Meta';
import BlogCard from '../components/cards/BlogCard';

export default function Home() {
  return (
    <>
      <Meta
        title="Blog Title"
        description="Description of your blog's home page."
        canonical=""
      />
      <Layout>
        <BlogCard
          key={"1"}
          title={"Blog Title"}
          author={"max-wander"}
          date={"778455874.255488"}
          content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
          image={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"}
          isEditPage={false}
          id={78}
        />
      </Layout>
    </>


  )
}
