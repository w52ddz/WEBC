import {
  RightOutlined,
  RightCircleFilled,
  ShareAltOutlined,
  UserOutlined,
  CopyOutlined,
  RocketOutlined,
  GlobalOutlined,
  UsergroupAddOutlined,
  StockOutlined,
  MoneyCollectOutlined,
  HeartOutlined,
  CrownOutlined,
  SafetyOutlined,
  CommentOutlined,
  CheckCircleOutlined,
  InteractionOutlined,
} from '@ant-design/icons'
import './creatorsAndBusniess.scss'
import { useEffect, useState } from 'react'
import { Divider } from 'antd'
// @ts-ignore
import WOW from '@/util/wow'
import coreValueImg from '@/assets/images/core_value.png'
import workWithImg1 from '@/assets/images/work_with_1.jpg'
import workWithImg2 from '@/assets/images/work_with_2.jpg'
import workWithImg3 from '@/assets/images/work_with_3.jpg'
import Team from '@/components/team/team'

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
      <div
        className='service-container wow fadeIn'
        data-wow-duration='300ms'
        data-wow-delay='100ms'
      >
        <div className='container'>
          <div className='container-inner'>
            <div
              className='service-top wow fadeInUp'
              data-wow-duration='1s'
              data-wow-delay='200ms'
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
          <div className='service-item-line'>
            <div className='col-lg-4 wow fadeInRight' data-wow-delay='300ms'>
              <CopyOutlined />
              <div className='service-item'>
                <h4>TALENT MANAGEMENT</h4>
                <p>
                  Liaison between creators and brands: Contracts, Schedules,
                  Client Briefs, etc.
                  <span>Leave everything to us! </span>
                </p>
              </div>
            </div>
            <div className='col-lg-4 wow fadeInUp' data-wow-delay='300ms'>
              <RocketOutlined />
              <div className='service-item'>
                <h4>BRANDING & TRAINING</h4>
                <p>
                  Helping you build your portfolio with the best facilities,
                  production opportunities, and mentorship.
                </p>
              </div>
            </div>
            <div className='col-lg-4 wow fadeInLeft' data-wow-delay='300ms'>
              <GlobalOutlined />
              <div className='service-item'>
                <h4>GLOBAL EXPERIENCE</h4>
                <p>
                  Cross-culture networking that connects you to the
                  international market.
                </p>
              </div>
            </div>
          </div>
          <div className='service-item-line'>
            <div className='col-lg-4 wow fadeInRight' data-wow-delay='300ms'>
              <UsergroupAddOutlined />
              <div className='service-item'>
                <h4>CASTING & RECUITMENT</h4>
                <p>
                  Finding the best person for the role by quickly matching
                  directors’ needs to our portfolio of artists.
                </p>
              </div>
            </div>
            <div className='col-lg-4 wow fadeInUp' data-wow-delay='300ms'>
              <MoneyCollectOutlined />
              <div className='service-item'>
                <h4>CREATING OPPORTUNITIES</h4>
                <p>
                  Helping our creators earn more and enjoy their work by
                  searching for and connecting them to skill-building
                  opportunities.
                </p>
              </div>
            </div>
            <div className='col-lg-4 wow fadeInLeft' data-wow-delay='300ms'>
              <StockOutlined />
              <div className='service-item'>
                <h4>SOCIAL MEDIA MARKETING</h4>
                <p>
                  Promoting our creators among our established social media
                  channels. This is one of our ways to showcase our talents to
                  our clients, cutting down on time spent searching through new
                  influencers’ profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 关于我们 */}
      <section className='home-about-us'>
        <div className='container'>
          <div className='container-inner'>
            <div
              className='home-about-us-left wow fadeInLeft'
              data-wow-delay='100ms'
            >
              <div className='title'>About Us</div>
              <div className='title-desc'>We're creators too.</div>
              <div className='separator'></div>
              <p>
                Since starting our careers as live streamers in 2015, we’ve
                risen above and beyond our expectations, reaching a level of
                success we couldn’t have ever imagined. Now, we want to give
                back and help grow the future generation of content creators and
                streamers.
              </p>
              <p>
                We’ve been there, done that. We know how hard it is to grow an
                audience and reach goals that initially seem unreachable. That’s
                why we’re here to help you every step of the way.
              </p>
              <p>
                We also make sure you get paid for your content creation
                efforts. We respect your work, and our clients do too.
              </p>
            </div>
            <div
              className='home-about-us-right wow fadeInLeft'
              data-wow-delay='300ms'
            >
              <div>
                <div className='title opacity-0'>Core Value</div>
                <div className='title-desc bold'>Our Core Values</div>
                <div className='separator'></div>
                <div className='flex-wrap'>
                  <div className='core-value-left'>
                    <div className='core-value-item'>
                      <HeartOutlined />
                      <span>Authenticity</span>
                    </div>
                    <div className='core-value-item'>
                      <CrownOutlined />
                      <span>Exclusivity</span>
                    </div>
                    <div className='core-value-item'>
                      <SafetyOutlined />
                      <span>Quality</span>
                    </div>
                  </div>
                  <div className='core-value-right'>
                    <img
                      className='core-value-img'
                      src={coreValueImg}
                      alt='core value'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* description */}
      <section className='description'>
        <div className='container'>
          <p>
            We're always on the lookout for talented creators with the potential
            to break through the world of livestreaming. We recognize that
            livestreaming is currently in its infancy, but it already offers a
            great opportunity for anyone ready to embrace it, to connect with a
            new audience, and to receive financial compensation for their time
            and effort.
          </p>
        </div>
      </section>
      {/* work with */}
      <section className='work-with-container'>
        <div className='container'>
          <div className='work-with-top'>
            <div className='work-with-left'>
              <div className='title'>
                Who <span>we work with</span>
              </div>
              <p>
                We believe in a world where everyone receives equal access to
                opportunities.
              </p>
              <p>
                Our international agency is open to everyone. It does not matter
                where you come from, or what your qualifications are. What
                matters is how hard you are willing to work for your goals.
              </p>
              <p>
                We specialize in working with creative people from all over the
                world. Our flexible job opportunities have been embraced by
                everyone from professional creators to talented hobbyists who
                simply love to create content.
              </p>
              <p>
                <a className='apply-a' href='https://baidu.com' target='_blank'>
                  Interested? Apply directly on our website! ➔{' '}
                </a>
              </p>
              <p>
                Leave us a note with a little bit about yourself, and we'll get
                back to you.
              </p>
            </div>
            <div className='work-with-right'>
              <img
                className='img work-with-img wow fadeIn zoomIn'
                data-wow-delay='300ms'
                src={workWithImg1}
              />
              <img
                className='img work-with-img img-2 wow fadeIn zoomIn'
                data-wow-delay='100ms'
                src={workWithImg2}
              />
              <img
                className='img work-with-static-img wow fadeIn zoomIn'
                data-wow-delay='600ms'
                src={workWithImg3}
              />
            </div>
          </div>
          <div className='work-with-bottom'>
            <div
              className='work-with-bottom-item wow fadeInUp'
              data-wow-delay='200ms'
            >
              <div className='top-circle'>
                <InteractionOutlined />
              </div>
              <h6>Say Hello!</h6>
              <p>
                Fill out the application form on our website, and we'll get back
                to you.
              </p>
            </div>
            <div
              className='work-with-bottom-item wow fadeInUp'
              data-wow-delay='400ms'
            >
              <div className='top-circle'>
                <CommentOutlined />
              </div>
              <h6>Let's Chat</h6>
              <p>
                Let's discuss the opportunities available to you to make sure
                it’s a perfect fit.
              </p>
            </div>
            <div
              className='work-with-bottom-item wow fadeInUp'
              data-wow-delay='600ms'
            >
              <div className='top-circle'>
                <CheckCircleOutlined />
              </div>
              <h6>Welcome to AGEA Talents!</h6>
              <p>
                We’ll make sure you’re kept in the loop with our newest
                exclusive roles in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* team */}
      <Team />
    </div>
  )
}
export default useCreatorsAndBusniess
