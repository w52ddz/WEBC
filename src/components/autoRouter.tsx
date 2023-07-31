import { useLocation, Navigate } from 'react-router-dom'
import { matchRoute } from '@/util/util'
import { router_item } from '@/routes/index'

function AutoRouter(props: { children: JSX.Element }) {
  const { pathname } = useLocation()
  const token = localStorage.getItem('ACCESS_TOKEN')
  //1、获取当前路径对应的路由配置
  const route = matchRoute(pathname, router_item)
  //2、如果noAuth为true，则直接跳过校验
  // if (route && route.meta && route.meta.noAuth) {
  //     return props.children;
  // }

  // 2、如果有没有权限校验，
  if (route && !route.meta?.auth) {
    return props.children
  }

  if (route && route.meta?.auth && token) {
    // 1、存在token，则进入主页
    return props.children
  } else {
    // 2、如果不存在token，则进入登录页
    return <Navigate to='/login' />
  }
}

export default AutoRouter
