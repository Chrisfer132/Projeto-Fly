import Logo from '../../assets/images/logo.png';

export const Footer = () => {
    return (
        <footer>
            <div className='md:mt-30 text-blue md:ml-50 md:mr-40 ml-5 mr-5 pb-5'>
                <div className='flex align-items-center justify-center gap-2'>
                    <div>
                        <img src={Logo} alt="Logo" className='size-10' />
                    </div>
                    <div className='text-[15px] max-w-30 leading-5 pb-2'>
                        <p>Seu problema com solução</p>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <p className='text-[10px] text-center pt-5'>Copyright © 2025 Minha Placa Minha Vida. Todos os direitos reservados</p>
                </div>
            </div>
            <div className='text-[10px] bg-blue text-white text-center p-2'>
                <p>Site desenvolvido por Christian Fernando Mazzon Gauer</p>
            </div>
        </footer>
    )
}