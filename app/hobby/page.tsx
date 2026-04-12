export default function HobbyPage() {
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">興趣</h1>
      <p className="text-gray-600 mb-8 text-sm leading-relaxed">
        從動態的跑步到靜態的哲學閱讀，這些都是我獲取生活能量的來源✨<br/>
        穿著 Novablast 5 以小步伐維持在 7 分速，或是在海德格與柏格森的理論中尋找介面設計的靈感。
      </p>

      {/* Grid 瀑布流排版 (使用 col-span 與 row-span) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px]">
        <div className="bg-gray-200 rounded-2xl overflow-hidden col-span-2 row-span-2 relative">
           {/* 替換成你的圖片 */}
           <div className="absolute inset-0 flex items-center justify-center text-gray-400">跑步紀錄照片</div>
        </div>
        <div className="bg-gray-200 rounded-2xl overflow-hidden row-span-1"></div>
        <div className="bg-gray-200 rounded-2xl overflow-hidden row-span-2"></div>
        <div className="bg-gray-200 rounded-2xl overflow-hidden col-span-1 row-span-1"></div>
        <div className="bg-gray-200 rounded-2xl overflow-hidden col-span-1 row-span-1"></div>
      </div>
    </div>
  );
}