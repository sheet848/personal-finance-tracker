import React from 'react'
import { data } from '../../../constants/data'
import './style.css'

const Transactions = () => {

    //format the date 
    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    }

    return (
        <>
            <div className="card">
                <div className="transaction-section">
                    <div className="card-header">
                        <h2>Transactions</h2>
                        <a href="/transactions" className="more-btn">
                            <span>View All</span>
                        </a>
                    </div>
                    <ul className="transaction-list">
                        {
                            data[0].transactions.slice(0, 5).map((item, index) => (
                                <>
                                    <li key={index} className="transaction-item">
                                        <div className="transaction-avatar">
                                            <img src={item.avatar} alt="User Avatar" className="user-avatar-img" />
                                        </div>
                                        <p className="transaction-name">{item.name}</p>
                                        <p className="transaction-income" style={{ color: (item.amount > 0 ? "green" : "") }}>
                                            {
                                                item.amount > 0 ? `+$${item.amount}` : `-$${-item.amount}`
                                            }
                                        </p>
                                        <p className="transaction-date">{formatDate(item.date)}</p>
                                    </li>
                                    <span className="transaction-line"></span>
                                </>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Transactions