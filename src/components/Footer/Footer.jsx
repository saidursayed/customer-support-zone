import React from "react";
import Container from "../Container/Container";
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black px-4 md:px-0 pt-8 md:pt-20 pb-[30px]">
      <Container>
        <div className="flex flex-col md:flex-row gap-11 justify-between ">
          <div className="md:w-4/12">
            <h2 className="font-bold text-2xl text-white mb-4">CS — Ticket System</h2>
            <p className="text-[#a1a1aa]">A fast and reliable customer support ticket system designed to
            track issues, manage tasks, and resolve queries efficiently with a
            smooth and user-friendly experience.</p>
          </div>
          <div className="md:w-2/12">
            <h4 className="text-white font-medium text-xl mb-4">Company</h4>
            <ul className="space-y-4 text-sm text-[#a1a1aa]">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Contact Saled</a></li>
            </ul>
          </div>
          <div className="md:w-2/12">
            <h4 className="text-white font-medium text-xl mb-4">Services</h4>
            <ul className="space-y-4 text-sm text-[#a1a1aa]">
              <li><a href="#">Products & Services</a></li>
              <li><a href="#">Customer Stories</a></li>
              <li><a href="#">Download Apps</a></li>
            </ul>
          </div>
          <div className="md:w-2/12">
            <h4 className="text-white font-medium text-xl mb-4">Information</h4>
            <ul className="space-y-4 text-sm text-[#a1a1aa]">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Join Us</a></li>
            </ul>
          </div>
          <div className="md:w-2/12">
            <h4 className="text-white font-medium text-xl mb-4">Social Links</h4>
            <ul className="space-y-4 text-[#a1a1aa]">
              <div className="flex items-center gap-2">
                <FaSquareXTwitter className="md:text-xl text-lg text-white"></FaSquareXTwitter>
                <li><a href="#">@CS — Ticket System</a></li>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin  className="md:text-xl text-lg text-white"></FaLinkedin>
                <li><a href="#">@CS — Ticket System</a></li>
              </div>
              <div className="flex items-center gap-2">
                <FaFacebook className="md:text-xl text-lg text-white"></FaFacebook>
                <li><a href="#">@CS — Ticket System</a></li>
              </div>
              <div className="flex items-center gap-2">
                <IoIosMail className="md:text-xl text-lg text-white"></IoIosMail>
                <li><a href="#">support@cst.com</a></li>
              </div>
            </ul>
          </div>
        </div>
        <hr className="mt-8 md:mt-20 mb-4 md:mb-8 text-[#e5e7eb] opacity-[0.2]" />
        <div className="text-left md:text-center text-white">
           <p>© 2025 CS — Ticket System. All rights reserved.</p>
         </div>
      </Container>
    </footer>
  );
};

export default Footer;
