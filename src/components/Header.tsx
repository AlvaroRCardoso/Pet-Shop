import Image from "next/image"
import Link from "next/link"

export function Header() {
    return(
        <div className=" w-full bg-white flex justify-between fixed top-0 px-20 py-7 items-center box-border">
            <Image width={200} height={200} src="/logo-colored.svg" alt="Logo" />
            <nav className=" flex gap-6 font-semibold items-center h-full">
                <Link className="hover:text-pink-500 text-zinc-500" href="/">Home</Link>
                <Link className="hover:text-pink-500 text-zinc-500" href="/about">Sobre</Link>
                <Link className="hover:text-pink-500 text-zinc-500" href="/products">Produtos</Link>
                <Link className="hover:text-pink-500 text-zinc-500" href="/services">Serviços</Link>
                <Link className="hover:text-pink-500 text-zinc-500" href="/contact">Fala conosco</Link>
            </nav>
        </div>
    )
}