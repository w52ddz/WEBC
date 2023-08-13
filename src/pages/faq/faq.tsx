import Header from '@/components/header/header'
import './faq.scss'
import Footer from '@/components/footer/footer'
import { useState } from 'react'
import faqListSource from './faq-list'

function useFaq() {
  const [faqList, setFaqList] = useState(faqListSource)

  // toggle item expand
  function toggleActive(
    faq: { title: string; content: string; active: boolean },
    index: number
  ): void {
    faq.active = !faq.active
    faqList.splice(index, 1, { ...faq })
    setFaqList([...faqList])
  }

  return (
    <div className='faq-page'>
      <Header />
      <div className='faq-title'>FAQ</div>
      <div className='container'>
        <div className='sub-title-container'>
          <div className='title'>
            Frequently Asked <span>Questions</span>
          </div>
          <div className='sub-title'>
            If you still have questions, feel free to get in touch with us.
            We're always happy to assist you.
          </div>
        </div>
        <hr className='solid-hr' />
        <div className='q-container'>
          {faqList.map((faq, index) => (
            <div key={index} className={`q-item ${faq.active ? 'active' : ''}`}>
              <div
                className='q-item-title'
                onClick={() => toggleActive(faq, index)}
              >
                {faq.title}
              </div>
              <div className='q-item-content-container'>
                <div className='q-item-content'>
                  <div>{faq.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default useFaq
