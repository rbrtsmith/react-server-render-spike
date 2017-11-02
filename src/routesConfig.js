import Home from './modules/Home'
import Article from './modules/Article'

const config = [
  {
    key: '0',
    path: '/',
    component: Home,
    exact: true
  }, {
    key: '1',
    path: '/article',
    component: Article,
    exact: true
  }
]

export default config
