interface SelectProps {
    text: string
}

export function Select({ text }: SelectProps) {
    return(
        <label className=" flex flex-col gap-2 text-zinc-400 text-sm">{ text }
            <select className=" border-zinc-400 border-solid border-2 rounded-lg p-2">
                <option>Selecione</option>
            </select>
        </label>
    )
}