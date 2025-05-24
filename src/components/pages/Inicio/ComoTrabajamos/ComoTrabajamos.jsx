import { useState } from 'react'
import StepItem from '../../../common/Step/StepItem/StepItem'
import './comoTrabajamos.scss'
import { useEffect } from 'react'

const ComoTrabajamos = () => {
    const [steps, setSteps] = useState([true, false, false, false, false, false])
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSteps(prevSteps => {
                const index = prevSteps.indexOf(true);
                const newSteps = Array(prevSteps.length).fill(false);
        
                newSteps[(index + 1) % prevSteps.length] = true;
                return newSteps; 
            });
        }, 3000);
    
        return () => clearInterval(interval);
    }, []);
    

  return (
    <section id="comoTrabajamos" className="containerExpanded">
        <div className="container">
            <div className="ct-container">
                <div className="ct-titles">
                    <h2 className="title">¿Cómo trabajamos?</h2>
                    <p className='text'>En Develio, seguimos un proceso claro y eficiente para garantizar el éxito de cada proyecto.</p>
                </div>
                <div className="ct-content">
                    <StepItem number={1} desc={"Reuniones de entendimiento"} active={steps[0]}/>
                    <StepItem number={2} desc={"Generación de documento detallado"} active={steps[1]}/>
                    <StepItem number={3} desc={"Inicio del proyecto"} active={steps[2]}/>
                    <StepItem number={4} desc={"Muestras de avances al cliente"} active={steps[3]}/>
                    <StepItem number={5} desc={"Entrega de la aplicación"} active={steps[4]}/>
                    <StepItem number={6} desc={"Soporte y mejora continua"} active={steps[5]}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ComoTrabajamos