import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-indigo-600">
      <div className="px-10 py-5">
        <Link href={"/"}>
          <Image
            src="/Logo.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
