"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { name: "關於我 About me", sub: "教育背景及專案經驗", path: "/about" },
  { name: "個人興趣 Hobby", sub: "生活的能量來源", path: "/hobby" },
  { name: "設計作品 Design", sub: "課程設計作品", path: "/design" },
  { name: "專案經驗 project", sub: "系統/互動作品", path: "/project" },
];

export default function Sidebar({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();

  return (
    // 1. 將 Fragment 替換為 flex 容器，並設定 h-full 確保它能與右側等高
    <aside className="flex flex-col h-full gap-4">
      
      {/* 個人資訊卡片 (加上 shrink-0 確保下方卡片放大時，這裡不會被擠壓變形) */}
      <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col items-center text-center shrink-0">
        <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden mb-4 bg-gray-100">
          <Image src="/profile.jpg" alt="profile" fill priority sizes="80px" className="object-cover object-top" />
        </div>
        <h1 className="font-bold text-gray-800 text-lg">陳昱銓 Yu-Chuan</h1>
        <p className="text-xs text-gray-500 mt-1">追求「自然捲」而不內捲</p> 
        
        <div className="flex gap-3 mt-4">
          <a href="https://github.com/YChuan220" target="_blank"
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 overflow-hidden" >
            <Image src="/gh.png" alt="github" width={32} height={32} priority={true} className="object-cover" />
          </a>
          <a href="https://www.facebook.com/chen.yu.quan.2005" target="_blank"
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 overflow-hidden" >
            <Image src="/fb.png" alt="fb" width={32} height={32} priority={true} className="object-cover" />
          </a>
          <a href="https://www.instagram.com/dnrwjs_ycc/" target="_blank"
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 overflow-hidden" >
            <Image src="/ig.png" alt="ig" width={22} height={22} priority={true} className="object-contain" />
          </a>
          <a href="https://youtu.be/dQw4w9WgXcQ?si=PZhNAQ-0vZqo259f" target="_blank"
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 overflow-hidden" >
            <Image src="/yt.png" alt="yt" width={32} height={32} priority={true} className="object-cover"  />
          </a>
        </div>
      </div>

      {/* 導覽列卡片容器 (負責分配空間) */}
      <div className="flex flex-col flex-1 gap-3">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.path);
          return (
            <Link 
              key={link.path} 
              href={link.path} 
              onClick={onClick}
              // 2. 核心互動：加入 transition-all 與 duration-500，並在 hover 時觸發 flex-1 填滿剩餘高度
              className="block transition-all duration-500 ease-out hover:flex-1"
            >
              {/* 3. 確保內部 div 高度為 h-full，這樣外層放大時，白底卡片才會跟著拉長 */}
              <div className={`bg-white rounded-2xl p-4 shadow-sm flex justify-between items-center group transition-colors h-full w-full ${isActive ? 'bg-gray-50' : 'hover:bg-gray-50'}`}>
                <div>
                  <h2 className="font-bold text-gray-800 text-sm">{link.name}</h2>
                  <p className="text-xs text-gray-400 mt-1">{link.sub}</p>
                </div>
      
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}