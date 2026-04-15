import Image from "next/image";

// 將專案資料獨立出來，方便未來編輯與維護
const projectsData = [
  {
    id: "careermonth",
    title: "2024 政大徵才月",
    year: "2023-2024",
    hoverTitle: "政大徵才月 活動主視覺設計",
    hoverDesc: "負責主導該年度活動主視覺與其他周邊商品的設計，以金屬、酸性風格為主要視覺呈現",
    imgSrc: "/career.png", 
  },
  {
    id: "Open",
    title: "OpenNCCU",
    year: "2024-2025",
    hoverTitle: "OpenNCCU Numo UI",
    hoverDesc: "(示意圖)學習 Neumorphism 設計，並了解 UI 設計風格演進",
    imgSrc: "/open.png",
  },
  {
    id: "nanshan",
    title: "2023 InnoConnect+ 南山人壽組",
    year: "2023",
    hoverTitle: "南山健康生活圈 心理測驗",
    hoverDesc: "負責心理測驗的 UI/UX 設計，幫助南山人壽針對其「健康守護圈」的功能進行推廣",
    imgSrc: "/nanshan.png",
  },
  {
    id: "usr",
    title: "USR 地方創生",
    year: "2023",
    hoverTitle: "素食餐廳線上點餐系統建置",
    hoverDesc: "本次專案與素食餐廳-素還真合作，主要負責統籌時程與完成各項 APP 功能設計",
    imgSrc: "/usr.jpg",
  }
];

export default function design() {
  return (
    <div className="animate-fade-in">
      {/* 頁面標題與簡介 */}
      <h1 className="text-4xl font-bold text-[#2b5ba4] mb-4">設計作品 Design</h1>
      <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
        從小開始喜歡美術繪畫，而之後受過 7 年美術班的訓練也慢慢開始接觸到平面/視覺設計<br/>
        於是也將這個技能帶進大學，曾參與過校園徵才月視覺設計與 OpenNCCU 的 UI 設計
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