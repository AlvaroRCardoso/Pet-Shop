import { FeaturedProducts } from "@/components/FeaturedProducts";

export default function About() {
    return (
      <div>
        <div className=" my-24 flex flex-col gap-8 items-center py-20">
            <h3 className=" w-4/5 text-2xl font-bold">Produtos</h3>
            <FeaturedProducts />
        </div>
      </div>
    )
  }