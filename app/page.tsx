import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-white shadow-lg mb-8">
        <Image src="/profile.jpg" alt="Profile" width={150} height={150} className="object-cover" />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">歡迎來到 YChuan 的個人網站</h1>
      <p className="text-gray-500 mb-8">點擊下方按鈕看更多關於我的介紹</p>
      
      <Link href="/about">
        <button className="bg-[#0095f6] hover:bg-blue-300 text-white font-medium py-3 px-8 rounded-full shadow-md transition-all hover:scale-105">
          開始探索
        </button>
      </Link>
    </div>
  );
}