import React from 'react';
import { Form } from '@/components/Form';

function Contact() {
    return (
        <div>
            <div className=' flex py-20 my-24 justify-around'>
                <Form />

                <div className=' flex flex-col gap-4'>
                    <label className=" flex flex-col gap-2 text-zinc-400 text-sm">Horário de funcionamento
                        <p className=' text-black text-lg'>
                            De Segunda a Sexta-feira das 9 às 19hs. <br />
                            Aos Sábados das 9 às 18hs.
                        </p>
                    </label>

                    <label className=" flex flex-col gap-2 text-zinc-400 text-sm">Telefone
                        <p className=' text-pink-500 text-lg'>
                            (00) 99999-9999
                        </p>
                    </label>

                    <label className=" flex flex-col gap-2 text-zinc-400 text-sm">E-mail
                        <p className=' text-pink-500 text-lg'>
                            contrato@petshop.com.br
                        </p>
                    </label>

                    <label className=" flex flex-col gap-2 text-zinc-400 text-sm">Endereço
                        <p className=' text-pink-500 text-lg'>
                            Estrada sem nome, 1234, Sala 0, Bairro - Cidade / UF - <br /> 12345-678
                        </p>
                    </label>

                    <label className=" flex flex-col gap-2 text-zinc-400 text-sm">Localização
                        <iframe className=' rounded-lg' src="https://www.google.com.br/maps/place/Univates/@-29.4446902,-51.9745614,15z/data=!4m10!1m2!2m1!1sunivates!3m6!1s0x951c618a53718fdf:0x70b8ec4ae586d3b8!8m2!3d-29.4446902!4d-51.956537!15sCgh1bml2YXRlcyIDiAEBkgEKdW5pdmVyc2l0eeABAA!16s%2Fg%2F1224thm7?entry=ttu"></iframe>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Contact;