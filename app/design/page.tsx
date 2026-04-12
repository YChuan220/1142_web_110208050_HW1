import React from "react";
import Image from "next/image";

const designProjects = [
  {
    title: "品牌識別設計",
    category: "視覺設計",
    description: "為某品牌設計完整的視覺識別系統，包含 Logo、色彩規範、字體選用等。",
    tags: ["Branding", "Illustrator", "Photoshop"],
    image: "/projects/design-1.jpg",
  },
  {
    title: "App UI/UX 設計",
    category: "介面設計",
    description: "設計一款健康管理 App 的使用者介面，從使用者研究到高擬真原型。",
    tags: ["Figma", "UI/UX", "Prototype"],
    image: "/projects/design-2.jpg",
  },
  {
    title: "活動主視覺設計",
    category: "平面設計",
    description: "為系上年度活動設計主視覺，包含海報、社群素材等延伸應用。",
    tags: ["Poster", "Illustrator", "Social Media"],
    image: "/projects/design-3.jpg",
  },
];

export default function DesignPage() {
  return (
    <div className="min-h-screen px-4 py-12 md:px-12 lg:px-20">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          設計專案
        </h1>
        <p className="text-[#A0A0C0] text-lg">課程設計作品</p>
        <div className="w-16 h-1 bg-[#A78BFA] rounded-full mt-4" />
      </div>

      {/* Project Cards */}
      <div className="space-y-8">
        {designProjects.map((project, index) => (
          <div
            key={index}
            className="group bg-[#22223A] border border-[#33335A] rounded-2xl overflow-hidden hover:border-[#A78BFA]/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Placeholder */}
              <div className="w-full md:w-80 h-48 md:h-auto bg-[#1A1A2E] flex items-center justify-center shrink-0">
                <div className="text-center">
                  <span className="text-5xl">🎨</span>
                  <p className="text-xs text-[#A0A0C0] mt-2">專案圖片</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 md:p-8">
                <span className="text-xs text-[#A78BFA] font-medium bg-[#A78BFA]/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mt-4 mb-3 group-hover:text-[#A78BFA] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#A0A0C0] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#1A1A2E] text-[#E8E8F0] px-3 py-1 rounded-full border border-[#33335A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
