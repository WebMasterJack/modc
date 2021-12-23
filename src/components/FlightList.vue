<template>
            <div class="d-flex justify-content-between align-items-start">
                <h2 class="mb-4">
                    We found the following flights
                </h2>
                <a href="index.html" class="btn btn-sm btn-secondary test-4-bback">Back</a>
            </div>

            <div class="container">
                <h5 class="mt-4 mb-3" >
                <span class="test-4-fif1">{{flights_to[0].from.city}}</span>
                ->
                <span class="test-4-fit1">{{flights_to[0].to.city}}</span>
            </h5>
            <table class="table table-hover table-bordered" >
                <tr>
                    <th>Flight</th>
                    <th>Aircraft</th>
                    <th>Date and time of departure</th>
                    <th>Arrival time</th>
                    <th>Flight time</th>
                    <th>Cost</th>
                </tr>
                <tr v-for="flight in flights_to" :key="flight" v-on:click='updateSendData("flights_back", $event)'>
                    <td class="test-4-fn">{{flight.flight_code}}</td>
                    <td class="test-4-at">Sukhoi Superjet 100</td>
                    <td>
                        <span class="test-4-dd">{{flight.from.date}}</span>
                        at
                        <span class="test-4-dt">{{flight.from.time}}</span>
                    </td>
                    <td class="test-4-aatime">{{flight.to.time}}</td>
                    <td class="test-4-ft">
                       
                        <span class="test-4-fminutes">{{ getHourMinute(flight) }}</span>min
                    </td>
                    <td class="test-4-fp">{{flight.cost}}</td>
                </tr>
            </table>
            <table class="table table-hover table-bordered" >
                <tr>
                    <th>Flight</th>
                    <th>Aircraft</th>
                    <th>Date and time of departure</th>
                    <th>Arrival time</th>
                    <th>Flight time</th>
                    <th>Cost</th>
                </tr>
                <tr v-for="flight in flights_back" :key="flight" v-on:click='updateSendData("flights_to", $event)'>
                    <td class="test-4-fn">{{flight.flight_code}}</td>
                    <td class="test-4-at">Sukhoi Superjet 100</td>
                    <td>
                        <span class="test-4-dd">{{flight.from.date}}</span>
                        at
                        <span class="test-4-dt">{{flight.from.time}}</span>
                    </td>
                    <td class="test-4-aatime">{{flight.to.time}}</td>
                    <td class="test-4-ft">
                       
                        <span class="test-4-fminutes">{{ getHourMinute(flight) }}</span>min
                    </td>
                    <td class="test-4-fp">{{flight.cost}}</td>
                </tr>
            </table>
            <button @click="BookingRedir()">Book</button>
            <router-link :to="{ name: 'Booking' }">Common</router-link>
            </div>
</template>
<script>
export default {
    data(){
        
        return{
            flights_back:null,
            flights_to:null,
            cost:null,
            next_data:{
                 flights_back:null,
                flights_to:null,
            }
        }
    },
       created() {
    // Simple GET request using fetch
    let {from,to,date__from,date__to,pgr}=this;
    
    console.log(`From:${from}\n To:${to}\n Date From:${date__from}\n Date Return:${date__to}\n Passengers:${pgr}`);
    let url = `http://modc/fnc-master/public/api/flight?from=${from}&to=${to}&date1=${date__from}&date2=${date__to}&passengers=${pgr} `;
    
   
    
    fetch(url)
      .then(response => response.json())
      .then((commits) => {
          console.log(commits);
          console.log('date');
          
          this.flights_back = commits.data.flights_back;
          this.flights_to = commits.data.flights_to;
      });
  
  },
  props:{
      from:String,
       to:String,
       date__from:String,
       date__to:String,
       pgr:String, 
  },
  methods:{
       updateSendData(flight_type,e){
        this.next_data[flight_type]=e.currentTarget.innerHTML;
        e.currentTarget.classList.add("active");
        this.cost = parseInt(document.querySelectorAll(".active td:last-child")[0].innerHTML)+parseInt(document.querySelectorAll(".active td:last-child")[1].innerHTML);
    },
      getHourMinute(flight){
        let [dateF,dateT]=[this.formatDate(flight.from),this.formatDate(flight.to)];
        return this.getDivDate(dateF,dateT);
    },
    getDivDate(dateF,dateT){
        let DateMin = ((dateT - dateF)/(1000*60))%60;
        let DateHours = parseInt(((dateT - dateF)/(1000*60))/60);
        let NewDate = `${DateHours}:${DateMin}`;    
        
        return NewDate;
    },
    formatDate(el){
        let [time,date]=[el.time,el.date];
        return new Date(date+'T'+time);
    },
    BookingRedir(){
console.log(this.$router);
let ndfb = this.next_data.flights_back;
let ndft = this.next_data.flights_to;
let {from,to,date__from,date__to,pgr,cost}=this;
        this.$router.push({name:'Booking',params:{from,to,date__from,date__to,pgr,ndfb,ndft,cost}}); 
    }
  }
}
</script>