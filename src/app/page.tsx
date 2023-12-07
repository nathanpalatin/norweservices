import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";

import { FaSignal, FaHome, FaClipboardList, FaClipboardCheck, FaInfinity, FaRegCreditCard, FaCar, FaKey, FaCheckCircle, FaTree, FaBuilding, FaDollarSign } from "react-icons/fa"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <Header />

      <div className="container mx-auto mt-8 mb-16 p-4 sm:p-8">
        <div className="grid grid-cols-3 gap-3">
          <Services link="https://" title="Investimentos" icon={FaSignal} />
          <Services link="https://" title="Consórcio" icon={FaClipboardList}  />
          <Services link="https://" title="Seguros" icon={FaClipboardCheck}  />
          <Services link="https://" title="Planejamento de Vida" icon={FaInfinity}  />
          <Services link="https://" title="Crédito PF/PJ" icon={FaRegCreditCard}  />
          <Services link="https://" title="Financiamento Veicular" icon={FaCar}   />
          <Services link="https://" title="Financiamento Imobiliário" icon={FaKey} />
          <Services link="https://" title="Consignado" icon={FaCheckCircle}  />
          <Services link="https://" title="Serviços ao Agronegócio" icon={FaTree}  />
          <Services link="https://" title="Home Equity" icon={FaBuilding}  />
          <Services link="https://" title="Investimento Imobiliário" icon={FaHome}  />
          <Services link="https://" title="Câmbio" icon={FaDollarSign} />
        </div>
      </div>
      <Footer />
    </div>
  )
}