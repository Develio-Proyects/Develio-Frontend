import Agendar from "./Agendar/Agendar"
import ComoTrabajamos from "./ComoTrabajamos/ComoTrabajamos"
import Contacto from "./Contacto/Contacto"
import Hero from "./Hero/Hero"
import Intro from "./Intro/Intro"
import QueOfrecemos from "./QueOfrecemos/QueOfrecemos"
import Servicios from "./Servicios/Servicios"

const Inicio = () => {
    return (
        <main>
            <Hero />
            <Intro />
            <Servicios />
            <Agendar />
            <ComoTrabajamos />
            <QueOfrecemos />
            <Contacto />
        </main>
    )
}

export default Inicio