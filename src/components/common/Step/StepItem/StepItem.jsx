import './stepItem.scss'

const StepItem = ({number, desc, active}) => {
  return (
    <div className={active ? "step step-active" : "step"}>
        <div className="step-circle">
            <span className="step-number">{number}</span>
        </div>
        <h4 className="step-desc">{desc}</h4>
    </div>
  )
}

export default StepItem