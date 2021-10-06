




const search = {
    template: '<div class="container">        <section class="mt-5">            <div class="d-flex justify-content-between align-items-start">                <h2 class="mb-4">                    We found the following flights                </h2>                <a href="index.html" class="btn btn-sm btn-secondary test-4-bback">Back</a>            </div>            <h5 class="mt-4 mb-3">                <span class="test-4-fif1">Saransk</span>                ->                <span class="test-4-fit1">Moscow</span>            </h5>            <table class="table table-hover table-bordered">                <tr>                    <th>Flight</th>                    <th>Aircraft</th>                    <th>Date and time of departure</th>                    <th>Arrival time</th>                    <th>Flight time</th>                    <th>Cost</th>                </tr>                <tr class="selected">                    <td class="test-4-fn">FC 2144</td>                    <td class="test-4-at">Sukhoi Superjet 100</td>                    <td>                        <span class="test-4-dd">10-02-2021</span>                        at                        <span class="test-4-dt">08:00</span>                    </td>                    <td class="test-4-aatime">09:30</td>                    <td class="test-4-ft">                        <span class="test-4-fhour">1</span>h                        <span class="test-4-fminutes">30</span>min                    </td>                    <td class="test-4-fp">8000</td>                </tr>                <tr>                    <td class="test-4-fn">FC 2162</td>                    <td class="test-4-at">Sukhoi Superjet 100</td>                    <td>                        <span class="test-4-dd">10-02-2021</span>                        at                        <span class="test-4-dt">12:00</span>                    </td>                    <td class="test-4-aatime">13:30</td>                    <td class="test-4-ft">                        <span class="test-4-fhour">1</span>h                        <span class="test-4-fminutes">30</span>min                    </td>                    <td class="test-4-fp">8000</td>                </tr>            </table>            <h5 class="mt-4 mb-3">                <span class="test-4-fif2">Moscow</span>                ->                <span class="test-4-fit2">Saransk</span>            </h5>            <table class="table table-hover table-bordered">                <tr>                    <th>Flight</th>                    <th>Aircraft</th>                    <th>Date and time of departure</th>                    <th>Arrival time</th>                    <th>Flight time</th>                    <th>Cost</th>                </tr>                <tr>                    <td class="test-4-fn">FC 2143</td>                    <td class="test-4-at">Bombardier CRJ200</td>                    <td>                        <span class="test-4-dd">11-02-2021</span>                        at                        <span class="test-4-dt">06:00</span>                    </td>                    <td class="test-4-aatime">07:30</td>                    <td class="test-4-ft">                        <span class="test-4-fhour">1</span>h                        <span class="test-4-fminutes">30</span>min                    </td>                    <td class="test-4-fp">9000</td>                </tr>                <tr class="selected">                    <td class="test-4-fn">FC 2161</td>                    <td class="test-4-aatime">Bombardier CRJ200</td>                    <td>                        <span class="test-4-dd">11-02-2021</span>                        at                        <span class="test-4-dt">10:00</span>                    </td>                    <td class="test-4-at">11:30</td>                    <td class="test-4-ft">                        <span class="test-4-fhour">1</span>h                        <span class="test-4-fminutes">30</span>min                    </td>                    <td class="test-4-fp">9000</td>                </tr>            </table>            <a href="booking.html" class="btn btn-primary test-4-bgobook mt-4">Go to booking</a>        </section>    </div>'
    
  }
  


const Airport = {
    data (){
        
        
        return {
            
                valueFrom:'Kazan',
                valueTo:'Sheremetyevo',
            
                "items": [
                    {
                        "name": "Kazan",
                        "iata": "KZN"
                    },
                    {
                        "name": "Sheremetyevo",
                        "iata": "SVO"
                    },
                    {
                        "name": "Pulkovo",
                        "iata": "LED"
                    },
                    {
                        "name": "Sochi",
                        "iata": "AER"
                    },
                    {
                        "name": "Saransk",
                        "iata": "SKX"
                    }
                ]
            
        }
        
        },
      
};



// const ChangeFrom = {
//     data() {
//       return {
//         "flights_to": [
//             {
//                 "flight_id": 2,
//                 "flight_code": "FP1200",
//                 "from": {
//                     "city": "Saransk",
//                     "airport": "Saransk",
//                     "iata": "SKX",
//                     "date": "2021-02-10",
//                     "time": "12:00"
//                 },
//                 "to": {
//                     "city": "Moscow",
//                     "airport": "Sheremetyevo",
//                     "iata": "SVO",
//                     "date": "2021-02-10",
//                     "time": "13:35"
//                 },
//                 "cost": 9500,
//                 "availability": 156
//             },
//             {
//                 "flight_id": 14,
//                 "flight_code": "FP 1201",
//                 "from": {
//                     "city": "Saransk",
//                     "airport": "Saransk",
//                     "iata": "SKX",
//                     "date": "2021-02-10",
//                     "time": "08:35"
//                 },
//                 "to": {
//                     "city": "Moscow",
//                     "airport": "Sheremetyevo",
//                     "iata": "SVO",
//                     "date": "2021-02-10",
//                     "time": "10:05"
//                 },
//                 "cost": 10500,
//                 "availability": 156
//             }
//         ],
        
//       }
//     }
//   };
//   const ChangeTo = {
//       data(){
//           return {
//             "flights_back": [
//                 {
//                     "flight_id": 1,
//                     "flight_code": "FP 2100",
//                     "from": {
//                         "city": "Moscow",
//                         "airport": "Sheremetyevo",
//                         "iata": "SVO",
//                         "date": "2020-10-10",
//                         "time": "08:35"
//                     },
//                     "to": {
//                         "city": "Saransk",
//                         "airport": "Saransk",
//                         "iata": "SKX",
//                         "date": "2020-10-10",
//                         "time": "10:05"
//                     },
//                     "cost": 10500,
//                     "availability": 156
//                 },
//                 {
//                     "flight_id": 13,
//                     "flight_code": "FP 2101",
//                     "from": {
//                         "city": "Moscow",
//                         "airport": "Sheremetyevo",
//                         "iata": "SVO",
//                         "date": "2020-10-10",
//                         "time": "12:00"
//                     },
//                     "to": {
//                         "city": "Saransk",
//                         "airport": "Saransk",
//                         "iata": "SKX",
//                         "date": "2020-10-10",
//                         "time": "13:35"
//                     },
//                     "cost": 12500,
//                     "availability": 156
//                 }
//             ],
//           }
//       }
//   };

//   Vue.createApp(Change).mount('#changeFrom');
//   Vue.createApp(Change).mount('#changeTo');
// Vue.createApp(search).mount('.search');



// Vue.createApp(search).mount('#search');
const NotFoundComponent = { template: '<p>Страница не найдена</p>' }
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
    { path: '/', component: Home },
    { path: '/search', component: search }
  ]
  


let app=Vue.createApp({});
const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  app.use(router); 
app.mount('#app')
// Vue.createApp(Airport).mount('#air');

  // 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
  // Вы можете передавать и дополнительные опции, но пока не будем усложнять.

  