import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <div className="w-full h-16 bg-white border-b border-purple-100 px-4 flex items-center justify-between">
        <Link href="/home" className="flex items-center gap-2">
          <Image 
            src="https://static.vecteezy.com/system/resources/previews/009/399/550/original/sun-icon-set-clipart-design-illustration-free-png.png"
            alt="Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-purple-900">WordFlow</span>
        </Link>
        <Link href="/config">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center cursor-pointer hover:bg-purple-200">
            <span className="text-purple-600 font-semibold">U</span>
          </div>
        </Link>
      </div>
  )
}