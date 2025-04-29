import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Overview from './pages/Overview'
import Transactions from './pages/Transactions'
import Budgets from './pages/Budgets'
import Pots from './pages/Pots'
import Recurring from './pages/Recurring'

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Overview />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/budgets' element={<Budgets />} />
            <Route path='/pots' element={<Pots />} />
            <Route path='/recurring-bills' element={<Recurring />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
