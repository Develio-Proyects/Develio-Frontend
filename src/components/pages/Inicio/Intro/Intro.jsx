import * as motion from "motion/react-client"

const Intro = () => {
  return (
    <section className="containerExpanded">
        <div className="container">
            <motion.div
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 2.5 }}
                viewport={{ once: true }} 
                style={{
                    display: 'flex', justifyContent: 'center', padding: '4rem'
                }}
            >
                <h4 style={{textAlign: 'center', maxWidth: '550px', fontWeight: '500', fontSize: 'clamp(14px, 5vw, 24px)'}}>En <span style={{color: 'var(--primary)'}}>Develio</span> unimos creatividad y conocimiento técnico para transformar ideas en soluciones</h4>
            </motion.div>
        </div>
    </section>
  )
}

export default Intro