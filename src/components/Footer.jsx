import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">
            Job <span className="text-[#903b3b]">Portal</span>
          </h2>
          <p className="text-sm mt-2">
            Your one-stop solution for finding the best job opportunities.
          </p>
        </div>

        {/* Center Section */}
        <div className="flex gap-6">
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="hover:text-[#903b3b]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#903b3b]">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#903b3b]">
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="hover:text-[#903b3b]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#903b3b]">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#903b3b]">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end">
          <p className="text-sm">&copy; {new Date().getFullYear()} Job Portal. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-500 hover:text-[#903b3b]">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-[#903b3b]">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-[#903b3b]">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
