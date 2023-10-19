import React from 'react';
import Image from "next/image"

function Services() {
    return(
        <div className=" mt-16">
            <div className=' flex mt-28 h-80 justify-between'>
                <figure className=' w-2/5 h-full'>
                    <img className=' w-full h-full' src="/servicos/bath-and-groom.jpg" alt='Imagem' />
                </figure>
                <div className=' flex flex-col gap-4 justify-center p-4 w-3/5'>
                    <h3 className=' text-pink-500 text-2xl font-semibold'>Banho e Tosa</h3>
                    <p className=' text-black text-lg'>
                    Dispomos de uma equipe especializada e treinada para realizar o banho e tosa do seu pet, com todo o cuidado necessário e com os melhores produtos do mercado!
                    </p>

                    <p className=' text-zinc-400 text-sm'>
                    Na pet&shop, você tem a garantia de que seu pet será atendido com o mesmo carinho e atenção que você dá à ele. Todos nossos profissionais são muito bem qualificados e passam por constantes treinamentos, visando sempre entregar a melhor experiência para você e seu melhor amigo. Nossa infraestrutura é altamente profissional, contando com secadores, estações de trabalho individuais e produtos de alta qualidade.
                    </p>
                </div>
            </div>

            <div className=' flex bg-pink-500 h-80 justify-between'>
                <div className=' flex flex-col gap-4 justify-center text-white p-4 w-3/5'>
                    <h3 className=' text-2xl font-semibold'>Centro Médico</h3>
                    <p className=' text-lg'>
                    Aqui você encontrará uma clínica veterinária completa, com médicos veterinários formados e instalações especializadas!
                    </p>

                    <p className=' text-sm'>
                    Nós nos preocupamos em oferecer sempre o melhor atendimento. Nossos veterinários são experientes, possuem treinamento, capacitação e certificados, tendo à disposição todos os equipamentos necessários para tratar o seu pet, bem como os melhores medicamentos do mercado. Nossos profissionais estão sempre disponíveis para sanar suas dúvidas e fornecer informações sobre a saúde do seu pet.
                    </p>
                </div>
                <figure className=' w-2/5 h-full'>
                    <img className=' w-full h-full' src="/servicos/medical-center.jpg" alt='Imagem' />
                </figure>
            </div>

            <div className=' flex bg-blue-500 h-80 justify-between'>
                <figure className=' w-2/5 h-full'>
                    <img className=' w-full h-full' src="/servicos/drugstore.jpg" alt='Imagem' />
                </figure>
                <div className=' flex flex-col gap-4 justify-center text-white p-4 w-3/5'>
                    <h3 className=' text-2xl font-semibold'>Farmácia Pet</h3>
                    <p className=' text-lg'>
                    Na pet&shop você encontra uma grande variedade de remédios e produtos voltados à saúde do seu pet!
                    </p>

                    <p className=' text-sm'>
                    Trabalhamos com uma grande variedade de produtos para a saúde animal, todos com certificações e comprovações de efetividade. Possuímos produtos nacionais e importados, além de uma fábrica própria para manipulação de um produto customizado.
                    </p>
                </div>
            </div>

            <div className=' flex bg-orange-500 h-80 justify-between'>
                <div className=' flex flex-col gap-4 justify-center text-white p-4 w-3/5'>
                    <h3 className=' text-2xl font-semibold'>Tele Entrega</h3>
                    <p className=' text-lg'>
                    Se a ração do seu pet acabou ou se você precisa de qualquer outro produto, nós o entregamos na sua casa!
                    </p>

                    <p className=' text-sm'>
                    Realizamos tele-entregas para toda a região, visando facilitar ainda mais sua rotina. Em compras acima de R$ 50,00, o frete é por nossa conta!
                    </p>
                </div>
                <figure className=' w-2/5 h-full'>
                    <img className=' w-full h-full' src="/servicos/delivery.jpg" alt='Imagem' />
                </figure>
            </div>

            <div className=' flex bg-purple-500 h-80 justify-between'>
                <figure className=' w-2/5 h-full'>
                    <img className=' w-full h-full' src="/servicos/pick-up.jpg" alt='Imagem' />
                </figure>
                <div className=' flex flex-col gap-4 justify-center text-white p-4 w-3/5'>
                    <h3 className=' text-2xl font-semibold'>Tele Busca</h3>
                    <p className=' text-lg'>
                    Para a sua maior comodidade e tranquilidade, buscamos seu melhor amigo na sua casa!
                    </p>

                    <p className=' text-sm'>
                    Se você não tem como trazer o seu pet até a nossa loja, nós o buscamos para você com toda segurança e tranquilidade. Consulte conosco a disponibilidade deste serviço para o seu endereço.
                    </p>
                </div>
            </div>

            <div className=' flex bg-green-500 h-80 justify-between'>
                <div className=' flex flex-col gap-4 justify-center text-white p-4 w-3/5'>
                    <h3 className=' text-2xl font-semibold'>Creche</h3>
                    <p className=' text-lg'>
                    Aumente a qualidade de vida do seu pet e deixe-o divertindo-se com outros animais enquanto você trabalha!
                    </p>

                    <p className=' text-sm'>
                    Os animais que frequentam a creche terão um dia cheio de atividade, seguindo uma rotina detalhada elaborada por especialistas em comportamento animal, com muitas brincadeiras, exercícios de obediência e agility recreativo.
                    </p>
                </div>
                <figure className=' w-2/5 h-full'>
                    <img className=' w-full h-full' src="/servicos/daycare.jpg" alt='Imagem' />
                </figure>
            </div>

            <div className=' flex bg-zinc-800 h-80 justify-between'>
                <figure className=' w-2/5 h-full'>
                    <img className=' w-full h-full' src="/servicos/hotel.jpg" alt='Imagem' />
                </figure>
                <div className=' flex flex-col gap-4 justify-center text-white p-4 w-3/5'>
                    <h3 className=' text-2xl font-semibold'>Hotel:</h3>
                    <p className=' text-lg'>
                    Vai viajar e não tem com quem deixar seu Pet? A gente cuida dele por você!
                    </p>

                    <p className=' text-sm'>
                    Possuímos um hotel para pets que contam com casinhas aconchegantes e camas confortáveis para a estadia do seu animal. Durante o dia, eles receberão cinco refeições e participarão das atividades da creche em turno integral.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services;