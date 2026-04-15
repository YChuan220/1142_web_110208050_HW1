"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "./menu";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // 當選單打開時，阻止背景滾動
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // 清理函數
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Header - 固定在最上方 */}
      <div className="fixed top-0 left-0 w-full bg-white px-6 py-4 flex justify-between items-center shadow-sm z-50">
        <Link 
          href="/" 
          className="font-bold text-gray-800 hover:text-[#2b5ba4] transition-colors cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Yu-Chuan
        </Link>
        
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 展開的選單 - 完全覆蓋整個畫面 */}
      {isOpen && (
        <div className="fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-[#8fa1b4] p-6 z-40 overflow-y-auto">
          <Sidebar onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}
