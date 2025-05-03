import './Maintenance.css'
import { FaTools, FaPhoneAlt } from 'react-icons/fa'

function Maintenance() {
  return (
    <div className="maintenance-container">
      <FaTools className="maintenance-icon" />
      <h1>Website Sedang Dalam Perawatan</h1>
      <p>Kami akan kembali dalam beberapa saat.</p>

      <div className="emergency-contact">
        <FaPhoneAlt className="phone-icon" />
        <a 
          href="https://wa.me/62881080248215" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          +62 881‑0802‑48215
        </a>
      </div>
    </div>
  )
}

export default Maintenance
