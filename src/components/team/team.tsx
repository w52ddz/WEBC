import './team.scss'
import team1 from '@/assets/images/team1.jpg'
import team2 from '@/assets/images/team2.jpg'
// @ts-ignore
import WOW from '@/util/wow'
import { useEffect } from 'react'

function useTeam() {
  useEffect(() => {
    const wow = new (WOW as any)({
      boxClass: 'wow-team',
      animateClass: 'animated',
      offset: -200,
      mobile: true,
      live: false,
    })
    wow.init()
  }, [])
  return (
    <div className='team-container'>
      <div className='container'>
        <div className='team-title'>
          <h5>OUR TEAM</h5>
          <p>
            We are continuously expanding our network and assisting more talent
            and partners worldwide.
          </p>
        </div>
        <div
          className='team-item-container wow-team fadeInUp'
          data-wow-delay='200ms'
        >
          <div className='team-item '>
            <img src={team1} />
            <div className='name'>THAO LE</div>
            <div className='position'>CEO</div>
            <p>
              "Different generations have different mindsets, if we understand
              each other, we become an unbeatable team."
            </p>
          </div>
          <div className='team-item'>
            <img src={team2} />
            <div className='name'>THAO LE</div>
            <div className='position'>CEO</div>
            <p>
              "Different generations have different mindsets, if we understand
              each other, we become an unbeatable team."
            </p>
          </div>
          <div className='team-item'>
            <img src={team1} />
            <div className='name'>THAO LE</div>
            <div className='position'>CEO</div>
            <p>
              "Different generations have different mindsets, if we understand
              each other, we become an unbeatable team."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default useTeam
