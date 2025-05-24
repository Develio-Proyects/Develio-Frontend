import './queOfrecemos.scss'
import { useState } from 'react';
import AnimatedPhone from '../../../common/AnimatedPhone/AnimatedPhone';
import SliderQO from '../../../common/SliderQO/SliderQO';
import { queOfrecemos } from '../../../../listas/queOfrecemos';

const QueOfrecemos = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="queOfrecemos" className="containerExpanded">
            <div className="container">
                <div className="QO-titles">
                    <h2 className="title">Hacemos que la tecnología trabaje para ti</h2>
                </div>
                <div className="qo-container">
                    <AnimatedPhone slides={queOfrecemos} activeIndex={activeIndex} />
                    <SliderQO slides={queOfrecemos} setActiveIndex={setActiveIndex} />
                </div>
            </div>
        </section>
    )
}

export default QueOfrecemos