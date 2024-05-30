import { ArrowUp, Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-neutral-900 text-white px-5 md:px-8 lg:px-20 ">
      <div className="footer-inner">
        <div className="content flex items-center justify-between py-3">
          <div className="text-sm">
            <Link
              href="https://github.com/Adama-dev15"
              className=" flex items-center justify-center gap-2"
            >
              <div className="h-8 w-8 rounded-full border border-neutral-600 hover:bg-neutral-600 text-neutral-600 hover:text-white hover:shadow-md hover:shadow-neutral-600 duration-200 flex items-center justify-center">
                <Github size={18} />
              </div>
              <p className="font-bold text-lg text-neutral-600">Traoré Adama</p>
            </Link>
          </div>
          <div className="down flex items-center justify-center w-8 h-8 bg-neutral-600 rounded-lg    hover:shadow-md hover:shadow-neutral-600 duration-200">
            <Link href="/" className="font-bold text-black">
              <ArrowUp />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
