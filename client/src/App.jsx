import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Principal from './pages/principal'
import Header from './components/Header'
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Principal/>}></Route>
          
        </Routes>

      </Router>
    </>
  )
}

export default App
