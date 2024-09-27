import React from 'react'
import './styles.css'
import { PlanItem } from './PlanItem/PlanItem'

const personalPlan = {
    title: "Personal",
    sub: "Special first packet for all",
    price: "8",
    features: [
        "Up to 5 pages each group",
        "Up to 10 group pages",
        "5 Days group page saved",
    ]
}

const regularPlan = {
    title: "Regular",
    sub: "Recommended for personal pro",
    price: "20",
    features: [
        "Up to 15 pages each group",
        "Download page up to 20 pages",
        "Up to 10 group pages",
        "15 Days group page saved",
    ]
}

const premiumPlan = {
    title: "Premium",
    sub: "Packet for Startup & Company",
    price: "48",
    features: [
        "Unlimited group pages",
        "Unlimited download pages",
        "Unlimited pages for each group",
        "Customize sorting group pages",
        "Customize group page name",
        "30 days group page saved"
    ]
}

export const Plans = () => {
  return (
    <div className='plans-container'>
        <h1>Get your best deal</h1>

        <div className="slider-container">
            <h4>Monthly</h4>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
            <h4 style={{color: 'gray'}}>Yearly</h4>
        </div>

        <div className="plans">
            <PlanItem title={personalPlan.title} sub={personalPlan.sub} price={personalPlan.price} features={personalPlan.features} />

            <PlanItem title={regularPlan.title} sub={regularPlan.sub} price={regularPlan.price} features={regularPlan.features} cn={'selected'} />

            <PlanItem title={premiumPlan.title} sub={premiumPlan.sub} price={premiumPlan.price} features={premiumPlan.features} />
        </div>

    </div>
  )
}
