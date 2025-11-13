import React from "react";
import localData from "@/localData";
import Link from "next/link";

const { logo } = localData.images;
const { facebookIcon, linkedinIcon, instagramIcon } = localData.svgs;

const Footer = () => {
  return (
    <footer className="bg-gray-50  min-h-[300px] pb-[3rem] pt-[3rem] font-sans">
      <div className="container">
        <div className="content">
          <div className="group flex items-center gap-x-10 gap-y-10  flex-wrap md:justify-between">
            <div>
              <Link href="/" className="inline-block">
                <img src={logo} alt="" className="max-w-[50px] h-auto min-w-[60px] mb-5" />
              </Link>
              <p className="text-xs text-secondary-2 text-thin max-w-[200px] mb-8 leading-[1.5]">We Help Trade Pros Find Work</p>
              {/* <div className="social-list flex gap-3">
                <a
                  href="#/"
                  target="_blank"
                  className="block  w-[35px] h-[35px] rounded-full bg-gray-100 hover:bg-gray-200 duration-300 cursor-pointer p-[9px] fill-gray-600"
                >
                  {facebookIcon}
                </a>
                <a
                  href="#/"
                  target="_blank"
                  className="block  w-[35px] h-[35px] rounded-full bg-gray-100 hover:bg-gray-200 duration-300 cursor-pointer p-[9px] fill-gray-600"
                >
                  {linkedinIcon}
                </a>
                <a
                  href="#/"
                  target="_blank"
                  className="block  w-[35px] h-[35px] rounded-full bg-gray-100 hover:bg-gray-200 duration-300 cursor-pointer p-[9px] fill-gray-600"
                >
                  {instagramIcon}
                </a>
              </div> */}
            </div>
            
            <ul className="flex flex-col gap-2">
              <Link href="/#services" className=" text-dark font-medium  hover:text-secondary-2 duration-300">
                Services
              </Link>
              <Link href="/#process" className=" text-dark font-medium  hover:text-secondary-2 duration-300">
                Process
              </Link>
              <Link href="/#contact" className=" text-dark font-medium  hover:text-secondary-2 duration-300">
                Contact
              </Link>
            </ul>

            <p className=" text-sm text-black/80 max-w-[300px]">
              We connect skilled professionals with homeowners who value quality. Our platform is built to support independent
              tradespeople — not to manage them.
            </p>

            <ul className="">
              <li className="text-secondary-2 mb-2">Owned & operated by Thel LLC</li>
              <li className="text-secondary-2 mb-2">Chapel Hill, NC USA</li>
              <li className="text-secondary-2 mb-2">admin@truetradepros.com</li>
              {/* <li className="text-secondary-2 mb-2">‪(919) 633-5024</li> */}
            </ul>
          </div>

          <br />
          <br />
          <p className="text-secondary-2 text-sm">© 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
