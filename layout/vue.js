import Search from './components/search.js';
import Home from './components/home.js';






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

  