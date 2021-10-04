new VueRouter({
    mode:'history',
    routes:[
        {
        path:'/',
        component:'',
        name:'search'
        },

    ],
})


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
Vue.createApp(Airport).mount('#air');
