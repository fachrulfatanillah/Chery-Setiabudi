import { FaTools } from 'react-icons/fa'
import './Maintenance.css'

function Maintenance() {
  return (
    <div className="maintenance-container">
      <FaTools className="maintenance-icon" />
      <h1>Website Sedang Dalam Perawatan</h1>
      <p>Kami akan kembali dalam beberapa saat.</p>
    </div>
  )
}

export default Maintenance