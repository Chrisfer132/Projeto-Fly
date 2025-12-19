import { Link } from "../UI/Link"
import heroImage from '../../assets/images/Hero-imagem.png';

const MARQUEE_ITEMS = [
    "LABORATÓRIO PRÓPRIO",
    "SEGURANÇA DE DADOS",
    "GARANTIA DE 90 DIAS",
    "PAGAMENTO FACILITADO",
    "TECNOLOGIA DE PONTA",
    "TÉCNICOS ESPECIALISTAS",
    "AGILIDADE NA ENTREGA"
];

export const Hero = () => {
    return (
        <>
            <section className="
                flex flex-col md:flex-row items-center md:items-center justify-between
                ml-5 mr-5           
                md:mx-10 md:mt-14   
                lg:ml-50 lg:mr-15   
            ">
                <div className="pt-10 flex flex-col gap-10 w-full md:w-1/2 lg:max-w-2xl">
                    <h1 className="text-[30px] md:text-[36px] lg:text-[40px] text-blue text-left leading-tight">
                        <span className="font-bold">Seu equipamento parou?</span>  Não descarte. Nós trazemos ele de volta à vida.
                    </h1>
                    
                    <h2 className="text-[16px] md:text-[18px] lg:text-[22px] text-blue leading-[140%] max-w-full md:max-w-xl">
                        Assistência Técnica Premium especializada em eletrônicos e informática. Não somos trocadores de peças, somos especialistas em engenharia de reparo, micro-soldagem e diagnósticos avançados.
                    </h2>
                    
                    <div className="flex flex-col gap-4 md:max-w-100">
                        <Link 
                            className="bg-orange text-[15px] p-2 md:pl-15 md:text-[15px] w-full md:w-fit"  
                            href="#form"
                        >
                            Salvar meu aparelho agora!
                        </Link>
                        <h3 className="text-[10px] md:text-[12px] pb-5 text-center md:text-left text-gray font-medium">
                            Orçamento rápido via WhatsApp • Laboratório Próprio
                        </h3>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
                    <img 
                        src={heroImage} 
                        alt="Imagem de um técnico reparando um equipamento" 
                        className="max-w-[80%] md:max-w-full h-auto object-contain"
                    />
                </div>
            </section>

            <div className="bg-blue py-4 overflow-hidden w-full">
                <div className="animate-marquee-infinite flex w-max">
                    {[1, 2].map((loopKey) => (
                        <div key={loopKey} className="flex items-center gap-10 px-4 shrink-0">
                            {MARQUEE_ITEMS.map((item, index) => (
                                <div key={`${loopKey}-${index}`} className="flex items-center gap-10">
                                    <span className="text-white font-medium text-[12px] md:text-[14px] whitespace-nowrap">
                                        {item}
                                    </span>
                                    <span className="text-white">•</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}