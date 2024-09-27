import React from 'react'
import './styles.css'

export const PlanItem = ({title, sub, price, features, cn}) => {
  return (
    <div className={`planitem ${cn ? cn : ''}`}>
        
        <header>
          <h2>{title}</h2>
          <p>{sub}</p>
        </header>

        <section className="pricing">
          <h1>${price}</h1>
          <p>/Month</p>
        </section>

        <section className="plan-features">
          {features.map((item, index) => {
            return (<p key={index}>✓ {item}</p>)
          })}
        </section>

        <button>Start Free Trial</button>
    </div>
  )
}
