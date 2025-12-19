import { Link } from '../UI/Link';
import PlacaEspecialidades from '../../assets/icons/placa-especialidades.svg';
import LimpezaEspecialidades from '../../assets/icons/performace-especialidades.svg';
import EletroEspecialidades from '../../assets/icons/eletro-especialidades.svg';
import DiagnosticoEspecialidades from '../../assets/icons/diagnostico-especialidades.svg';

const SPECIALTIES_DATA = [
  {
    id: 1,
    icon: PlacaEspecialidades,
    alt: "Ícone de reparo de placas",
    title: "Recuperação de Placas",
    description: "Recuperamos placas que outras lojas condenaram. Economize até 70% consertando o componente em vez de trocar o aparelho."
  },
  {
    id: 2,
    icon: LimpezaEspecialidades,
    alt: "Ícone de limpeza e performance",
    title: "Limpeza e Performance",
    description: "Banho químico e pasta térmica premium. Acabe com o aquecimento, o barulho e a lentidão."
  },
  {
    id: 3,
    icon: EletroEspecialidades,
    alt: "Ícone de reparo de eletrodomésticos",
    title: "Placas de Eletrodomésticos",
    description: "Reparo eletrônico. Recupere a peça mais cara do seu eletro sem precisar trocá-lo."
  },
  {
    id: 4,
    icon: DiagnosticoEspecialidades,
    alt: "Ícone de diagnóstico",
    title: "Diagnóstico Honesto",
    description: "Análise técnica precisa. Nós só recomendamos o serviço se o custo-benefício valer a pena para você."
  }
];

export const Especialidades = () => {
  return (
    <section className="mt-15 md:mt-30 text-white bg-blue">
      <div className="pt-10 pb-15 ml-5 mr-5 md:mx-10 lg:ml-50 lg:mr-40">

        <div className="text-center md:items-center md:justify-center md:flex md:flex-col mb-10">
          <h3 className="text-[12px] md:text-[16px] tracking-[2px] md:tracking-[10px] uppercase">
            Nossos <span className='bg-light-blue border border-gray px-2 rounded-2xl'>Diferenciais</span>
          </h3>
          <h2 className="text-[24px] md:text-[36px] max-w-full md:max-w-xl lg:max-w-150 mt-2">
            Conheça as nossas maiores <span className='font-bold'>especialidades</span>
          </h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white justify-items-center'>
          {SPECIALTIES_DATA.map((item) => (
            <div key={item.id} className="h-55 md:h-80 border-2 rounded-4xl border-gray bg-light-blue flex flex-col gap-4 items-center justify-center p-2 w-full lg:w-70">
              <img src={item.icon} alt={item.alt} className="w-12 h-12 md:w-auto md:h-auto" />
              <p className='text-[9px] md:text-[14px] max-w-[90%] md:max-w-64 text-center leading-relaxed'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className='mt-10 flex justify-center'>
          <Link className="bg-orange text-[15px] md:text-[18px] p-2 hover:opacity-90 transition-opacity" href="#form">
            QUERO MEU ORÇAMENTO!
          </Link>
        </div>
      </div>
    </section>
  )
}