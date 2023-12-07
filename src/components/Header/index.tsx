import Image from "next/image";

export function Header() {
   return (
      <div className="relative">
         <Image src={'/background_app.png'} alt="Header" width={600} height={50} />
         <h1 className="text-white text-2xl absolute left-2 bottom-8">Olá! Selecione abaixo {'\n'} o serviço que está buscando...</h1>
         <Image src={'/top_bar.png'} alt="Top Bar" className="right-0 -bottom-1 absolute" width={300} height={30} />
      </div>
   )
}
