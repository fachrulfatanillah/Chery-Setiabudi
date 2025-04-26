import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/top-navbar/Navbar'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
