import Image from "next/image"

export function Header() {
    return(
        <div className=" w-full bg-white flex justify-between fixed top-0 px-20 py-7 items-center box-border">
            <Image width={200} height={200} src="/logo-colored.svg" alt="Logo" />
            <nav className=" flex gap-6 font-semibold items-center h-full">
                <a className="hover:text-pink-500 text-zinc-500" href="/">Home</a>
                <a className="hover:text-pink-500 text-zinc-500" href="sobre">Sobre</a>
                <a className="hover:text-pink-500 text-zinc-500" href="produtos">Produtos</a>
                <a className="hover:text-pink-500 text-zinc-500" href="servicos">Serviços</a>
                <a className="hover:text-pink-500 text-zinc-500" href="fale-conosco">Fala conosco</a>
            </nav>
        </div>
    )
}