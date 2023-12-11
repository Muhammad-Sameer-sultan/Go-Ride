import { NavLinks } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex">
      <div>
        <Image
          src={"/logo1.png"}
          alt={"logo"}
          width={125}
          height={125}
          className="max-xsm:w-[100px] max-xsm:h-[100px]"
        />
        <ul>
        {
          NavLinks.map(item=> <li key={item.label}> <a href={item.href}>{item.label}</a></li>)
        }
        </ul>
        <div>
          <button>Book a ride</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
