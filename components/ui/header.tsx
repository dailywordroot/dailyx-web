import Image from "next/image"
import Link from "next/link"
import Cookies from "js-cookie";

export default function Header() {
  const imageUrl = Cookies.get('imageUrl') || '';

  return (
    <div className="w-full h-16 bg-white border-b border-cyan-100 px-4 flex items-center justify-between">
        <Link href="/home" className="flex items-center gap-2">
          <Image 
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-cyan-900">DailyWord</span>
        </Link>
        <Link href="/config">
          <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center cursor-pointer hover:bg-cyan-200">
            <Image
              style={{
                borderRadius: '50%',
              }}
              src={imageUrl}
              alt="User"
              width={40}
              height={40}
            />
          </div>
        </Link>
      </div>
  )
}