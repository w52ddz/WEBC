// import { useNavigate } from 'react-router-dom'
// import store from '@/redux'
// import { useState } from 'react'
// import { useSelector } from 'react-redux'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import carousel1 from '@/assets/images/carousel1.jpg'
import video from '@/assets/images/video.mp4'
import './index.scss'
import * as React from 'react'

function Layout() {
  // const navigate = useNavigate()
  const videoRef = React.useRef<HTMLVideoElement>(null)
  // const count = useSelector((state: any) => state.countReducer.count)

  // const [name, setName] = useState<string>(store.getState().nameReducer.name) //获取store.name作为默认值
  // store.subscribe(() => {
  //   const store_data = store.getState()
  //   setName(store_data.nameReducer.name) //更新store.name值
  // })

  // const goToNextPage = () => {
  //   navigate('/layout')
  // }

  // 轮播图数据
  const carouselDataList = [
    { type: 'img', src: carousel1 },
    { type: 'video', src: video },
  ]

  const generateCarouselList = (): JSX.Element[] => {
    return carouselDataList.map((item, index) => {
      const styles: React.CSSProperties = {}
      let innerEl = <></>
      // 背景图
      if (item.type === 'img') {
        styles.backgroundImage = `url(${item.src})`
      } else {
        innerEl = (
          <video
            muted
            loop
            autoPlay
            ref={videoRef}
            className='carousel-video'
            src={video}
          ></video>
        )
      }
      return (
        <div key={index} className='home-carousel-item'>
          <div className='carousel-item-inner' style={styles}>
            {innerEl}
          </div>
        </div>
      )
    })
  }

  let videoEl: HTMLVideoElement | null
  // 轮播图切换回调
  const carouselChanged = (index: number) => {
    console.log(index)
    const item = carouselDataList[index]
    if (item.type === 'video') {
      console.log('切换到了video：')
      if (!videoEl) {
        videoEl = videoRef.current
      }
      videoEl?.play()
    } else {
      if (videoEl) {
        videoEl.currentTime = 0
        videoEl.pause()
      }
      console.log('切换到了图片：')
    }
  }

  return (
    <section className='home-page'>
      <Carousel
        autoplay
        autoplaySpeed={5000}
        effect='fade'
        speed={800}
        arrows
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
        className='home-carousel'
        afterChange={carouselChanged}
      >
        {generateCarouselList()}
      </Carousel>
    </section>
  )
}

export default Layout
