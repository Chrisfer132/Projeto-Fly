import Notebookproduto from '../../assets/images/notebook-produto.png'
import Performaceproduto from '../../assets/images/performace-produto.png'
import Smartphoneproduto from '../../assets/images/smartphones-produto.png'
import { Link } from "../UI/Link"
import Flechalaranja from '../../assets/icons/flecha-laranja.svg';

const SERVICES_DATA = [
    {
        id: 1,
        image: Notebookproduto,
        alt: "Imagem Produto - Notebook",
        number: "1",
        title: "Recuperação de Placa de Notebook",
        href: "/servicos"
    },
    {
        id: 2,
        image: Performaceproduto,
        alt: "Imagem Produto - Performance",
        number: "2",
        title: "Limpeza Química & Performance",
        href: "/servicos"
    },
    {
        id: 3,
        image: Smartphoneproduto,
        alt: "Imagem Produto - Smartphone",
        number: "3",
        title: "Reparo de Placas de Smartphones",
        href: "/servicos"
    }
];

export const Produtos = () => {
    return (
        <section className="mt-15 ml-5 mr-5 md:mx-10 md:mt-20 lg:ml-50 lg:mr-40 lg:mt-30">
            <div className='flex flex-col md:flex-row md:justify-between items-center text-center md:text-left'>
                <h2 className="text-[24px] md:text-[36px] max-w-full lg:max-w-150">
                    Conheça os nossos serviços <span className="font-bold"> mais procurados</span>
                </h2>
                <Link className="bg-orange text-[15px] p-2 mt-5 md:mt-0 hidden md:inline-flex" href="#servicos">
                    Conhecer todos os serviços
                </Link>
            </div>

            <div className="flex flex-col lg:flex-row items-center mt-15 gap-10 lg:gap-10 xl:gap-30">
                {SERVICES_DATA.map((service) => (
                    <div key={service.id} className="h-90 md:h-100 w-80 md:w-90 border-gray border rounded-4xl flex flex-col gap-2 items-center justify-center">
                        <div className='h-70 w-70 mb-5'>
                            <img src={service.image} alt={service.alt} />
                        </div>

                        <div className="flex justify-center items-center gap-4 px-4">
                            <div className="size-10 shrink-0 bg-orange rounded-t-full rounded-r-full flex items-center justify-center">
                                <p className='font-bold text-white'>{service.number}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-[14px] md:text-[16px] text-blue max-w-40">
                                    {service.title}
                                </p>
                            </div>
                        </div>

                        <div className='mb-20'>
                            <Link href={service.href} className="bg-blue text-[11px] md:text-[14px] p-1 px-12 md:p-2 md:px-15 md:mt-5" img={Flechalaranja}>Conferir serviço</Link>
                        </div>
                    </div>
                ))}
            </div>
            <Link className="bg-orange text-[15px] p-2 mt-10 md:hidden flex justify-center w-full" href="#servicos">
                Conhecer todos os serviços
            </Link>
        </section>
    )
}