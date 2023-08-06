import './index.scss'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className='err-container'>
      <div className='err-content text_c' style={{ fontSize: '2rem' }}>
        404，Not Found
        <div className='back-to-home'>
          <Link className='link' to='/'>
            Back To Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error404
