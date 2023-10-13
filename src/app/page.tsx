import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { OurServices } from "@/components/OurServices";
import { About } from "@/components/About";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <OurServices />
      <About />
      <FeaturedProducts />
      <Footer />
    </main>
  )
}