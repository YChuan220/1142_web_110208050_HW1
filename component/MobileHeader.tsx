"use client";
import { useState } from "react";
import Sidebar from "./menu";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white px-6 py-4 flex justify-between items-center shadow-sm z-50 relative">
        <div className="font-bold text-gray-800">Yu-Chuan</div>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600">
          {/* 漢堡選單 Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 展開的選單 */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-[#8fa1b4] p-6 flex flex-col gap-4 z-40 overflow-y-auto">
           <Sidebar onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}