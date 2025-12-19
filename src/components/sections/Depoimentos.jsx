import Pessoa1 from '../../assets/images/pessoa-1.png';
import Pessoa2 from '../../assets/images/pessoa-2.png';
import Pessoa3 from '../../assets/images/pessoa-3.png';
import Estrelasdepoimentos from '../../assets/icons/estrelas-depoimentos.svg';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    image: Pessoa1,
    alt: "Foto de cliente satisfeito",
    text: "\"Levei meu notebook em duas assistências e condenaram a placa-mãe, dizendo que eu precisava comprar outro. A equipe da Minha Placa identificou o curto, fez o reparo e eu gastei 1/3 do valor de um novo. Trabalho impecável!\""
  },
  {
    id: 2,
    image: Pessoa3,
    alt: "Foto de cliente gamer",
    text: "\"Meu PC Gamer estava superaquecendo e desligando sozinho. Fizeram a limpeza química e a troca da pasta térmica. Me mandaram fotos de todo o processo e agora a máquina roda fria e silenciosa. Confio de olhos fechados.\""
  },
  {
    id: 3,
    image: Pessoa2,
    alt: "Foto de cliente",
    text: "\"Serviço de excelente qualidade. Recuperaram a placa da minha geladeira que custava uma fortuna se fosse comprar nova. Atendimento rápido e preço justo.\"" 
  }
];

export const Depoimentos = () => {
  return (
    <section className="mt-15 md:mt-30 text-blue">
      <div className="text-center flex flex-col items-center justify-center px-4">
        <h2 className="text-[24px] md:text-[36px] max-w-lg md:max-w-full">
          Veja o que nossos clientes <span className='font-bold'>estão falando</span>
        </h2>
      </div>

      <div className="mt-15 md:mt-20 mx-0 md:mx-10 lg:mx-40">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-5 md:px-0 lg:justify-center">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div key={testimonial.id} className="snap-center shrink-0 w-[70%] md:w-80 lg:w-90 border-green border rounded-4xl flex flex-col items-center p-8 bg-white">
              <img src={testimonial.image} className="h-24 w-24 mb-4 object-cover rounded-full" alt={testimonial.alt} />
              <p className="font-semibold text-[11px] md:text-[12px] text-center text-blue max-w-[90%] italic leading-relaxed">{testimonial.text}</p>
              <img src={Estrelasdepoimentos} alt="5 estrelas" className="mt-4 w-20 md:w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}