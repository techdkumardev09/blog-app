// components/BlogCard.js

import Link from "next/link";
import React, { useState } from "react";
import { dateFormat } from "./../../utils/constants";
import ConfirmationModal from "../modal/ConfirmationModal";
import PostModal from "../modal/PostModal";

const BlogCard = ({
  title,
  author,
  date,
  content,
  isEditPage,
  image,
  id,
  delteUserBlog,
}) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const base64ImageData = Buffer.from(image).toString("base64");
  const dataUrl = `data:image/jpeg;base64,${base64ImageData}`;

  return (
    <div className="flex h-[260px] md:w-[49%] h-[300px] sm:w-full bg-white relative shadow-lg rounded-lg my-5 overflow-hidden">
      <div className="overflow-hidden w-[30%] bg-gray-200 py-5  cursor-pointer">
        <Link href={`/blog-details/${id}`}>
          <img
            src={dataUrl}
            alt="Blog Image"
            className="w-full h-48 object-cover object-center"
          />
        </Link>
      </div>
      <div className="overflow-hidden w-[70%]">
        <div className="p-6 relative w-full h-full min-h-[100px]">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p
            className={`mt-4 text-gray-700 overflow-hidden ${
              isReadMore ? "max-h-[70px]" : "max-h-[50px]"
            }`}
          >
            {content}
          </p>
          {content && content.length > 120 && (
            <span
              className="text-yellow-500 ml-1 cursor-pointer"
              onClick={toggleReadMore}
            >
              {isReadMore ? "Read Less" : "Read More"}
            </span>
          )}
          {isEditPage && (
            <div className="my-5 flex gap- justify-end">
              <PostModal isEditPage={true} isNoDataFoundModal={false} postId={id} editMode={true}/>
              <ConfirmationModal id={id} delteUserBlog={delteUserBlog} />
            </div>
          )}
        </div>
      </div>
      <p className="text-sm text-gray-600 flex gap-2 items-center absolute right-0 bottom-0 w-full bg-[#faebd7] flex justify-center p-3">
        <img
          alt="Blog author"
          className="w-10 h-10 rounded-full"
          src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg"
        ></img>
        <span className="border-r flex items-center border-[#d1d1d1] pr-2 h-8">
          By {author}
        </span>{" "}
        <img
          alt="date"
          className="w-10 h-10 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/1869/1869397.png"
        ></img>{" "}
        {new Date(date).toLocaleDateString("en-US", dateFormat)}
      </p>
    </div>
  );
};

export default BlogCard;
