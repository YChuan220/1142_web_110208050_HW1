"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { name: "關於我", sub: "學習經歷及經驗", path: "/about" },
  { name: "興趣", sub: "生活的能量來源", path: "/hobby" },
  { name: "設計專案", sub: "課程設計作品", path: "/design" },
  { name: "程式專案", sub: "系統/互動作品", path: "/project" },
];

export default function Sidebar({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {/* 個人資訊卡片 */}
      <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col items-center text-center">
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden mb-4 bg-gray-100">
           {/* 請將你的照片命名為 profile.jpg 放進 public 資料夾 */}
          <Image src="/profile.jpg" alt="Profile" width={80} height={80} priority={true} className="object-cover" />
        </div>
        <h1 className="font-bold text-gray-800 text-lg">Yu-Chuan</h1>
        <p className="text-xs text-gray-500 mt-1">NCCU | OpenNCCU PM</p>
        
        <div className="flex gap-3 mt-4">
          {/* 替換成你的社群連結與 Icon */}
          <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50">GH</a>
          <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50">IG</a>
          <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50">✉️</a>
        </div>
      </div>

      {/* 導覽列卡片 */}
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.path); // 使用 startsWith 讓子頁面也能亮起
        return (
          <Link key={link.path} href={link.path} onClick={onClick}>
            <div className="bg-white rounded-2xl p-4 shadow-sm flex justify-between items-center group hover:bg-gray-50 transition-colors">
              <div>
                <h2 className="font-bold text-gray-800 text-sm">{link.name}</h2>
                <p className="text-xs text-gray-400 mt-1">{link.sub}</p>
              </div>
              {/* 活躍狀態的小藍點 */}
              <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#0095f6]' : 'bg-gray-200 group-hover:bg-gray-300'}`} />
            </div>
          </Link>
        );
      })}
      
      <p className="text-xs text-gray-400 text-center mt-2">© 2026 Yu-Chuan</p>
    </>
  );
}