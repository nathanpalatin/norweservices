'use client'

import { useEffect, useState, useRef } from 'react'

import { useRouter } from 'next/navigation'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { InputMask } from '@/components/InputMask'

import NumberFormat from 'react-number-format'

interface ServiceProps {
  params: {
    service: string
  }
}

export default function Service({ params }: ServiceProps) {

  const router = useRouter()

  const [cpfCnpj, setCpfCnpj] = useState('')
  const [valor, setValor] = useState()

  const handleChangeCpfCnpj = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '')

    if (numericValue.length <= 11) {
      setCpfCnpj(numericValue.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-'))
    } else if (numericValue.length <= 14) {
      setCpfCnpj(numericValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4-'))
    }

    if (inputValue.length < cpfCnpj.length) {
      setCpfCnpj(inputValue)
    }

  }

  const handleFormat = (values) => {
    const { value } = values;
    // Remova todos os caracteres não numéricos
    const numericValue = value.replace(/[^0-9]/g, '');
    // Formate o valor
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(parseFloat(numericValue) / 100); // Converta para centavos

    setValor(formattedValue);
  };


  const renderServiceContent = () => {
    switch (params.service) {
      case 'investimentos':
        return (
          <Input
            label="Por gentileza, diga-nos qual o valor inicial que você pretende investir:"
            value={valor}
            placeholder='R$'
            onChange={(e) => handleFormat({ value: e.target.value })}
            name='valor'
          />
        )

      case 'consorcio':
        return (
          <>

            <h1 className="text-title-service text-sm font-medium pb-2 ">
              Qual tipo de consórcio você está buscando?
            </h1>

            <Select>
              <SelectTrigger className="w-full mb-5 border-zinc-400 p-6 bg-zinc-100">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Consórcio</SelectLabel>
                  <SelectItem value="Automóvel">Automóvel</SelectItem>
                  <SelectItem value="Imóvel">Imóvel</SelectItem>
                  <SelectItem value="Moto">Moto</SelectItem>
                  <SelectItem value="Placa solar">Placa solar</SelectItem>
                  <SelectItem value="Viagem">Viagem</SelectItem>
                  <SelectItem value="Cirurgias">Cirurgias</SelectItem>
                  <SelectItem value="Obras">Obras</SelectItem>
                  <SelectItem value="Agro">Agro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              label="Por gentileza, diga-nos qual o valor da carta que
              está buscando?"
              type='text'
              placeholder='R$'
              value={valor}
              onChange={(e) => handleFormat({ value: e.target.value })}
            />

          </>
        )
      case 'seguros':
        return (
          <>
            <h1 className="text-title-service text-sm font-medium pb-2 ">
              Qual tipo de seguro você está buscando?
            </h1>

            <Select>
              <SelectTrigger className="w-full mb-5 border-zinc-400 p-6 bg-zinc-100">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Consórcio</SelectLabel>
                  <SelectItem value="Automóvel">Automóvel</SelectItem>
                  <SelectItem value="Imóvel">Imóvel</SelectItem>
                  <SelectItem value="Moto">Moto</SelectItem>
                  <SelectItem value="Vida">Vida</SelectItem>
                  <SelectItem value="Saúde">Saúde</SelectItem>
                  <SelectItem value="Viagem">Viagem</SelectItem>
                  <SelectItem value="Empresarial">Empresarial</SelectItem>
                  <SelectItem value="Obras">Obras</SelectItem>
                  <SelectItem value="Agro">Agro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              label="Por gentileza, diga-nos qual o valor do bem que 
              você busca proteger?"
              type={'text'}
              placeholder="R$"
              name="valor"
              value={valor}
              onChange={(e) => handleFormat({ value: e.target.value })}
            />
          </>
        )
      case 'planejamento-de-vida':
        return (
          <Input
            label={
              'Por gentileza, diga-nos qual o valor total de seu patrimônio:'
            }
            type={'text'}
            placeholder="R$"
            value={valor}
            onChange={(e) => handleFormat({ value: e.target.value })}
            name="investimento"
          />
        )
      case 'credito-pf-pj':
        return (
          <>
            <h1 className="text-title-service text-sm font-medium pb-2 ">
              O crédito é para Pessoa Física ou Jurídica?
            </h1>
            <Select>
              <SelectTrigger className="w-full mb-5 border-zinc-400 p-6 bg-zinc-100">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Crédito</SelectLabel>
                  <SelectItem value="Pessoa Física (PF)">Pessoa Física (PF)</SelectItem>
                  <SelectItem value="Pessoa Jurídica (PJ)">Pessoa Jurídica (PJ)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              label="Por gentileza, diga-nos qual o valor do bem que 
            você busca proteger?"
              type={'text'}
              placeholder="R$"
              value={valor}
              onChange={(e) => handleFormat({ value: e.target.value })}
              name={'seila'}
            />
          </>
        )
      case 'financiamento-veicular':
        return (
          <Input
            label="Por gentileza, diga-nos qual o valor do veículo
            que deseja financiar:"
            type={'text'}
            value={valor}
            onChange={(e) => handleFormat({ value: e.target.value })}
            placeholder="R$"
            name={'valor'}
          />
        )
      case 'financiamento-imobiliario':
        return (
          <Input
            label="Por gentileza, diga-nos qual o valor do imóvel
            que deseja financiar:"
            type={'text'}
            placeholder="R$"
            value={valor}
            onChange={(e) => handleFormat({ value: e.target.value })}
            name={'valor'}
          />
        )
      case 'consignado':
        return (
          <>

            <h1 className="text-title-service text-sm font-medium pb-2 ">
              Qual tipo de Consignado você procura?
            </h1>
            <Select>
              <SelectTrigger className="w-full mb-5 border-zinc-400 p-6 bg-zinc-100">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Consignado</SelectLabel>
                  <SelectItem value="Privado">Privado</SelectItem>
                  <SelectItem value="Servidor Público">Servidor Público</SelectItem>
                  <SelectItem value="INSS">INSS</SelectItem>
                  <SelectItem value="Militar">Militar</SelectItem>
                  <SelectItem value="Convênio com banco autorizado">Convênio com banco autorizado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              label="Por gentileza, diga-nos qual o valor da carta que
            está buscando?"
              type={'text'}
              placeholder="R$"
              name={'valor'}
              value={valor}
              onChange={(e) => handleFormat({ value: e.target.value })}
            />
          </>
        )
      case 'servicos-ao-agronegocio':
        return (
          <>
            <h1 className="text-title-service text-sm font-medium pb-2 ">
              Qual tipo de Serviço Agro você busca?
            </h1>
            <Select>
              <SelectTrigger className="w-full mb-5 border-zinc-400 p-6 bg-zinc-100">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Serviço Agro</SelectLabel>
                  <SelectItem value="Crédito rural">Crédito rural</SelectItem>
                  <SelectItem value="Estruturação de CRA">Estruturação de CRA</SelectItem>
                  <SelectItem value="Estruturação de FIAGRO">Estruturação de FIAGRO</SelectItem>
                  <SelectItem value="Financiamento">Financiamento</SelectItem>
                  <SelectItem value="Consórcio">Consórcio</SelectItem>
                  <SelectItem value="Seguro">Seguro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              label="Qual tipo de Serviço Agro você busca?"
              type={'text'}
              placeholder="R$"
              value={valor}
              onChange={(e) => handleFormat({ value: e.target.value })}
              name={'valor'}
            />
          </>
        )
      case 'home-equity':
        return (
          <Input
            label="Por gentileza, diga-nos qual o valor do imóvel
            que você deseja colocar como garantia:"
            type={'text'}
            placeholder="R$"
            value={valor}
            onChange={(e) => handleFormat({ value: e.target.value })}
            name={'valor'}
          />
        )
      case 'investimento-imobiliario':
        return (
          <Input
            label="Por gentileza, diga-nos qual o valor do imóvel
            que você está procurando para comprar:"
            type={'text'}
            placeholder="R$"
            name={'valor'}
            value={valor}
            onChange={(e) => handleFormat({ value: e.target.value })}
          />
        )
      case 'cambio':
        return (
          <Input
            label="Por gentileza, diga-nos qual o valor da operação
            que deseja realizar:"
            type={'text'}
            placeholder="R$"
            name={'valor'}
          />
        )

      case 'cartao':
        return (
          <>
            <p className="font-semibold text-sm text-zinc-500 mb-4">
              Ficamos felizes que deseja ter nosso cartão.
            </p>
            <p className="font-semibold text-sm text-zinc-500 mb-4">
              Neste momento estamos cadastrando nossos clientes interessados em
              uma fila de espera.
            </p>
            <p className="font-semibold text-sm text-zinc-500 mb-4">
              Se você deseja entrar na fila de espera, por gentileza, insira as
              informações ababixo:
            </p>
          </>
        )
    }
  }
  return (
    <>
      <Header
        title={
          params.service === 'cartao'
            ? 'Quase lá. Nos aguarde...'
            : 'Continuando... \nNos conte mais sobre.'
        }
      />

      <div className="container mx-auto mt-2 p-12 sm:p-8">
        <h1>Você selecionou:</h1>
        <h1 className="text-title-service text-lg font-semibold">
          {params.service === 'cartao' && 'Cartão Físico - Norwe Banking'}
          {params.service === 'cambio' && 'Câmbio'}
          {params.service === 'investimento-imobiliario' &&
            'Investimento Imobiliário'}
          {params.service === 'consorcio' && 'Consórcios'}
          {params.service === 'investimentos' && 'Investimentos'}
          {params.service === 'home-equity' && 'Home Equity'}
          {params.service === 'consignado' && 'Crédito Consignado'}
          {params.service === 'financiamento-imobiliario' &&
            'Financiamento de Imóvel'}
          {params.service === 'financiamento-veicular' &&
            'Financiamento de Veículo'}
          {params.service === 'credito-pf-pj' && 'Crédito PF/PJ'}
          {params.service === 'planejamento-de-vida' && 'Planejamento de Vida'}
          {params.service === 'seguros' && 'Seguros'}
          {params.service === 'servicos-ao-agronegocio' && 'Serviços ao Agronegócio'}
        </h1>
        <div className=" mt-5 flex flex-col gap-4 ">
          <form action="https://formsubmit.co/nova.oportunidade@norwe.com.br" method="POST">
            {renderServiceContent()}
            <input type="hidden" name="email" value="demanda.app@norwe.com.br" />
            <input type="hidden" name="_next" value="https://norweservices.vercel.app/success" />
            <input type="hidden" name="_subject" value="Nova oportunidade - Norwe Serviços" />
            <input type="hidden" name="_captcha" value="false" />

            <Input
              label="Precisamos também que confirme seu CPF ou CNPJ de sua conta Norwe:"
              placeholder="000.000.000-00"
              value={cpfCnpj}
              onChange={handleChangeCpfCnpj}
              required
              name="cpfCnpj"
            />

            <InputMask
              label="Confirme também seu número de sua conta
             bancária da Norwe Banking:"
              required
              mask={`9999-9`}
              placeholder="0000-0"
              name="conta"
            />

            <p className="text-zinc-400 text-xs">
              Caso você não souber, você pode retornar ao aplicativo da Norwe e
              verificar no topo da tela.
            </p>

            <Button
              title={
                params.service === 'cartao'
                  ? 'Entrar na fila de espera'
                  : 'Enviar informações'
              }
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  )
}
