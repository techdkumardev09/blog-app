import React from "react";
import PostForm from '../PostForm';

export default function PostModal({ isNoDataFoundModal, isEditPage, editMode, postId }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="flex items-center w-full justify-end">
        {isNoDataFoundModal && <h2 className="text-2xl font-semibold text-black flex-1"> Blogs</h2>}
        {isEditPage ? <span onClick={() => setShowModal(true)} className="flex gap-2 text-gray-700 items-center pr-2 mr-2 border-r border-[#d1d1d1] cursor-pointer">
          <img
            className="w-8 h-8"
            alt="edit"
            src="https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_58-512.png"
          />
          Edit
        </span> : <div className="position-absolute right-0">
          <button
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add new post
          </button></div>}
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative md:w-[500px] my-6 mx-auto md:max-w-[500px] w-full max-w-[85%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl text-black font-semibold">
                    Add Post
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <PostForm setShowModal={setShowModal} editMode={editMode} postId={postId}/>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}