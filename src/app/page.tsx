import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Services } from '@/components/Services'

import { FaSignal, FaHome, FaClipboardList, FaClipboardCheck, FaInfinity, FaRegCreditCard, FaCar, FaKey, FaCheckCircle, FaTree, FaBuilding, FaDollarSign, FaEnvira } from "react-icons/fa"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <Header />

      <div className="container mx-auto mt-8 mb-16 p-4 sm:p-8">
        <div className="grid grid-cols-3 gap-4">
          <Services link="https://norwe.com.br/" title="Investimentos" icon={FaSignal} />
          <Services link="https://norwe.com.br/" title="Consórcio" icon={FaClipboardList}  />
          <Services link="https://norwe.com.br/" title="Seguros" icon={FaClipboardCheck}  />
          <Services link="https://norwe.com.br/" title="Planejamento de Vida" icon={FaInfinity}  />
          <Services link="https://norwe.com.br/" title="Crédito PF/PJ" icon={FaRegCreditCard}  />
          <Services link="https://norwe.com.br/" title="Financiamento Veicular" icon={FaCar}   />
          <Services link="https://norwe.com.br/" title="Financiamento Imobiliário" icon={FaKey} />
          <Services link="https://norwe.com.br/" title="Consignado" icon={FaCheckCircle}  />
          <Services link="https://norwe.com.br/" title="Serviços ao Agronegócio" icon={FaEnvira}  />
          <Services link="https://norwe.com.br/" title="Home Equity" icon={FaBuilding}  />
          <Services link="https://norwe.com.br/" title="Investimento Imobiliário" icon={FaHome}  />
          <Services link="https://norwe.com.br/" title="Câmbio" icon={FaDollarSign} />
        </div>
      </div>

      <Footer />

    </div>
  )
}