import { useRoutes, Navigate } from 'react-router-dom'
import { lazy } from 'react'
//页面
import Home from '@/pages/home'
import Error404 from '@/pages/error/404'

//公共
import lazyLoad from './lazyLoad'

// 添加一个固定的延迟时间，以便你可以看到加载状态
function delayForDemo(promise: Promise<any>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 200)
  }).then(() => promise)
}

export const router_item: Array<object> = [
  {
    path: '/',
    key: '/',
    label: '首页',
    hidden: true,
    element: <Home />,
  },
  {
    path: '/layout',
    key: 'layout',
    label: '控制台',
    element: lazyLoad(lazy(() => delayForDemo(import('@/pages/user')))),
  },
  {
    path: '/404',
    hidden: true,
    element: <Error404 />,
  },
  {
    path: '*',
    hidden: true,
    element: <Navigate to='/404' />,
  },
]

function GetRoutes() {
  return useRoutes(router_item)
}

export default GetRoutes
