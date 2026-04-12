import Link from "next/link";

const projects = [
  { id: "bus-tracker", title: "Campus Bus Tracker", desc: "解決校園公車 GPS 延遲問題的硬體與軟體整合系統", tags: ["Python", "Hardware"] },
  { id: "credit-tracker", title: "學分追蹤系統", desc: "使用 Notion Database 打造的自動化學分管理工具", tags: ["Notion API", "System Design"] },
];

export default function ProjectPage() {
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">程式專案</h1>
      <p className="text-gray-500 mb-8 text-sm">點擊專案可以看到更詳細的介紹！</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="bg-white border border-gray-100 rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gray-100 aspect-video rounded-2xl mb-4"></div>
            <div className="px-2">
              <h2 className="font-bold text-gray-800 mb-2">{p.title}</h2>
              <div className="flex gap-2 mb-3">
                {p.tags.map(tag => (
                  <span key={tag} className="bg-[#eef8ff] text-[#0095f6] text-xs px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{p.desc}</p>
              <Link href={`/project/${p.id}`}>
                <button className="w-full bg-[#0095f6] text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors">
                  觀看作品
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}