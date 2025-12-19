import Formimage from '../../assets/images/Form.svg';
import Flechalaranja from '../../assets/icons/flecha-laranja.svg';

const WHATSAPP_NUMBER = '5555997253484';

const ChevronIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-blue">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

export const Form = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const paciente = String(fd.get('paciente') || '');
        const sintoma = String(fd.get('sintoma') || '');
        const descricao = String(fd.get('descricao') || '');
        const nome = String(fd.get('nome') || '');

        const msg =
            `Olá! Gostaria de solicitar um orçamento.\n\n` +
            `Nome: ${nome || '-'}\n` +
            `Paciente: ${paciente}\n` +
            `Sintoma principal: ${sintoma}\n` +
            `Descrição: ${descricao || '-'}`;

        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
            '_blank',
            'noopener,noreferrer'
        );
    };

    return (
        <section id="form" className="mt-15 md:mt-30 text-blue md:ml-50 md:mr-40 ml-5 mr-5 pb-15">
            <div className='md:flex md:gap-30'>
                <div>
                    <div className="text-left md:items-start md:justify-center md:flex md:flex-col">
                        <h3 className="text-[12px] md:text-[16px] tracking-[2px] md:tracking-[10px] bg-white border inline-block border-gray pl-2 pr-2 rounded-2xl">
                            DIAGNÓSTICO
                        </h3>
                        <div className="flex flex-col gap-10">
                            <h2 className="text-[24px] md:text-[36px] max-w-70  md:max-w-130">
                                <span className="font-bold">Descubra o problema</span> do seu aparelho agora mesmo!
                            </h2>
                            <p className="text-[18px] md:text-[22px] text-blue leading-[140%] max-w-75 md:max-w-140">
                                Preencha os dados abaixo e receba um pré-orçamento dos nossos técnicos via WhatsApp em minutos.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <img src={Formimage} alt="" className="w-full max-w-md md:pt-15" />
                    </div>
                </div>
                
                <div className="mt-10 grid gap-10 md:items-center md:max-w-200">
                    <div className="rounded-4xl bg-orange p-8 md:p-10">
                        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                            
                            <label className="text-white font-semibold">
                                Qual é o seu paciente?
                                <div className="relative mt-3">
                                    <select
                                        name="paciente"
                                        defaultValue="Celular"
                                        className="w-full appearance-none rounded-2xl bg-white px-4 py-3 text-blue outline-none cursor-pointer focus:ring-4 focus:ring-blue/30 transition-all"
                                        required
                                    >
                                        <option>Celular</option>
                                        <option>Notebook</option>
                                        <option>Videogame</option>
                                        <option>Eletrodoméstico</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                                        <ChevronIcon />
                                    </div>
                                </div>
                            </label>

                            <label className="text-white font-semibold">
                                Qual o sintoma principal?
                                <div className="relative mt-3">
                                    <select
                                        name="sintoma"
                                        defaultValue="Liga mas não dá imagem"
                                        className="w-full appearance-none rounded-2xl bg-white px-4 py-3 text-blue outline-none cursor-pointer focus:ring-4 focus:ring-blue/30 transition-all"
                                        required
                                    >
                                        <option>Liga mas não dá imagem</option>
                                        <option>Não liga</option>
                                        <option>Aquecendo / Desligando</option>
                                        <option>Tela quebrada</option>
                                        <option>Outro</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                                        <ChevronIcon />
                                    </div>
                                </div>
                            </label>

                            <label className="text-white font-semibold">
                                Digite uma breve descrição do ocorrido
                                <textarea
                                    name="descricao"
                                    className="mt-3 w-full rounded-2xl bg-white px-4 py-3 text-blue outline-none focus:ring-4 focus:ring-blue/30 transition-all"
                                    rows={5}
                                    required
                                />
                            </label>

                            <label className="text-white font-semibold">
                                Digite seu nome
                                <input
                                    name="nome"
                                    className="mt-3 w-full rounded-2xl bg-white px-4 py-3 text-blue outline-none focus:ring-4 focus:ring-blue/30 transition-all"
                                    required
                                />
                            </label>

                            <button
                                type="submit"
                                className="bg-blue text-[15px] md:text-[18px] p-3 px-6 rounded-full flex items-center justify-center gap-4 font-bold text-white  cursor-pointer"
                            >
                                Solicitar Orçamento
                                <img src={Flechalaranja} alt="" className='size-7' />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};