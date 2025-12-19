import formprocess from '../../assets/images/formulario-processo.png';
import Caminhaoprocesso from '../../assets/icons/caminhao-processo.svg';
import Lupaprocesso from '../../assets/icons/lupa-processo.svg';
import Garantiaprocesso from '../../assets/icons/garantia-processo.svg';

const PROCESS_STEPS = [
    {
        id: 1,
        icon: formprocess,
        alt: "Ícone de formulário",
        title: "1. Pré-Diagnóstico Inteligente",
        description: "Você preenche nosso formulário de triagem aqui no site e nossos técnicos já identificam as possíveis causas antes mesmo de você sair de casa."
    },
    {
        id: 2,
        icon: Caminhaoprocesso,
        alt: "Ícone de caminhão",
        title: "2. Envio Seguro ou Balcão",
        description: "Traga seu aparelho em nossa unidade ou envie via Transportador. Recebemos equipamentos de todo o Brasil!"
    },
    {
        id: 3,
        icon: Lupaprocesso,
        alt: "Ícone de lupa",
        title: "3. Análise de Engenharia",
        description: "Seu equipamento vai para a bancada. Não \"chutamos\" o defeito: usamos esquema elétrico, microscópio e análise térmica para encontrar a raiz do problema."
    },
    {
        id: 4,
        icon: Garantiaprocesso,
        alt: "Ícone de garantia",
        title: "4. Reparo & Garantia",
        description: "Após a aprovação, realizamos o reparo com peças de qualidade. Você recebe seu aparelho novo de novo e com garantia estendida no serviço."
    }
];

export const Processo = () => {
    return (
        <section className="flex flex-col mt-15 ml-5 mr-5 md:mt-20 md:mx-10 lg:ml-50 lg:mr-30 lg:mt-30
        ">
            <h2 className="text-[24px] md:text-[36px] lg:max-w-150 mb-10 text-left">
                Como funciona o <span className="font-bold">nosso processo de reparo?</span>
            </h2>

            <div className='grid gap-y-8 gap-x-4 text-white justify-items-center grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                {PROCESS_STEPS.map((step) => (
                    <div key={step.id} className="bg-green rounded-full flex flex-col gap-2 items-center justify-center p-4 h-40 w-40 md:h-60 md:w-60">
                        <img src={step.icon} alt={step.alt} className="w-8 h-8 md:w-auto md:h-auto object-contain"/>
                        <p className='text-[8px] md:text-[12px] font-bold text-center'> {step.title} </p>
                        <p className='text-[7px] md:text-[11px] max-w-[90%] text-center leading-tight'> {step.description} </p>
                    </div>
                ))}
            </div>
        </section>
    )
}