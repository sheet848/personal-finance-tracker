import React from 'react'
import Stats from '../components/Overview/Stats/Stats'
import Transactions from '../components/Overview/Transactions/Transactions'
import Recurring from '../components/Overview/Recurring/Recurring'

const Overview = () => {
  return (
    <>
    <div className="page-title">
        <h1>Overview</h1>
    </div>

    <Stats />

    <div className="overview-grid-container">
        <div className="overview-grid">
          {/*<Pots /> */}
          <Transactions />
        </div>
        <div className="overview-grid">
          {/*<Budgets /> */}
          <Recurring />
        </div>
    </div>
    </>
  )
}

export default Overview