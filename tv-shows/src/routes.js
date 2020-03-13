import MovieDetail from './components/MovieDetail/MovieDetail.vue'
import HomePage from './pages/HomePage.vue'

export default[
    {path : '/', component: HomePage},
    {path:'/detail/:id', component:MovieDetail},
]
