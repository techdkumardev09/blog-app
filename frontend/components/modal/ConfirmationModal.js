import React, { useState } from "react";

export default function ConfirmationModal({ id, delteUserBlog }) {
  const [showModal, setShowModal] = React.useState(false);
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const deleteBlog = () => {
    setConfirmBtnDisable(true);
    delteUserBlog(id);
    setTimeout(() => {
      setShowModal(false);
      setConfirmBtnDisable(false);
    }, 1000);
  };

  return (
    <>
      <span onClick={() => setShowModal(true)} className="flex gap-2 text-gray-700 items-center  cursor-pointer">
        <img
          className="w-8 h-8"
          alt="delete"
          src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/127-512.png"
        />
        Delete
      </span>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-black font-semibold">
                    Delete Blog
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
                  <img className="w-24 mx-auto" src="https://cdn-icons-png.flaticon.com/512/5045/5045805.png" />
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Are you sure want to delete this blog.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-gray-700 bg-[#d1d1d1] mr-3 font-bold uppercase px-6 py-3 rounded-sm text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={deleteBlog}
                    disabled={confirmBtnDisable}
                  >
                    Save Changes
                  </button>
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
