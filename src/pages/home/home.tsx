// import { useNavigate } from 'react-router-dom'
// import store from '@/redux'
import { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import carousel1 from '@/assets/images/carousel1.jpg'
import carousel2 from '@/assets/images/carousel2.png'
import carousel3 from '@/assets/images/carousel3.png'
import video from '@/assets/images/video.mp4'
import './home.scss'
import * as React from 'react'
// import { judgeMobile } from '@/util/util'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import CreatorsAndBusniess from './components/creatorsAndBusniess'
// @ts-ignore
import WOW from '@/util/wow'

function Layout() {
  // const navigate = useNavigate()
  const videoRef = React.useRef<HTMLVideoElement>(null)
  // const count = useSelector((state: any) => state.countReducer.count)
  const [videoStyles, setVideoStyles] = useState<React.CSSProperties>({})
  const [carouselIndex, setCarouselIndex] = useState(0)
  // const [name, setName] = useState<string>(store.getState().nameReducer.name) //获取store.name作为默认值
  // store.subscribe(() => {
  //   const store_data = store.getState()
  //   setName(store_data.nameReducer.name) //更新store.name值
  // })

  // const goToNextPage = () => {
  //   navigate('/layout')
  // }

  // carousel data
  const carouselDataList = [
    { type: 'img', src: carousel1 },
    { type: 'img', src: carousel2 },
    { type: 'img', src: carousel3 },
    { type: 'video', src: video },
  ]

  const handleVideoStyleWhenResize = () => {
    const { innerWidth, innerHeight } = window
    if (innerWidth / innerHeight >= 1.9) {
      setVideoStyles({
        width: innerWidth + 'px',
        height: 'auto',
      })
    } else {
      setVideoStyles({
        width: 'auto',
        height: innerHeight + 'px',
      })
    }
  }

  useEffect(() => {
    // save video element and pause
    videoEl = videoRef.current
    videoEl!.currentTime = 0
    videoEl!.pause()
    // set video styles by window height and width
    handleVideoStyleWhenResize()
    window.addEventListener('resize', handleVideoStyleWhenResize, false)
    return () => {
      window.removeEventListener('resize', handleVideoStyleWhenResize, false)
    }
  }, [])

  const carouselTextList = [
    {
      h2: 'INTERNATIONAL TALENT MANAGEMENT',
      h3: 'AGEA TALENTS',
      subText: 'Bridging creators and brands across the world.',
    },
    {
      h2: 'CREATING OPPORTUNITIES & BUILDING BRANDS',
      h3: 'STEP UP YOUR GAME',
      subText: 'Providing top-notch services for both talent and partners.',
    },
    {
      h2: 'ADVANCING CARRERS IN CONTENT CREATION',
      h3: 'MAKE CONNECTIONS',
      subText:
        "Don't worry, we'll pave your way and guide you through every step.",
    },
    {
      h2: 'STOP WASTING YOUR POTENTIAL',
      h3: 'START TODAY',
      subText:
        "Your personality is your greatest asset. It's the thing that allows you to shine. Are you using it to your advantage?",
    },
  ]

  const generateCarouselList = (): JSX.Element[] => {
    return carouselDataList.map((item, index) => {
      const itemStyle: React.CSSProperties = {}
      let innerEl = <></>
      // background image
      if (item.type === 'img') {
        itemStyle.backgroundImage = `url(${item.src})`
      } else {
        innerEl = (
          <video
            muted
            loop
            autoPlay
            playsInline
            ref={videoRef}
            className='carousel-video'
            src={video}
            style={videoStyles}
          ></video>
        )
      }
      return (
        <div key={index} className='home-carousel-item'>
          <div className='carousel-item-inner' style={itemStyle}>
            {innerEl}
            {/* <div className='video-cover'></div> */}
          </div>
          <div className='carousel-mask'>
            {carouselIndex === index && (
              <div
                className={`carousel-mask-inner container ${
                  carouselIndex === index ? 'opacity-1' : ''
                }`}
              >
                <div className='center-container'>
                  <h2 className='wow-c-mask fadeInDown' data-wow-delay='100ms'>
                    {carouselTextList[index].h2}
                  </h2>
                  <h3
                    className='wow-c-mask fadeIn zoomIn'
                    data-wow-delay='200ms'
                  >
                    {carouselTextList[index].h3}
                  </h3>
                  <div className='sub-title'>
                    <p>
                      {createAnimationSpan(carouselTextList[index].subText)}
                    </p>
                  </div>
                  {index === 0 && (
                    <a
                      href='https://baidu.com'
                      target='_blank'
                      className='custom-btn link wow-c-mask fadeInUp'
                      data-wow-delay='1.6ms'
                    >
                      APPLY TO JOIN ➔
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )
    })
  }

  // generate animated paragrah
  const createAnimationSpan = (spanStr: string): JSX.Element[] => {
    const list = spanStr.split('')
    let delay = 325
    return list.map((item: string, index: number) => {
      const spanEl = (
        <span
          key={index}
          className='wow-c-mask fadeIn'
          data-wow-delay={`${delay}ms`}
        >
          {item}
        </span>
      )
      delay += 40
      return spanEl
    })
  }

  let videoEl: HTMLVideoElement | null
  // carousel callback
  const carouselChanged = (index: number) => {
    const item = carouselDataList[index]
    if (item.type === 'video') {
      if (!videoEl) {
        videoEl = videoRef.current
      }
      videoEl?.play()
    } else {
      if (videoEl) {
        videoEl.currentTime = 0
        videoEl.pause()
      }
    }
  }
  const beforeCarouselChange = (_: number, nextIndex: number) => {
    setCarouselIndex(nextIndex)
    setTimeout(() => {
      const wow = new (WOW as any)({
        boxClass: 'wow-c-mask',
        animateClass: 'animated',
        offset: -200,
        mobile: true,
        live: false,
      })
      wow.init()
    }, 0)
  }

  return (
    <div className='home-page'>
      <Header fixed />
      <Carousel
        autoplaySpeed={7000}
        effect='fade'
        speed={1000}
        arrows
        autoplay
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
        className='home-carousel'
        afterChange={carouselChanged}
        beforeChange={beforeCarouselChange}
      >
        {generateCarouselList()}
      </Carousel>
      <CreatorsAndBusniess />
      <Footer />
    </div>
  )
}

export default Layout
