import './index.scss'
import { Outlet } from 'react-router-dom'
import store from '@/redux'
import { useState } from 'react'
import { Button } from 'antd'
import { useSelector } from 'react-redux'

function Layout() {
  const count = useSelector((state: any) => state.countReducer.count)

  const [name, setName] = useState<string>(store.getState().nameReducer.name) //获取store.name作为默认值
  store.subscribe(() => {
    const store_data = store.getState()
    setName(store_data.nameReducer.name) //更新store.name值
  })
  return (
    <section id='container'>
      <section>
        <header>
          header - {name} -{count}- <Button>你好</Button>{' '}
        </header>{' '}
        {/* store.name显示到页面 */}
        <main>
          <Outlet></Outlet>
        </main>
      </section>
    </section>
  )
}

export default Layout
