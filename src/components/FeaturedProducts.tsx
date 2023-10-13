import Image from "next/image"

export function FeaturedProducts() {
    return(
        <div className=" flex items-center gap-14 flex-col py-20">
            <h3 className=" text-4xl font-bold text-center">Produtos em destaque</h3>
            <ul className=" flex flex-wrap w-11/12 gap-4 justify-center">
                <li className=" flex flex-col gap-4 p-1 rounded-lg items-center w-48 text-center">
                    <Image width={150} height={150} src="/produtos/product-1.webp" alt="Produto" />
                    <p className=" text-zinc-500 text-sm">Royal Canin Maxi Adult 15kg</p>
                    <span className=" text-pink-500 text-base mt-6 font-bold">R$ 109,90</span>
                </li>
                <li className=" flex flex-col gap-4 p-1 rounded-lg items-center w-48 text-center">
                    <Image width={150} height={150} src="/produtos/product-2.webp" alt="Produto" />
                    <p className=" text-zinc-500 text-sm">Premier Fórmula Raças Medias Adulto</p>
                    <span className=" text-pink-500 text-base mt-6 font-bold">R$ 79,90</span>
                </li>
                <li className=" flex flex-col gap-4 p-1 rounded-lg items-center w-48 text-center">
                    <Image width={150} height={150} src="/produtos/product-3.webp" alt="Produto" />
                    <p className=" text-zinc-500 text-sm">Pro Plan Raças Pequenas Reduced Calorie</p>
                    <span className=" text-pink-500 text-base mt-6 font-bold">R$ 79,90</span>
                </li>
                <li className=" flex flex-col gap-4 p-1 rounded-lg items-center w-48 text-center">
                    <Image width={150} height={150} src="/produtos/product-4.webp" alt="Produto" />
                    <p className=" text-zinc-500 text-sm">EasOtic 10ml - Virbac</p>
                    <span className=" text-pink-500 text-base mt-6 font-bold">169,90</span>
                </li>
                <li className=" flex flex-col gap-4 p-1 rounded-lg items-center w-48 text-center">
                    <Image width={150} height={150} src="/produtos/product-5.webp" alt="Produto" />
                    <p className=" text-zinc-500 text-sm">Moletom Snoopy Sleeping Azul- Zooz</p>
                    <span className=" text-pink-500 text-base mt-6 font-bold">R$ 39,90</span>
                </li>
                <li className=" flex flex-col gap-4 p-1 rounded-lg items-center w-48 text-center">
                    <Image width={150} height={150} src="/produtos/product-6.webp" alt="Produto" />
                    <p className=" text-zinc-500 text-sm">N&D Ancestral Selection Cães Adultos Raças Grandes</p>
                    <span className=" text-pink-500 text-base mt-6 font-bold">R$ 89,90</span>
                </li>
                <li className=" flex flex-col gap-4 p-1 rounded-lg items-center w-48 text-center">
                    <Image width={150} height={150} src="/produtos/product-7.webp" alt="Produto" />
                    <p className=" text-zinc-500 text-sm">Kit Hills Prescription Diet Lata A/D Urgent Care 156g</p>
                    <span className=" text-pink-500 text-base mt-6 font-bold">R$ 44,90</span>
                </li>
                <li className=" flex flex-col gap-4 p-1 rounded-lg items-center w-48 text-center">
                    <Image width={150} height={150} src="/produtos/product-8.webp" alt="Produto" />
                    <p className=" text-zinc-500 text-sm">Three Cats Original Sênior 10,1kg</p>
                    <span className=" text-pink-500 text-base mt-6 font-bold">R$ 69,90</span>
                </li>
                <li className=" flex flex-col gap-4 p-1 rounded-lg items-center w-48 text-center">
                    <Image width={150} height={150} src="/produtos/product-9.webp" alt="Produto" />
                    <p className=" text-zinc-500 text-sm">Peitoral Ergocomfort Rosa Ferplast</p>
                    <span className=" text-pink-500 text-base mt-6 font-bold">R$ 134,90</span>
                </li>
                <li className=" flex flex-col gap-4 p-1 rounded-lg items-center w-48 text-center">
                    <Image width={150} height={150} src="/produtos/product-10.webp" alt="Produto" />
                    <p className=" text-zinc-500 text-sm">Peitoral Para Cachorros Sail Dog 27</p>
                    <span className=" text-pink-500 text-base mt-6 font-bold">R$ 129,90</span>
                </li>
                <li className=" flex flex-col gap-4 p-1 rounded-lg items-center w-48 text-center">
                    <Image width={150} height={150} src="/produtos/product-11.webp" alt="Produto" />
                    <p className=" text-zinc-500 text-sm">Guia Para Cachorros Tropical Dog 27</p>
                    <span className=" text-pink-500 text-base mt-6 font-bold">R$ 114,90</span>
                </li>
                <li className=" flex flex-col gap-4 p-1 rounded-lg items-center w-48 text-center">
                    <Image width={150} height={150} src="/produtos/product-12.webp" alt="Produto" />
                    <p className=" text-zinc-500 text-sm">Guia Para Cachorros One Dog 27</p>
                    <span className=" text-pink-500 text-base mt-6 font-bold">R$ 114,90</span>
                </li>
            </ul>
            <a className=" bg-pink-500 text-white rounded-lg py-2 px-4 w-32 text-center" href="/produtos">Ver mais</a>
        </div>
    )
}