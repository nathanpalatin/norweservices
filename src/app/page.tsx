import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";

import { FaHome } from "react-icons/fa"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <Header />

      <div className="container mx-auto mt-8 mb-16 p-4 sm:p-8">
        <div className="grid grid-cols-3 gap-3">

          <Services link="https://" title="Investimentos" icon={FaHome} />
          <Services link="https://" title="Consórcio" icon={FaHome}  />
          <Services link="https://" title="Seguros" icon={FaHome}  />
          <Services link="https://" title="Planejamento de Vida" icon={FaHome}  />
          <Services link="https://" title="Crédito PF/PJ" icon={FaHome}  />
          <Services link="https://" title="Financiamento Veicular" icon={FaHome}   />
          <Services link="https://" title="Financiamento Imobiliário" icon={FaHome} />
          <Services link="https://" title="Consignado" icon={FaHome}  />
          <Services link="https://" title="Serviços ao Agronegócio" icon={FaHome}  />
          <Services link="https://" title="Home Equity" icon={FaHome}  />
          <Services link="https://" title="Investimento Imobiliário" icon={FaHome}  />
          <Services link="https://" title="Câmbio" icon={FaHome} />
        </div>
      </div>
      <Footer />
    </div>
  )

}