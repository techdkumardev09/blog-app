import Link from "next/link";

// Header components
export default function Header() {
  return (
    <div className="bg-[#100501] p-3  text-xl uppercase">
      <h1 className="max-w-[1200px] mx-auto w-full  cursor-pointer">
        <Link href="/">Post BLog</Link>
      </h1>
    </div>
  );
}