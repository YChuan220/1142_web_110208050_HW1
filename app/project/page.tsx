import Image from "next/image";

// 將專案資料獨立出來，方便未來編輯與維護
const projectsData = [
  {
    id: "bricks",
    title: "Bricks",
    year: "2023 - 2024",
    hoverTitle: "Bricks 模組化設計系統",
    hoverDesc: "負責統籌開發與 UI 組件庫的建置，透過模組化思維大幅提升團隊設計與工程的協作效率。",
    // 記得將對應的圖片放入 public 資料夾
    imgSrc: "/projects/bricks.jpg", 
  },
  {
    id: "nccu-pass",
    title: "NCCU Pass",
    year: "2024 - 2025",
    hoverTitle: "政大通行證 NCCU Pass",
    hoverDesc: "從 0 到 1 規劃校園整合 APP，重新梳理學生使用場景，優化選課、地圖與行事曆體驗。",
    imgSrc: "/projects/nccu-pass.jpg",
  },
  {
    id: "virtual-rehearsal",
    title: "Virtual Rehearsal",
    year: "2024",
    hoverTitle: "VR 虛擬演練系統",
    hoverDesc: "結合虛擬實境技術，打造沉浸式的簡報與面試演練空間，探討人機互動的新模式。",
    imgSrc: "/projects/virtual.jpg",
  },
  {
    id: "tealepath",
    title: "Tealepath",
    year: "2024",
    hoverTitle: "Tealepath 茶藝心理測驗",
    hoverDesc: "結合趣味心理測驗與茶文化推廣，設計流暢的互動體驗與視覺動態效果。",
    imgSrc: "/projects/tealepath.jpg",
  }
];

export default function project() {
  return (
    <div className="animate-fade-in">
      {/* 頁面標題與簡介 */}
      <h1 className="text-4xl font-bold text-[#2b5ba4] mb-4">Projects</h1>
      <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
        These works demonstrate my ability to translate user needs into structured solutions, combining interface design, 
        system thinking, and practical implementation. From product design to full-stack development, each project reflects a 
        balance between usability, aesthetics, and real-world application.
      </p>

      {/* 專案 Grid 列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          // 使用 group 類別，讓內部的元素可以追蹤外層卡片的 hover 狀態
          <div 
            key={project.id} 
            className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            {/* 上半部：圖片與 Hover 遮罩 */}
            <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
              
              {/* 專案截圖 (這裡先用純色色塊代替，等你放圖片進去就能顯示) */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                [圖片佔位] {project.title}
              </div>
              {/* 如果你已經把圖片準備好，請解開這段註解並刪除上面的佔位區塊：
                <Image 
                  src={project.imgSrc} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                /> 
              */}

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