interface FilhoProps {
    nome: string
    sobrenome: string
}

export default function Filho(props: FilhoProps) {
    return (
        <div className={`
            flex gap-5 p-5 rounded-md
            justify-center items-center
            bg-green-500
            text-white border border-white
        `}>

        <div className='flex justify-center gap-2 text-xl'>
            <span className='font-black'>Pai</span>
            <span>{props.nome}</span>
            <span>{props.sobrenome}</span>
        </div>

        </div>
    )
}