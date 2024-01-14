import { Header } from "@/components/Header";

export default function Success() {
  return (
    <>
      <Header variant title={"Informações enviadas"} />

      <div className="container mx-auto mt-2 p-12 sm:p-8">
        <h1>Agora é só aguardar.</h1>
        <h1 className="text-title-service text-xl font-semibold">
          Recebemos suas informações
        </h1>
        <h1 className="text-2xl font-semibold text-zinc-500 mt-7">
          Seu consultor de conta entrará em contato em seu número de telefone
          que você cadastrou em sua conta Norwe. <br />
          <br /> Provavelmente iremos te enviar um e-mail também.
        </h1>
        <div className=" mt-5 flex flex-col gap-4 ">
          <p className="text-zinc-400 text-sm">
            Enquanto você aguarda entrarmos em contato com você, volte ao seu
            aplicativo normalmente.
            <br /> <br />
            Se tiver qualquer dúvida, conte com nosso time de suporte ao
            cliente. E claro, conte com seu consultor de conta {`:)`}
          </p>
        </div>
      </div>
    </>
  );
}
