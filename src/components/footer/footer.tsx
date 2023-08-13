import './footer.scss'
import { Link } from 'react-router-dom'
import logoImg from '@/assets/images/logo.png'
import { MailOutlined, PhoneOutlined, RightOutlined } from '@ant-design/icons'

function useFooter() {
  return (
    <footer className='custom-footer'>
      <div className='container'>
        <div className='footer-container'>
          <div className='footer-left'>
            <Link to='/'>
              <img
                className='logo'
                alt='LOGO'
                width='71'
                height='32'
                src={logoImg}
              />
            </Link>
            <p>
              AGEA Talents is an international talent agency, with its head
              office based in Germany.
            </p>
            <p>
              The company creates a system that combines all the elements for a
              successful, unique approach in talent management.
            </p>
          </div>
          <div className='footer-middle'>
            <div className='title'>CONTACT US</div>
            <p>
              <PhoneOutlined />
              <a href='tel:+4915202164288'>(+49) 152 021 642 88</a>
            </p>
            <p>
              <MailOutlined />
              <a href='mailto:recruiting@ageatalents.com'>
                recruiting@ageatalents.com
              </a>
            </p>
          </div>
          <div className='footer-middle'>
            <div className='title opacity-0'>OTHERS</div>
            <p>
              <RightOutlined className='small' />
              <Link to='/'>FAQ</Link>
            </p>
            <p>
              <RightOutlined className='small' />
              <a href='https://baidu.com'>Contact Us</a>
            </p>
            <p>
              <RightOutlined className='small' />
              <Link to='/'>About Us</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default useFooter
