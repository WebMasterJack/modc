import Search from './components/search.js';
import Home from './components/home.js';
import Booking from './components/booking.js';
import Login from './components/login.js';
import Profile from './components/profile.js';
import Register from './components/register.js';







const NotFoundComponent = { template: '<p>Страница не найдена</p>' }
const routes = [
  { path: '/', 
  component: Home ,
},
  { path: '/search', 
    component: Search ,
    name: 'Search',
    props:true
},
{ path: '/booking', 
    component: Booking ,
    name: 'Booking',
    props:true
},
{
  path: '/login', 
    component: Login ,
    name: 'Login',
    props:true
},
{ path: '/profile', 
    component: Profile ,
    name: 'Profile',
    props:true
},
{ path: '/register', 
    component: Register ,
    name: 'Register',
    props:true
},

]
  


let app=Vue.createApp({});
const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHistory('/layout/'),
    routes, // short for `routes: routes`
  })
  app.use(router); 
app.mount('#app')


  // 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
  // Вы можете передавать и дополнительные опции, но пока не будем усложнять.

  