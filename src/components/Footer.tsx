import Image from "next/image"
import { FaBeer, FaFacebook, FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

export function Footer() {
    return(
        <div className=" bg-pink-500 text-white p-20 flex gap-9 flex-col">
            <Image width={200} height={200} src="/logo-white.svg" alt="Logo" />
            <ul className=" flex justify-between">
                <li className=" flex flex-col gap-4">
                    <b>Contato</b>
                    <p>
                    Estrada sem nome, 1234, Sala 0 <br />
                    Bairro - Cidade / UF <br />
                    12345-678
                    </p>
                    <b>(00) 99999-9999</b>
                    <b>contato@petshop.com.br</b>
                </li>

                <li className=" flex flex-col gap-4 text-center">
                    <b>Horários de funcionamento</b>
                    <p>De Segunda a Sexta-feira das 9 às 19hs. <br />
                    Aos Sàbados das 9 às 18hs.</p>
                </li>

                <li>
                    <p className=" text-end mb-4">Siga-nos</p>
                    <div className=" flex gap-4 text-2xl">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTiktok />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                </li>
            </ul>
            <h3 className=" text-center">© 2023 pet&shop | Todos os direitos reservados. Desenvolvido por Zira</h3>
        </div>
    )
}