import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/top-navbar/Navbar'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Services from './pages/list-services/Services'
import Footer from './components/footer/Footer'
import WhatsAppButton from './components/whatsapp/WhatsAppButton'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
      <Footer/>
    </Router>
  )
}

export default App
