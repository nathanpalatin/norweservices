import Image from "next/image";

export function Footer() {
   return (
      <div className="relative flex justify-center flex-col items-center gap-3 mb-10 mt-6">
         <Image className="rounded-lg" src={'/mockup_creditcard.png'} alt="Mockup credit Norwe" width={340} height={100} />
         <h1 className="text-zinc-400 font-medium -mt-6 left-5 absolute">Em breve</h1>
         <h1 className="text-title-servce font-medium mt-2 ">Solicitar meu cartão físico</h1>

         <Image className="rounded-lg mt-8" src={'/logo_footer.png'} alt="Mockup credit Norwe" width={130} height={100} />
      </div>
   )
}