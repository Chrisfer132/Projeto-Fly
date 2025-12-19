import { Link } from "../UI/Link";
import CheckIcon from '../../assets/icons/check-icon.svg';
import ProdutoImg from '../../assets/images/notebook-produto.svg';
import TecnicosImg from '../../assets/images/tecnicos-repair.png';
import RelogioIcon from '../../assets/icons/relogio.svg';
import Flechalaranja from '../../assets/icons/flecha-laranja.svg';
import { Footer } from "../sections/Footer";

const BENEFITS_DATA = [
    {
        id: 1,
        title: "Economia Inteligente",
        text: "Repare o componente, não a placa. Em vez de condenar a placa inteira como as autorizadas, trocamos apenas o chip defeituoso. Você mantém a performance original com uma economia de até 70%.",
        className: "md:pr-10 md:border-r border-gray/30"
    },
    {
        id: 2,
        title: "Diagnóstico de Engenharia",
        text: "Sem \"chutes\" ou achismos. Utilizamos análise térmica e esquemas elétricos oficiais para identificar a raiz exata do problema. É um reparo cirúrgico e definitivo, não um \"jeitinho\".",
        className: "md:px-10 md:border-r border-gray/30"
    },
    {
        id: 3,
        title: "Confiabilidade Extrema",
        text: "Validado sob estresse. Seu aparelho não é apenas ligado; ele passa por testes de carga de 24h em laboratório antes da entrega. Garantimos estabilidade total com 90 dias de cobertura.",
        className: "md:pl-10"
    }
];

const PaginaServicos = () => {
    const layoutContainer = "md:ml-50 md:mr-40 ml-5 mr-5";

    return (
        <div id='pagina-produto' className="overflow-x-hidden flex flex-col gap-5 md:gap-10 ">
            
            <div className={`mt-8 ${layoutContainer}`}>
                <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-blue transition-colors w-fit group">
                    <span className="font-bold text-[14px] uppercase text-gray">Voltar ao início</span>
                </Link>
            </div>

            <section className={`mt-5 md:mt-10 flex flex-col md:flex-row items-center justify-between gap-10 ${layoutContainer}`}>
                <div className="flex flex-col gap-6 max-w-md md:max-w-2xl">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[32px] md:text-[48px] text-blue leading-tight font-extrabold">
                            Recuperação de <br /> Placa de Notebook
                        </h1>
                        <p className="text-[10px] md:text-[12px] text-gray uppercase tracking-wider font-semibold">
                            MICRO-SOLDAGEM | BGA | SMD | ANÁLISE DE ESQUEMA ELÉTRICO | MACBOOK | NOTEBOOKS GAMER & PREMIUM
                        </p>
                    </div>

                    <p className="text-[14px] md:text-[16px] text-blue leading-[150%]">
                        Não trocamos peças, nós restauramos a engenharia. Especialistas em salvar notebooks 'condenados' por outras assistências, reparando a placa lógica em nível de componente com precisão cirúrgica.
                    </p>
                    <div>
                        <div className="flex items-center gap-2 bg-green w-fit px-4 py-2 rounded-full">
                            <img src={RelogioIcon} alt="Ícone de relógio" /> 
                            <span className="text-white text-[10px] md:text-[12px] font-bold uppercase">Duração do serviço 2 dias</span>
                        </div>

                        <div className="mt-2">
                            <Link 
                                className="bg-orange text-[15px] p-2 md:pl-15 md:text-[15px]" 
                                href="#CTA"
                                img={Flechalaranja}
                            >
                                Salvar meu aparelho agora!
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative w-full  flex justify-center bg-blue rounded-3xl">
                    <div className="absolute top-10 w-60 h-60"></div>
                    <img src={ProdutoImg} alt="Ilustração de reparo de notebook" className="w-full max-w-md md:max-w-lg object-contain" />
                </div>
            </section>

            <section className={`mt-20 md:mt-40 ${layoutContainer}`}>
                <div className="text-center mb-15">
                    <h2 className="text-[19px] md:text-[36px] text-blue">
                        O <span className="font-bold">melhor</span> serviço de Recuperação de Placa de Notebook do <span className="font-bold">MUNDO!</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
                    <div className="w-full md:w-1/2 text-blue text-[13px] md:text-[15px]  flex flex-col gap-4 text-justify md:text-left">
                        <p>Enquanto muitas assistências condenam seu equipamento sugerindo a troca da placa inteira (o que custa quase um notebook novo), nossa abordagem é analítica.</p>
                        <p>Utilizamos microscopia avançada, esquemas elétricos e análise térmica para localizar exatamente qual componente falhou — seja um curto-circuito, um chip BGA com solda fria ou oxidação por líquidos.</p>
                        <p>Nós substituímos apenas o necessário, preservando a originalidade do seu conjunto e submetendo a máquina a testes de estresse rigorosos de 24h. O resultado é um reparo definitivo, seguro e muito mais acessível.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={TecnicosImg} alt="Técnicos trabalhando no notebook" className="w-full" />
                    </div>
                </div>
            </section>

            <section className={`mt-20 md:mt-30 ${layoutContainer}`}>
                <h2 className="text-[24px] md:text-[32px] text-blue mb-10 md:mb-15">
                    Por que escolher os <span className="font-bold">nossos serviços?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
                    {BENEFITS_DATA.map((item) => (
                        <div key={item.id} className={`flex flex-col gap-4 ${item.className}`}>
                            <div className="bg-green w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                                <img src={CheckIcon} alt="Check icone" />
                            </div>
                            <h3 className="font-bold text-[16px] md:text-[18px] text-blue">
                                {item.title}
                            </h3>
                            <p className="text-[12px] md:text-[13px] text-blue leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="CTA" className={`mt-20 mb-20 ${layoutContainer}`}>
                <div className="bg-blue rounded-[30px] p-8 md:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-blue via-gray to-blue opacity-20"></div>

                    <h2 className="text-[24px] md:text-[36px] text-white mb-2">
                        Seu diagnóstico está a um <br className="hidden md:block" /> <span className="font-bold">clique de distância</span>
                    </h2>

                    <p className="text-white/80 text-[12px] md:text-[14px] mb-8 max-w-lg">
                        Preencha a triagem rápida e receba uma estimativa de reparo direto no seu WhatsApp.
                    </p>

                     <Link 
                        className="bg-orange text-[10px] p-2 md:pl-15 md:text-[15px]" 
                        href="/#form"
                        img={Flechalaranja}
                    >
                        INICIAR DIAGNÓSTICO AGORA!
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
        
    );
    
}

export default PaginaServicos;