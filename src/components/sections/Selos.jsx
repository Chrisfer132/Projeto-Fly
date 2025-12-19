import Logo from '../../assets/images/logo.png';

export const Selos = () => {
    return (
        <section className="text-white bg-blue flex justify-center w-full">
            <div className='flex p-4 md:py-6 md:px-8 items-center gap-3 md:gap-6 lg:gap-10'>
                <div className="shrink-0">
                    <img src={Logo} alt="Logo" className='h-10 w-auto md:h-16 lg:h-20 lg:ml-15'/>
                </div>
                <div>
                    <p className='text-[10px] md:text-[16px] lg:text-[25px] leading-tight'>
                        Serviços Profissionais com <span className='font-bold'>90 DIAS DE GARANTIA | SIGILO DE DADOS | PEÇAS PREMIUM | SATISFAÇÃO</span>
                    </p>
                </div>
            </div>
        </section>
    )
}