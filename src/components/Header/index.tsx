import Image from 'next/image'

export function Header() {
   return (
      <div className="relative">
         <Image src={'/background_top.png'} className="shadow-2xl shadow-slate-900 border-0" alt="Header" width={600} height={50} />
         <h1 className="text-white text-xl absolute left-10 bottom-6 flex-wrap">Olá! Selecione abaixo <br /> o serviço que está buscando...</h1>
         <Image src={'/top_bar.png'} alt="Top Bar" className="right-0 -bottom-1 absolute" width={300} height={30} />
      </div>
   )
}
