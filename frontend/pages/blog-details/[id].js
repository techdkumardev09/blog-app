// pages/blog-details/[slug].js
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import Meta from "../../utils/Meta";

export default function Post({ id }) {

  return (
    <>
      <Meta
        title="Blog Details Page"
        description="Description of your blog's home page."
        canonical=""
      />
      <Layout>
       
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
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Blog Image"
                  className="w-auto h-full object-cover object-center"
                />
              </div>
              <div className="p-6 relative w-full h-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {"Name of title"}
                  </h3>
                  <p className="text-sm text-gray-600 flex gap-2 items-center flex justify-end p-3">
                    <img
                      className="w-10 h-10 rounded-full"
                      alt="Blog author"
                      src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg"
                    />
                    <span className="border-r flex items-center border-[#d1d1d1] pr-2 h-8">
                      {"max of kargo"}
                    </span>
                    <img
                      className="w-10 h-10 rounded-full"
                      alt="Blog date"
                      src="https://cdn-icons-png.flaticon.com/512/1869/1869397.png"
                    />
                    {/* {new Date(data.createdAt).toLocaleDateString(
                      "en-US",
                      dateFormat
                    )} */}
                  </p>
                </div>
                <p className="mt-4 text-gray-700">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
              </div>
            </div>
          </div>
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
