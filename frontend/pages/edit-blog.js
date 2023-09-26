import React, { useEffect, useState } from 'react';
import BlogCard from '../components/cards/BlogCard';
import Layout from '../components/layout/Layout';
import PostModal from '../components/modal/PostModal';
import Meta from '../utils/Meta';
import { fetchData, deleteBlogById } from '../service/api';
import NoDataFound from '../components/NoDataFoundCard';
import { toast } from 'react-toastify';

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch data when the component mounts
    getData();
  }, []);
  const getData = () => {
    const data = fetchData().then((result) => {
      setData(result?.blogs);
    });
  }

  const delteUserBlog = (blogId) => {
    const data = deleteBlogById(blogId).then((result) => {
      toast.success(result.message);
      getData();
    });
  }
  return (
    <>
      <Meta
        title="Blog Edit Page"
        description="Description of your blog's home page."
        canonical=""
      />
      <Layout>
        <div className="container mx-auto mt-10">
          <div className="max-w-[1200px] flex justify-between mx-auto items-center mb-4">
            <PostModal isNoDataFoundModal={true} editMode={false} postId="" />
          </div>
          {data?.length > 0 ? (
            <>
              <div className="flex flex-wrap justify-between">
                {data?.map((item) => {
                  return (
                    <BlogCard
                      key={item?._id}
                      title={item?.title}
                      author={item?.authorName}
                      date={item?.createdAt}
                      content={item?.description}
                      image={item?.image?.data}
                      isEditPage={true}
                      id={item._id}
                      delteUserBlog={delteUserBlog}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <NoDataFound />
          )}
        </div>
      </Layout>
    </>
  )
}
