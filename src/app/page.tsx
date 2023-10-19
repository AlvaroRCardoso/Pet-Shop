import { Banner } from "@/components/Banner";
import { OurServices } from "@/components/OurServices";
import { About } from "@/components/About";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Banner />
      <OurServices />
      <About />
      <div className=" flex flex-col gap-14 items-center p-20">
        <h3 className=" text-4xl font-bold text-center">Produtos em destaque</h3>
          <FeaturedProducts />
        <Link className=" bg-pink-500 text-white rounded-lg py-2 px-4 w-32 text-center" href="/products">Ver mais</Link>
      </div>
    </div>
  )
}