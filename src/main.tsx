import * as ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
// import 'antd/dist/reset.css';
import './index.css'
import { Provider } from 'react-redux'
import store from '@/redux/index'
import { baseDir } from '@/util/util'
import 'animate.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router basename={baseDir}>
      <App />
    </Router>
  </Provider>
  // </React.StrictMode>,
)
