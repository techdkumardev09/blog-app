import Link from "next/link";
import { useRouter } from "next/router";

// Header components
export default function Header() {
  const router = useRouter();

  return (
    <div className="bg-[#100501] p-3 h-20 text-xl uppercase relative">
      <h1 className="max-w-[1200px] mx-auto w-full  cursor-pointer absolute left-5 top-6">
        <Link href="/">Post BLog</Link>
      </h1>
      <button onClick={() => {router.push("/edit-blog");}}
        className=" top-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 absolute right-0"
        type="button"
      >
        Edit your blog
      </button>
    </div>
  );
}