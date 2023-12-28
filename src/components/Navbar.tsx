import { NavLinks } from "@/constants";
import Image from "next/image";
import React from "react";
import BookRideButton from "./BookRideButton";

const Navbar = () => {
  return (
    <nav className="flex px-[2.5rem]  max-lg:justify-between max-lg:px-[2rem] max-xsm:px-[1rem] ">
      <div>
        <Image
          src={"/logo.png"}
          alt={"logo"}
          width={125}
          height={125}
          className=" h-22 max-xsm:w-[100px]  max-xsm:h-[100px]"
        />
      </div>
      <ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
        {NavLinks.map((item) => (
          <li key={item.label} className="nav-links">
            {" "}
            <a href={item.href} className=" leading-normal text-lg ">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <BookRideButton />
      </div>
    </nav>
  );
};

export default Navbar;
