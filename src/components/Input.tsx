interface InputProps {
    text: string
}

export function Input({ text }: InputProps) {
    return(
        <label className=" flex flex-col gap-2 text-zinc-400 text-sm">{ text }
            <input className=" border-zinc-400 border-solid border-2 rounded-lg p-2" type="text" />
        </label>
    )
}