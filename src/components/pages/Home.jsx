import {Hero} from '../sections/Hero'
import {Processo} from '../sections/Processo'
import { Produtos } from '../sections/Servicos'
import { Especialidades } from '../sections/Especialidades'
import { Depoimentos } from '../sections/Depoimentos'
import { Faq } from '../sections/FAQ'
import {Selos} from '../sections/Selos'
import { Form } from '../sections/Formulario'
import { Footer } from '../sections/footer'

const Home = () => {
    return (
        <>
            <Hero />
            <Processo />
            <Produtos />
            <Especialidades />
            <Depoimentos />
            <Faq />
            <Selos />
            <Form />
            <Footer />
        </>
    )
}


export default Home