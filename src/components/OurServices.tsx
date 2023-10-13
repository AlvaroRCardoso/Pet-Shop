import Image from "next/image"

export function OurServices() {
    return(
        <div className=" flex flex-col gap-8 py-14">
            <h3 className=" text-4xl font-bold text-center">Nossos serviços</h3>
            <div className=" flex m-9 gap-9 justify-around">
                <div className=" flex gap-4 text-center items-center flex-col max-w-xs">
                    <Image className=" mb-4" width={100} height={100} src="/icones/paw-solid.svg" alt="Pata"/>
                    <span className=" font-bold text-pink-500 text-xl">Produtos</span>
                    <p className=" text-zinc-500 text-lg">Uma variedade de rações, petiscos, brinquedos e acessórios para atender o seu amiguinho da melhor forma.</p>
                </div>
                <div className=" flex gap-4 text-center items-center flex-col max-w-xs">
                    <Image className=" mb-4" width={100} height={100} src="/icones/shower-solid.svg" alt="Pata"/>
                    <span className=" font-bold text-pink-500 text-xl">Banho e Tosa</span>
                    <p className=" text-zinc-500 text-lg">Para deixar seu amiguinho com o padrão de beleza que ele merece e muito cheiroso.</p>
                </div>
                <div className=" flex gap-4 text-center items-center flex-col max-w-xs">
                    <Image className=" mb-4" width={100} height={100} src="/icones/syringe-solid.svg" alt="Pata"/>
                    <span className=" font-bold text-pink-500 text-xl">Centro Médico</span>
                    <p className=" text-zinc-500 text-lg">Atendimento veterinário especializado para garantir a saúde e o bem-estar do seu amigo.</p>
                </div>
                <div className=" flex gap-4 text-center items-center flex-col max-w-xs">
                    <Image className=" mb-4" width={100} height={100} src="/icones/dog-solid.svg" alt="Pata"/>
                    <span className=" font-bold text-pink-500 text-xl">Creche</span>
                    <p className=" text-zinc-500 text-lg">Traga seu pet para interagir com a nossa equipe e sociabilizar com outros animais e fique tranquilo(a) para suas atividades do dia-a-dia.</p>
                </div>
            </div>
        </div>
    )
}