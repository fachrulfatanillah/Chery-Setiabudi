import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/top-navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
