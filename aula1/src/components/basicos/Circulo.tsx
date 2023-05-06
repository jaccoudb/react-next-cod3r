interface CirculoProps{
    texto: string
    quasePerfeito?: boolean
}

export default function Circulo(props: CirculoProps) {
    console.log(props);
    return (
        <div className={`
        flex justify-center items-center
            bg-cyan-500
            w-64 h-64
            ${props.quasePerfeito ? 'rounded-2xl' : 'rounded-full'}
            text-black font-black text-3xl
        `}>
            {props.texto}
        </div>
    )
}