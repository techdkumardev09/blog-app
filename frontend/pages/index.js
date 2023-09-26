import React, { useEffect, useState } from "react";
import BlogCard from "../components/cards/BlogCard";
import Layout from "../components/layout/Layout";
import { fetchData } from "../service/api";
import NoDataFound from "../components/NoDataFoundCard";
import Meta from "../utils/Meta";
import Loader from "../components/loader/Loader";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component mounts
    const data = fetchData().then((result) => {
      setData(result?.blogs);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Meta
        title="Blog Title"
        description="Description of your blog's home page."
        canonical=""
      />
      <Layout>
        {loading ? (
          <Loader />
        ) : (
          <div className="container mx-auto mt-10">
            <div className="max-w-[1200px] flex justify-between mx-auto items-center mb-4">
              <h2 className="text-2xl font-semibold text-black"> Blogs</h2>
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
                        isEditPage={false}
                        id={item._id}
                      />
                    );
                  })}
                </div>
              </>
            ) : (
              <NoDataFound />
            )}
          </div>
        )}
      </Layout>
    </>
  );
}
