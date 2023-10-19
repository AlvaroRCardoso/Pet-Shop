import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (
      <div>
        <main className="my-24 flex justify-center gap-9">
            <Image width={300} height={600} src="/about.jpg" alt="Dog"></Image>
            <div className=" flex gap-9 flex-col w-1/2 pt-4">
                <h3 className=" text-4xl font-bold">Sobre a pet&shop</h3>
                <p className=" text-zinc-500 text-sm">Surgimos da paixão pelos pets e da necessidade de um espaço completo e especializado. Voltado ao bem-estar animal, garantimos a eficiência no atendimento através de profissionais qualificados e alta qualidade em todos os cuidados oferecidos. Queremos que você tenha a melhor experiência de consumo, e seu pet o melhor atendimento possível.<br /><br />
                    Cada cantinho em nosso pet shop foi pensado para oferecer toda atenção e carinho que o seu melhor amigo merece. O bem estar e a satisfação do seu pet é nossa prioridade.<br /><br />
                    Determinados em fazer a diferença, queremos democratizar e simplificar o cuidado com o pet. Aqui você encontra tudo o que seu pet precisa, quando ele precisa, a preços acessíveis, com uma experiência que vai muito além de pet shop.
                </p>
                <Link href="" className=" bg-pink-500 text-white text-base px-9 py-2 rounded-lg w-48">Fale conosco</Link>
            </div>
        </main>
      </div>
    )
  }