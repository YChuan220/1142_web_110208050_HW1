export default function about() {
  return (
    <div className="animate-fade-in">
       {/* 頁面標題與簡介 */}
      <h1 className="text-4xl font-bold text-[#2b5ba4] mb-4">關於我 About me</h1>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
        哈囉！我是昱銓，是一個不務正業的大學生。就學期間，我曾經參與不同的社團、活動、專案以及創業計畫，
        在過程中我也累積了有關團隊領導、專案管理、產品開發、平面設計和 UIUX 等相關的能力。✨<br/>
        我同時也是個「積極的迷惘人」，雖然對於個人生涯與職涯都感到不知所措，不過我仍主動地選擇那些「能夠為我未來創造更多選擇」的選擇，
        這讓我在過程中有機會跟許多厲害的業界前輩進行交流，甚至結交許多志同道合的夥伴。
        我始終相信努力的過程不會騙你，在未來的某一個瞬間，我將會收穫現今努力的美好果實！
      </p>
      <p className="text-gray-800 mb-8 leading-relaxed text-sm font-bold">
        我始終相信努力的過程不會騙你，在未來的某一個瞬間我將會收穫現今努力的美好果實！
      </p>

      {/* 學習經歷區塊 (淺藍底) */}
      <div className="bg-[#f1f1f1] rounded-2xl p-6 md:p-8 mb-8 border border-blue-50">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xl">📘</span>
          <div>
            <h2 className="font-bold text-gray-800">教育背景</h2>
            <p className="text-xs text-gray-500">Education</p>
          </div>
        </div>
        
        <div className="relative pl-4 border-l-2 border-blue-200 space-y-8">
          <div className="relative">
            <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-[23px] top-1"></div>
            <h3 className="font-bold text-gray-800">國立政治大學 數位內容學士學位學程<span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full ml-2">2025–Present</span></h3>
            <p className="text-gray-500 text-sm mt-1">專注於研究 HCI & HRI 相關研究，並學習前端程式設計(HTML+CSS+Next.js)與使用者經驗設計</p>
          </div>
          <div className="relative">
            <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-[23px] top-1"></div>
            <h3 className="font-bold text-gray-800">國立政治大學 經濟學系<span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full ml-2">2021–Present</span></h3>
            <p className="text-gray-500 text-sm mt-1">專注於個體經濟、經典賽局理論研究，曾獲得大專生研究計畫最佳研究獎</p>
          </div>
        </div>
      </div>

      {/* 工作經歷 (淺藍底) */}
      <div className="bg-[#eef8ff] rounded-2xl p-6 md:p-8 mb-8 border border-blue-50">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xl">📘</span>
          <div>
            <h2 className="font-bold text-gray-800">工作經歷</h2>
            <p className="text-xs text-gray-500">Work Experience</p>
          </div>
        </div>
        
        <div className="relative pl-4 border-l-2 border-blue-200 space-y-8">
          <div className="relative">
            <div className="absolute w-3 h-3 bg-[#0095f6] rounded-full -left-[23px] top-1"></div>
            <h3 className="font-bold text-gray-800">夢想智賦 Dreamrich - PM Intern<span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full ml-2">2024–2025</span></h3>
            <p className="text-gray-500 text-sm mt-1">統籌 3 人功能開發團隊，並負責進行功能測試與規劃執行時程</p>
          </div>
          <div className="relative">
            <div className="absolute w-3 h-3 bg-[#0095f6] rounded-full -left-[23px] top-1"></div>
            <h3 className="font-bold text-gray-800">資策會數轉院 創新服務組 - 兼任研究助理 <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full ml-2">2024–2025</span></h3>
            <p className="text-gray-500 text-sm mt-1">進行特定國家之產業研究，並協助舉辦 Meet Taipei 等國內新創展會</p>
          </div>
        </div>
      </div>

      {/* 專案與活動經歷 (淺紫底) */}
      <div className="bg-[#f8f5ff] rounded-2xl p-6 md:p-8 border border-purple-50">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xl">🏆</span>
          <div>
            <h2 className="font-bold text-gray-800">專案與活動經歷</h2>
            <p className="text-xs text-gray-500">Projects & Activities</p>
          </div>
        </div>

        <div className="relative pl-4 border-l-2 border-purple-200 space-y-8">
          <div className="relative">
            <div className="absolute w-3 h-3 bg-purple-400 rounded-full -left-[23px] top-1"></div>
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
            【OpenNCCU】產品經理<span className="bg-purple-100 text-purple-600 text-xs px-2 py-0.5 rounded-full">2024-present</span>
            </h3>
            <p className="text-gray-500 text-sm mt-2">主導徵才月/學生會市集集點卡合作案的使用者研究、產品設計、開發與上架</p>
          </div>
          <div className="relative">
            <div className="absolute w-3 h-3 bg-purple-400 rounded-full -left-[23px] top-1"></div>
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
            【NCCU BSG 政大商業個案研究社】創社成員暨學術部部長<span className="bg-purple-100 text-purple-600 text-xs px-2 py-0.5 rounded-full">2023-2024</span>
            </h3>
            <p className="text-gray-500 text-sm mt-2">帶領 8 位組員進行課程架構與學期專案制度規劃</p>
          </div>
          <div className="relative">
            <div className="absolute w-3 h-3 bg-purple-400 rounded-full -left-[23px] top-1"></div>
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
            【WOOSHI 午食】共同創辦人暨營運長 <span className="bg-purple-100 text-purple-600 text-xs px-2 py-0.5 rounded-full">2023-2024</span>
            </h3>
            <p className="text-gray-500 text-sm mt-2">負責制定團隊發展目標、規劃平台營運事項與外部組織洽談合作</p>
          </div>
        </div>
      </div>

    </div>
  );
}