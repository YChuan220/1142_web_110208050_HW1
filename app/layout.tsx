import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/component/menu";
import MobileHeader from "@/component/MobileHeader";

export const metadata: Metadata = {
  title: "Yu-Chuan | Portfolio",
  description: "Product Manager & UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      {/* 最外層：滿版高度，並設定你在截圖中的灰藍色背景 */}
      <body className="min-h-screen bg-[#8fa1b4] p-4 md:p-8 lg:p-12 flex justify-center items-center">
        
        {/* 手機版頂部導覽列 (只有在 md 以下顯示) */}
        <div className="md:hidden w-full h-full bg-[#8fa1b4] absolute inset-0">
          <MobileHeader />
          <main className="p-4 bg-white rounded-t-3xl mt-16 h-[calc(100vh-4rem)] overflow-y-auto">
             {children}
          </main>
        </div>

        {/* 💻 電腦版：左右分欄的容器 (使用 Grid 確保比例) */}
        <div className="hidden md:grid grid-cols-[280px_1fr] gap-6 w-full max-w-[1200px] h-[85vh] min-h-[600px]">
          
          {/* 左側欄：包含大頭貼卡片與選單 (Sidebar 內部已經是卡片了) */}
          <div className="flex flex-col gap-4 h-full overflow-y-auto no-scrollbar pr-2">
            <Sidebar />
          </div>

          {/* 右側內容區塊：一個獨立的大卡片 */}
          <main className="bg-white rounded-3xl shadow-lg relative overflow-hidden flex flex-col h-full">
            {/* 內容區塊 (可滾動) */}
            <div className="flex-1 overflow-y-auto p-8 lg:p-12 no-scrollbar relative z-10">
              {children}
            </div>
            
          </main>
          
        </div>
      </body>
    </html>
  );
}