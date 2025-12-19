import Placa from '../../assets/icons/placa-faq.svg'
import ImagemFAQ from '../../assets/images/FAQ-imagem.svg'

const FAQ_DATA = [
    {
        id: 1,
        question: "Vale a pena consertar ou é melhor comprar um novo?",
        answer: "Seu notebook ou console foi condenado por outra loja? Nossa especialidade é recuperar a placa lógica, economizando até 70% do valor de um equipamento novo."
    },
    {
        id: 2,
        question: "Vocês cobram pelo orçamento/diagnóstico?",
        answer: "O diagnóstico inicial de balcão é gratuito. Para diagnósticos avançados de laboratório onde precisamos desmontar o equipamento e analisar a placa com microscópio/multímetro."
    },
    {
        id: 3,
        question: "Quais as formas de pagamento?",
        answer: "Aceitamos cartões de crédito (parcelamento em até X vezes), PIX com desconto e dinheiro. Para empresas parceiras, trabalhamos com faturamento via boleto (sob análise)."
    },
    {
        id: 4,
        question: "Quanto tempo demora o conserto?",
        answer: "Serviços simples (formatação, limpeza, troca de tela) geralmente ficam prontos em 24 a 48 horas. Reparos complexos de placa eletrônica exigem um tempo de bancada maior para testes de stress, variando de 3 a 7 dias úteis."
    }
];

export const Faq = () => {
    return (
        <section className="mt-15 md:mt-20 lg:mt-30 text-blue ml-5 mr-5 md:mx-10 lg:ml-50 lg:mr-40 pb-15">
            <div className='flex flex-col lg:flex-row lg:gap-15 items-center'>
                
                <div className='flex-1 w-full'>
                    
                    <div className="flex flex-row items-center gap-6 md:gap-10 mb-8">
                        <div>
                            <h1 className="text-[60px] md:text-[80px] lg:text-[100px] font-bold text-orange text-left leading-none">FAQ</h1>
                        </div>
                        <div>
                            <h2 className="text-[20px] md:text-[30px] lg:text-[40px] max-w-60 md:max-w-100 leading-tight lg:leading-10 text-left font-bold">Perguntas Frequentes</h2>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 pt-2'>
                        {FAQ_DATA.map((item) => (
                            <div key={item.id} className='flex flex-col gap-3'>
                                <div className='flex items-center gap-2'>
                                    <img src={Placa} alt="Ícone placa" className='size-6 shrink-0' />
                                    <p className='text-[14px] md:text-[18px] lg:text-[20px] leading-tight font-semibold'>
                                        {item.question}
                                    </p>
                                </div>
                                <div>
                                    <p className='text-[12px] md:text-[14px] lg:text-[16px] lg:max-w-150 pl-8 md:pl-0'>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex justify-center lg:justify-end mt-10 lg:mt-0 w-full lg:w-auto'>
                    <img src={ImagemFAQ} alt="Imagem Ilustrativa FAQ" className='w-full max-w-xs md:max-w-md lg:max-w-none lg:size-150 object-contain' />
                </div>

            </div>
        </section>
    )
}