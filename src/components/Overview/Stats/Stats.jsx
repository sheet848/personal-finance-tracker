import React from 'react'
import { data } from '../../../constants/data'
import './style.css'

const Stats = () => {
  return (
    <>
    <section className="overview-status">
        {
            data[0].balance.map((item, index) => (
                <div key={index} className="overview-card"
                    style={{ background: (index === 0 ? "#000" : "" ), color: (index === 0 ? "#fff" : "" )}}>
                    <h3>{item.title}</h3>
                    <p className="overview-value">${item.value}</p>
                </div>
            ))
        }
    </section>
    </>
  )
}

export default Stats