import Home from './modules/Home'
import Article from './modules/Article'
import Books from './modules/Books'

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
  }, {
    key: '2',
    path: '/books',
    component: Books,
    exact: true
  }
]

export default config
