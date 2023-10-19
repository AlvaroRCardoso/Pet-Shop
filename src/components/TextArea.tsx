interface TextAreaProps {
    text: string
}

export function TextArea({ text }: TextAreaProps) {
    return(
        <label className=" flex flex-col gap-2 text-zinc-400 text-sm">{ text }
            <textarea className=" border-zinc-400 border-solid border-2 rounded-lg p-2"></textarea>
        </label>
    )
}