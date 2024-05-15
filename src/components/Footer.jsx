import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 relative bottom-0 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">GameFly</h4>
            <p className="text-sm">
              © {new Date().getFullYear()} ©2024 GameFly. All rights reserved .
            </p>
          </div>
        </div>
      </div>
      <div className="mario absolute bottom-0 left-0 w-full">
        <div class="tooltip-mario-container">
          <div class="box"></div>
          <div class="mush"></div>
        </div>
        <div class="brick two"></div>
      </div>
    </footer>
  );
}

export default Footer;
