// pages/blog-details/[slug].js
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import Meta from "../../utils/Meta";
import { fetchBlogDataDetails } from "../../service/api";
import { useState, useEffect } from "react";
import { dateFormat } from "../../utils/constants";
import Loader from "../../components/loader/Loader";

export default function Post({ id }) {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(
    "https://enviragallery.com/wp-content/uploads/2016/05/Set-Default-Featured-Image.jpg"
  );

  useEffect(() => {
    // Fetch data when the component mounts
    setLoading(true);
    const data = fetchBlogDataDetails(id).then((result) => {
      setData(result?.blog);
      const base64ImageData = Buffer.from(result?.blog?.image?.data).toString(
        "base64"
      );
      const dataUrl = `data:image/jpeg;base64,${base64ImageData}`;
      setImageUrl(dataUrl);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Meta
        title="Blog Details Page"
        description="Description of your blog's home page."
        canonical=""
      />
      <Layout>
        {loading ? (
          <Loader />
        ) : (
          <div className="max-w-[1200px] w-full mx-auto mt-10 mb-10">
            <div className="max-w-[1200px] flex mx-auto items-center mb-10 gap-2">
              <Link href="/" className="">
                <img
                  className="w-6 cursor-pointer"
                  alt="Back Image"
                  src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
                />
              </Link>
              <h2 className="text-2xl font-semibold text-black">
                {" "}
                Blog Detail
              </h2>
            </div>
            <div className="w-full bg-[#faebd7] rounded-xl overflow-hidden">
              <div className="overflow-hidden w-full h-[300px] flex justify-center bg-black">
                <img
                  src={imageUrl}
                  alt="Blog Image"
                  className="w-auto h-full object-cover object-center"
                />
              </div>
              <div className="p-6 relative w-full h-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex gap-2 items-center flex justify-end p-3">
                    <img
                      className="w-10 h-10 rounded-full"
                      alt="Blog author"
                      src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg"
                    />
                    <span className="border-r flex items-center border-[#d1d1d1] pr-2 h-8">
                      {data.authorName}
                    </span>
                    <img
                      className="w-10 h-10 rounded-full"
                      alt="Blog date"
                      src="https://cdn-icons-png.flaticon.com/512/1869/1869397.png"
                    />
                    {new Date(data.createdAt).toLocaleDateString(
                      "en-US",
                      dateFormat
                    )}
                  </p>
                </div>
                <p className="mt-4 text-gray-700">{data.description}</p>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params; // Access the slug from context.params

  return {
    props: {
      id,
    },
  };
}
