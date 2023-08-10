import {
  RightOutlined,
  RightCircleFilled,
  ShareAltOutlined,
  UserOutlined,
} from '@ant-design/icons'
import './creatorsAndBusniess.scss'
import { useEffect, useState } from 'react'
import { Divider } from 'antd'
import WOW from '@/util/wow'

 function useCreatorsAndBusniess() {
  useEffect(() => {
      const wow = new (WOW as any)({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: -200,
        mobile: true,
        live: false,
      })
      wow.init()
  }, [])
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div className='home-creators-and-busniess'>
      <div className='container'>
        <div className='container-inner'>
          <div className='nav-tabs'>
            <div
              className={`nav-tab-item ${tabIndex === 0 && 'active'}`}
              onClick={() => setTabIndex(0)}
            >
              <UserOutlined />
              <div className='tab-icon-name'>For Creators</div>
            </div>
            <div
              className={`nav-tab-item ${tabIndex === 1 && 'active'}`}
              onClick={() => setTabIndex(1)}
            >
              <ShareAltOutlined />
              <div className='tab-icon-name'>For Business</div>
            </div>
          </div>
          <div className='nav-content'>
            {tabIndex === 0 ? (
              <div className='nav-content-item'>
                <p className='text-center'>
                  We’re here to help you succeed as a content creator! We offer
                  a wide range of services tailored to your needs. Whether
                  you’re just getting started or already have streaming
                  experience, we can help you reach the next level.
                </p>
                <Divider />
                <h4>Did you know...</h4>
                <h5>...you can get paid just for being yourself?</h5>
                <p className='text-left'>
                  Streaming gives you a space to share your lifestyle with loyal
                  fans and followers. Very often, people want to get started,
                  but don't know how! We have established a wide network with
                  different partners, that are always looking for new creators
                  who can complement their platform and are willing to invest in
                  them.
                </p>
                <p className='text-left'>
                  The opportunities to be compensated for the work you do as an
                  entertainer, educator, and inspirational figure are endless.
                  You can make it all happen in your own time, in your own way,
                  in your own space, at a time that works for you and allows you
                  to make money.
                  <span className='text-secondary'>We’re your bridge</span>
                  to the world of Live Streaming and more. Connecting you with
                  opportunities you’ve never even thought of. Aside from
                  offering you one-to-one mentorship, we accompany you on your
                  journey. For us, it’s more than just introducing you to new
                  projects. We want to help you succeed after the first step and
                  provide personalized attention to each member of our team. You
                  have nothing to lose, but everything to gain.
                </p>
                <p className='shadow'>
                  We look forward to getting to know you!
                </p>
                <div className='align-center'>
                  <a
                    href='https://baidu.com'
                    target='_blank'
                    className='link application-btn'
                  >
                    Application Form <RightCircleFilled />
                  </a>
                </div>
              </div>
            ) : (
              <div className='nav-content-item'>
                <h5 className='text-center fz20'>
                  Finding and hiring the right person to work with is hard.
                </h5>
                <p className='text-center why-text'>
                  That’s why, at AGEA, we take care of the hard part for you.
                </p>
                <p className='align-left'>
                  We offer a tailored recruitment service to make sure you find
                  the best match. Our team is here to help you find your dream
                  team! Our outstanding content creators are trained,
                  professional, and fun to work with. With our network, you have
                  a variety of experienced and talented personas, right here!
                  Let us help you with everything from suggesting potential
                  candidates to negotiating and contract-signing. We look
                  forward to helping you find the type you’re looking for.
                </p>
                <div className='align-center'>
                  <a
                    href='https://baidu.com'
                    target='_blank'
                    className='link application-btn active'
                  >
                    Application Form <RightOutlined className='right-arrow' />
                  </a>
                </div>
                <Divider />
                <p>
                  CV screening, online interviews, and face-to-face interviews
                  are just a few of the ways we make sure that only the most
                  suitable candidates are presented to you. Our recruiting team
                  works closely with you to understand your business needs and
                  presents you with a wide variety of potential candidates.
                  We'll take care of everything from start to finish, so you
                  don't have to worry about a thing.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* 服务部分 */}
      <div className='service-container wow fadeIn' data-wow-duration='300ms' data-wow-delay='100ms'>
        <div className='container'>
          <div className='container-inner'>
            <div
              className='wow fadeInUp'
              data-wow-duration='2s'
              data-wow-delay='100ms'
            >
              <h2 className='align-center'>Services</h2>
              <p className='opacity-7 no-margin'>
                We make it easy to deliver high-quality content to your
                audiences.
              </p>
              <p className='opacity-7'>
                Whether you're a creator looking for a role or a business
                searching for talent, AGEA will connect you to the resources you
                need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default useCreatorsAndBusniess