// components/NoDataFound

import PostModal from "./modal/PostModal";

export default function NoDataFound() {
    return (
        <div className=" h-[70vh] w-full flex justify-center items-center">
            <div className="w-1/4 h-[350px] bg-[#fff] rounded-md flex justify-center items-center flex-col">
                <img className="w-48" src="https://assets-v2.lottiefiles.com/a/8f195bf4-1179-11ee-88da-277f023b0f0c/z4c7jIndmE.gif" />
                <p className="text-gray-700 text-lg">
                    No data found
                </p>
                <span className="text-gray-400 cursor-pointer text-md my-3">
                    Please click here to add new
                </span>
                <div className="w-[55%] mx-auto">
                <PostModal isNoDataFoundModal={false}/></div>
            </div>

        </div>
    );
}