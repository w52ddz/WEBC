import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Team from '@/components/team/team'
import './about-us.scss'
import ourBuilding from '@/assets/images/our_building.jpg'
import ourLocation from '@/assets/images/our_location.svg'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
// @ts-ignore
import WOW from '@/util/wow'

const useAboutUs = () => {
  const [visionList, setVisionList] = useState([
    {
      title: 'OurVision',
      content:
        'Our vision is to make the world a more connected place, online and offline. We’re working on creating a global network dedicated to helping freelancers and creative, independent personalities find opportunities so that they can continue to work the way they want - around their schedules and lives.',
      active: true,
    },
    {
      title: 'Our Mission',
      content: `We are building a global talent network that connects those seeking opportunities with those providing opportunities.

      We aim to give passionate personalities opportunities to realize their full potential by revolutionizing the industry with a new way of thinking. By doing so, we envision tapping into the potential of each individual and helping them achieve the success they deserve.`,
      active: false,
    },
  ])

  function toggleVision(vision: {
    title: string
    content: string
    active: boolean
  }): void {
    vision.active = !vision.active
    setVisionList([...visionList])
  }

  useEffect(() => {
    const wow = new (WOW as any)({
      boxClass: 'wow-us',
      animateClass: 'animated',
      offset: -50,
      mobile: true,
      live: false,
    })
    wow.init()
  }, [])

  return (
    <div className='about-us-page'>
      <Header />
      <div className='main-content'>
        <div className='container'>
          <div className='about-us-title-container'>
            <div
              className='about-us-title wow-us fadeInUp'
              data-wow-delay='100ms'
            >
              <span className='title'>The New Way to</span>
              <div className='animated-sub-title'>
                <span>Success</span>
              </div>
            </div>
            <div
              className='titile-desc  wow-us fadeInUp'
              data-wow-delay='250ms'
            >
              We are passionate about giving you the tools to break through your
              limits and achieve success. Together, we’ll challenge and exceed
              what you’re really capable of.
            </div>
            <div className='start-text'>Let's get started!</div>
          </div>
        </div>
      </div>
      <div className='building-container'>
        <div className='container'>
          <div className='who-we-are'>
            <div
              className='who-we-are-item half-item wow-us fadeInRight'
              data-wow-delay='1s'
            >
              <img src={ourBuilding} />
            </div>
            <div
              className='who-we-are-item half-item wow-us fadeInLeft'
              data-wow-delay='1s'
            >
              <h3>
                Who <span>We Are</span>
              </h3>
              <p>
                We are a young, growing company focused on the management and
                recruitment of talent. Our mission is to create a collaborative
                network that cultivates creativity, curiosity, and passion. We
                are building our brand with huge ambitions, looking to explode
                globally in all ends of the digital entertainment industry. For
                that reason, we are very dedicated in every department to
                fulfill our clients' casting requirements and help our talent
                reach their best performance.
              </p>
              <p>
                AGEA was launched officially in May 2019. Until today we have
                more than 400+ active content creators, with new joiners every
                month. We’ve got some major plans for the future, and your input
                will shape how AGEA grows. Whatever you have to say, we’re
                always listening and responding to our passionate community.
              </p>
              <h4>Start your journey with us!</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='location-container'>
        <div className='container'>
          <div className='half-container'>
            <div className='half-item wow-us fadeInLeft' data-wow-delay='300ms'>
              {visionList.map((vision, index) => (
                <div
                  key={index}
                  className={`vision-item ${vision.active ? 'active' : ''}`}
                >
                  <div
                    className='vision-title-container'
                    onClick={() => toggleVision(vision)}
                  >
                    <div className='icon'>
                      {vision.active ? <MinusOutlined /> : <PlusOutlined />}
                    </div>
                    <div className='vision-title'>{vision.title}</div>
                  </div>
                  <div className='vision-content-container'>
                    <div className='vision-content'>
                      <p>{vision.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='half-item'>
              <img
                src={ourLocation}
                className='wow-us fadeInRight'
                data-wow-delay='300ms'
              />
            </div>
          </div>
          <hr className='solid-hr' />
        </div>
      </div>
      <Team />
      <div className='space'></div>
      <Footer />
    </div>
  )
}

export default useAboutUs
