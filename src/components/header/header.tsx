import './header.scss'
import { useEffect, useState } from 'react'
import logoImg from '@/assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Header(props: { fixed?: boolean }) {
  const [transparency, setTransparency] = useState(true)

  const { pathname } = useLocation()

  const navMenus = [
    { to: '/', name: 'HOME' },
    { to: '/creators', name: 'FOR CREATORS' },
    { to: '/', name: 'FOR BUSINESS' },
    { to: '/', name: 'ABOUT US' },
    { to: '/', name: 'FAQ' },
  ]
  const [navActiveIndex, setNavIndex] = useState(0)

  useEffect(() => {
    console.log('路由发生变化：', pathname)
    const index = navMenus.findIndex((item) => item.to === pathname)
    setNavIndex(index === -1 ? 0 : index)
  }, [pathname])

  const handleTransparency = () => {
    const scrollY = window.scrollY
    setTransparency(scrollY === 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleTransparency, false)
    return () => {
      window.removeEventListener('scroll', handleTransparency, false)
    }
  }, [])

  return (
    <header className='custom-header'>
      <div
        className={`header-inner ${props.fixed && 'fixed'} ${
          props.fixed && transparency && 'transparency'
        }`}
      >
        <div className='container'>
          <div className='header-logo'>
            <Link to='/'>
              <img alt='LOGO' width='100' height='40' src={logoImg} />
            </Link>
          </div>
          <div className='nav-right'>
            <div className='header-nav'>
              {navMenus.map((item, index) => (
                <Link
                  key={index}
                  className={`link ${navActiveIndex === index && 'active'}`}
                  to={item.to}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <a
              href='https://baidu.com'
              target='_blank'
              className='apply-btn link'
            >
              APPLY HERE
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
