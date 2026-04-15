export default function hobby() {

  let projectData = {
    "1": {
      "name":"參加瑜伽教練訓練課程",
      "imageUrl": "/yoga.png"
    },
    "2": {
      "name":"積極舉辦與參與系上活動",
      "imageUrl": "/econ.jpg"
    },
    "3": {
      "name":"參與校內產品開發交流論壇",
      "imageUrl": "/open.jpeg"
    },
    "4": {
      "name":"與LinkedIn創辦人對談",
      "imageUrl": "/sting.jpg"
    },
    "5": {
      "name":"與Skype創辦人對談",
      "imageUrl": "/sting2.jpg"
    },
  };

  return (
    <div className="animate-fade-in">
       {/* 頁面標題與簡介 */}
      <h1 className="text-4xl font-bold text-[#2b5ba4] mb-4">個人興趣 Hobby</h1>
      <p className="text-gray-600 mb-8 text-sm leading-relaxed">
        我樂於參加許多活動，透過與不同的人交流來拓展自己的眼界✨<br/>
        喜歡的運動有瑜伽、跑步與籃球，平常也喜歡自己電繪以及做一些平面設計
      </p>


      {/* Grid 瀑布流排版 (使用 col-span 與 row-span) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px]">
        <div className="bg-gray-200 rounded-2xl h-full flex justify-center items-center overflow-hidden col-span-2 row-span-2 relative bg-center bg-cover"
        style={{ backgroundImage: `url(${projectData["4"]["imageUrl"]})` }}
        >
          <div className="text-white text-md bg-black/15 w-full h-[48px] flex 
                                  justify-center items-center backdrop-blur-sm
                                  absolute bottom-0">
                  { projectData["4"]["name"] }
          </div>
        </div>

        <div className="bg-gray-200 rounded-2xl overflow-hidden row-span-1 relative **:bg-center bg-cover"
        style={{ backgroundImage: `url(${projectData["1"]["imageUrl"]})` }}
        >
          <div className="text-white text-md bg-black/15 w-full h-[48px] flex 
                                  justify-center items-center backdrop-blur-sm
                                  absolute bottom-0">
                  { projectData["1"]["name"] }
          </div>
        </div>

        <div className="bg-gray-200 rounded-2xl overflow-hidden row-span-2 relative bg-center bg-cover"
        style={{ backgroundImage: `url(${projectData["2"]["imageUrl"]})` }}
        >
          <div className="text-white text-md bg-black/15 w-full h-[48px] flex 
                                  justify-center items-center backdrop-blur-sm
                                  absolute bottom-0">
                  { projectData["2"]["name"] }
          </div>
        </div>

        <div className="bg-gray-200 rounded-2xl overflow-hidden col-span-1 row-span-1 relative bg-center bg-cover" 
        style={{ backgroundImage: `url(${projectData["3"]["imageUrl"]})` }}
        >
          <div className="text-white text-md bg-black/15 w-full h-[48px] flex 
                                  justify-center items-center backdrop-blur-sm
                                  absolute bottom-0">
                  { projectData["3"]["name"] }
          </div>
        </div>

        <div className="bg-gray-200 rounded-2xl overflow-hidden col-span-1 row-span-1 relative bg-center bg-cover"
        style={{ backgroundImage: `url(${projectData["5"]["imageUrl"]})` }}
        >
          <div className="text-white text-md bg-black/15 w-full h-[48px] flex 
                                  justify-center items-center backdrop-blur-sm
                                  absolute bottom-0">
                  { projectData["5"]["name"] }
          </div>
        </div>

      </div>
    </div>
  );
}