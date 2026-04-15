'use client';

import { useState } from 'react';

// 定義類型
interface Project {
  name: string;
  imageUrl: string;
}

interface TiltCardProps {
  project: Project;
  colSpan?: number;
  rowSpan?: number;
  tiltDegree?: number;
  scale?: number;
  bgSize?: 'cover' | 'contain';
}

export default function Hobby() {
  const projectData: Record<string, Project> = {
    "1": { name: "參加瑜伽教練訓練課程", imageUrl: "/yoga.png" },
    "2": { name: "積極舉辦與參與系上活動", imageUrl: "/econ.jpg" },
    "3": { name: "參與校內產品開發交流論壇", imageUrl: "/open.jpeg" },
    "4": { name: "與LinkedIn創辦人對談", imageUrl: "/sting.jpg" },
    "5": { name: "與Skype創辦人對談", imageUrl: "/sting2.jpg" },
    "6": { name: "個人繪畫作品-1", imageUrl: "/flower.png" },
    "7": { name: "個人繪畫作品-3", imageUrl: "/iu.png" },
    "8": { name: "個人繪畫作品-2", imageUrl: "/red.png" },
  };

  // 可重用的卡片組件（加上類型）
  const TiltCard = ({ 
    project, 
    colSpan = 1, 
    rowSpan = 1, 
    tiltDegree = 12, 
    scale = 1.1,
    bgSize = "cover" 
  }: TiltCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className={`bg-gray-200 rounded-2xl overflow-hidden relative bg-center bg-no-repeat
                    transition-all duration-300 ease-out hover:shadow-2xl hover:z-10
                    ${colSpan === 2 ? 'col-span-2' : 'col-span-1'}
                    ${rowSpan === 2 ? 'row-span-2 h-full flex justify-center items-center' : 'row-span-1'}`}
        style={{ 
          backgroundImage: `url(${project.imageUrl})`,
          backgroundSize: bgSize,
          transformStyle: 'preserve-3d',
          transform: isHovered 
            ? `rotateY(${tiltDegree}deg) scale(${scale})` 
            : 'rotateY(0deg) scale(1)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-white text-md bg-black/15 w-full h-[48px] flex 
                        justify-center items-center backdrop-blur-sm
                        absolute bottom-0">
          {project.name}
        </div>
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold text-[#2b5ba4] mb-4">個人興趣 Hobby</h1>
      <p className="text-gray-600 mb-8 text-sm leading-relaxed">
        我樂於參加許多活動，透過與不同的人交流來拓展自己的眼界✨<br/>
        喜歡的運動有瑜伽、跑步與籃球，平常也喜歡自己電繪以及做一些平面設計
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px]" 
           style={{ perspective: '1000px' }}>
        
        <TiltCard project={projectData["4"]} colSpan={2} rowSpan={2} tiltDegree={6} scale={1.05} />
        <TiltCard project={projectData["1"]} tiltDegree={-12} />
        <TiltCard project={projectData["2"]} rowSpan={2} tiltDegree={-6} />
        <TiltCard project={projectData["3"]} tiltDegree={12} />
        <TiltCard project={projectData["5"]} tiltDegree={-12} />
        <TiltCard project={projectData["6"]} tiltDegree={12} bgSize="contain" />
        <TiltCard project={projectData["7"]} colSpan={2} rowSpan={2} tiltDegree={-6} scale={1.05} bgSize="contain" />
        <TiltCard project={projectData["8"]} tiltDegree={-12} />
        
      </div>
    </div>
  );
}
