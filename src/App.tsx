import GetRoutes from '@/routes/index'
import AutoRouter from '@/components/autoRouter'

function App() {
  return (
    <AutoRouter>
      <GetRoutes></GetRoutes>
    </AutoRouter>
  )
}

export default App
