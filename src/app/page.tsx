import { Header } from '@/components/Header'
import { Services } from '@/components/Services'
import Image from 'next/image'
import Link from 'next/link'

import {
  FaSignal,
  FaHome,
  FaClipboardCheck,
  FaInfinity,
  FaRegCreditCard,
  FaCar,
  FaKey,
  FaCheckCircle,
  FaBuilding,
  FaDollarSign,
  FaEnvira,
  FaShieldAlt,
} from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Header
        title={`Olá! Selecione abaixo \no serviço que está buscando...`}
      />

      <div className="mt-12 grid grid-cols-3 gap-4">
        <Services
          link="/services/investimentos"
          title="Investimentos"
          icon={FaSignal}
        />
        <Services
          link="/services/consorcio"
          title="Consórcio"
          icon={FaClipboardCheck}
        />
        <Services link="/services/seguros" title="Seguros" icon={FaShieldAlt} />
        <Services
          link="/services/planejamento-de-vida"
          title="Planejamento de Vida"
          icon={FaInfinity}
        />
        <Services
          link="/services/credito-pf-pj"
          title="Crédito PF/PJ"
          icon={FaRegCreditCard}
        />
        <Services
          link="/services/financiamento-veicular"
          title="Financiamento Veicular"
          icon={FaCar}
        />
        <Services
          link="/services/financiamento-imobiliario"
          title="Financiamento Imobiliário"
          icon={FaKey}
        />
        <Services
          link="/services/consignado"
          title="Consignado"
          icon={FaCheckCircle}
        />
        <Services
          link="/services/servicos-ao-agronegocio"
          title="Serviços ao Agronegócio"
          icon={FaEnvira}
        />
        <Services
          link="/services/home-equity"
          title="Home Equity"
          icon={FaBuilding}
        />
        <Services
          link="/services/investimento-imobiliario"
          title="Investimento Imobiliário"
          icon={FaHome}
        />
        <Services link="/services/cambio" title="Câmbio" icon={FaDollarSign} />
      </div>

      <div className="relative flex justify-center flex-col items-center gap-3 mb-3 mt-12">
        <Image
          className="rounded-lg"
          src={'/mockup_creditcardok.png'}
          quality={100}
          alt="Mockup credit Norwe"
          width={340}
          height={100}
        />
        <h1 className="text-zinc-500 font-medium mt-5 left-20 absolute italic">
          Em breve
        </h1>
        <Link
          href={'/services/cartao'}
          className="text-title-service font-medium mt-2"
        >
          Solicitar meu cartão físico
        </Link>
      </div>
    </>
  )
}
