import Image from "next/image";

// 將專案資料獨立出來，方便未來編輯與維護
const projectsData = [
  {
    id: "open",
    title: "OpenNCCU",
    year: "2024 - present",
    hoverTitle: "徵才月集點卡合作專案 PM",
    hoverDesc: "統籌前期使用者研究、UI/UX設計、前後端資料串接等跨組、對學校之合作事項",
    imgSrc: "/open1.png", 
  },
  {
    id: "BSG",
    title: "NCCU BSG 商業個案研究社",
    year: "2023 - 2024",
    hoverTitle: "共同創辦人暨學術長",
    hoverDesc: "領導 8 位競賽經驗豐富的組員，主要負責幹部內訓規劃、社課與專案內容設計",
    imgSrc: "/bsg.jpg",
  },
  {
    id: "wooshi",
    title: "WOOSHI 午食",
    year: "2023 - 2024",
    hoverTitle: "午食 - 馱著每一個空虛的胃橫越校園美食沙漠",
    hoverDesc: "致力於為校內用餐族群打造良好用餐體驗，用戶可以前一天就訂購隔天的餐點，並於時間內到指定地點領取。平台曾獲 U-start 第一階段補助。",
    imgSrc: "/wooshi.png",
  },
  {
    id: "oic",
    title: "NCCU OIC Film Competition",
    year: "2022",
    hoverTitle: "2022 影片徵選 季軍",
    hoverDesc: "向有意願來政大留學的外國朋友們，透過較為輕鬆的VLOG形式，宣傳校內環境與學習風氣。",
    imgSrc: "/vlog.png",
  }
];

export default function project() {
  return (
    <div className="animate-fade-in">
      {/* 頁面標題與簡介 */}
      <h1 className="text-4xl font-bold text-[#2b5ba4] mb-4">專案經驗 Projects</h1>
      <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
        做專案的初衷有二：「親手解決身邊的問題」和「與比自己厲害的人共事學習」，<br/>
        我不希望自己只是嘴上抱怨，而是直面問題的本質；同時我也認為這樣能吸引到跟我一樣固執而有想法的夥伴
      </p>

      {/* 專案 Grid 列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          // 使用 group 類別，讓內部的元素可以追蹤外層卡片的 hover 狀態
          <div 
            key={project.id} 
            className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            

            {/* 上半部：圖片與 Hover 遮罩 */}
            <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
  
              {/* 專案截圖 */}
              <Image src={project.imgSrc} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"/> 

              {/* 🌟 核心功能：Hover 時的白色半透明遮罩 */}
              <div className="absolute inset-0 bg-white/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center z-10 backdrop-blur-[2px]">
                {/* 加入微微往上浮現的動畫 (translate-y)，讓互動更滑順 */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.hoverTitle}
                </h3>
                <p className="text-sm text-gray-600 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.hoverDesc}
                </p>
              </div>
            </div>
              

            {/* 下半部：作品名稱與年份 */}
            <div className="p-4 md:px-5 md:py-4 bg-white border-t border-gray-50 relative z-20">
              <p className="text-gray-600 italic text-sm md:text-base">
                {project.title}, {project.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}