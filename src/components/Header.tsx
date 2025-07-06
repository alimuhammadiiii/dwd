import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-20 flex gap-2 text-black justify-between">
      <nav className="flex flex-row rounded-[42px] w-full h-[85px]  items-center backdrop-blur-md bg-[#1d1d1dc7] ">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
        </div>
      </nav>
    </header>
  )
}
