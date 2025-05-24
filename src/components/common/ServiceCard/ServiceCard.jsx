import './serviceCard.scss'

const ServiceCard = ({title, description, modalName}) => {
    return (
        <article className="service-card">
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-desc">{description}</p>
            <button aria-label={modalName} className="service-card-button">
                <a href="#contacto">Contactanos</a>
            </button>
        </article>
    )
}

export default ServiceCard