import { ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-5 md:px-8">
        <div className="footer-inner">
          <div className="content flex items-center justify-between py-3">
            <div className="text-sm">
              <p>
                CopyRight 2024 |
                <Link
                  href="https://github.com/Adama-dev15"
                  className="font-bold text-green-500"
                >
                  Traoré Adama
                </Link>
                | Tous droits réservés
              </p>
            </div>
            <div className="down flex items-center justify-center w-8 h-8 bg-green-500 rounded-lg  shadow-lg hover:bg-green-400">
              <Link href="/" className="font-bold text-black">
                <ArrowUp />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
