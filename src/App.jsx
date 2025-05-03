import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/top-navbar/Navbar'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Services from './pages/list-services/Services'
import Footer from './components/footer/Footer'
import WhatsAppButton from './components/whatsapp/WhatsAppButton'
import Detail_Model_Produk from './pages/detail-model-produk/Detail-Model-Produk'
import NotFound from './components/notfound/NotFound'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail-model-produk" element={<Detail_Model_Produk />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppButton />
      <Footer/>
    </Router>
  )
}

export default App
