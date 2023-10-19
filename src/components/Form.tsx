import Link from "next/link";
import { Input } from "./Input";
import { Select } from "./Select";
import { TextArea } from "./TextArea";

export function Form() {
    return (
        <div className=" flex flex-col gap-9 w-2/5">
            <h3 className=" text-4xl font-bold text-start">Fale conosco</h3>
            <form className=" flex flex-col gap-4">
            <Input text="Nome" />
            <Input text="E-mail" />
            <Input text="Telefone" />
            <Select text="Estado" />
            <Select text="Cidade" />
            <TextArea text="Mensagem" />
            </form>
            <Link href="#" className=" bg-pink-500 text-white text-base text-center px-9 py-2 rounded-lg w-48">Enviar</Link>
        </div>
    )
}