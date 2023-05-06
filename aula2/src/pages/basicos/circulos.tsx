import Circulo from "@/components/basicos/Circulo";

export default function PrimeiraCirculos() {
    return (
        <div className="flex justify-around items-center h-screen">
            <Circulo texto='Circ #1'/>
            <Circulo texto='Circ #2' quasePerfeito={true}/>
            <Circulo texto='Circ #3' quasePerfeito={false}/>
            <Circulo texto='Circ #4' quasePerfeito/>

        </div>
    )
}