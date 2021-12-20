<template>
  <div class="container">
          <section class="mt-5">
        
        <div class="d-flex justify-content-between align-items-start">
            <h2 class="mb-4"> We found the following flights </h2> <a href="./"
                class="btn btn-sm btn-secondary test-4-bback">Back</a>
        </div>

        <h5 class="mt-4 mb-3"> <span class="test-4-fif2">{{flights_to[0].from.city}}</span> -> <span class="test-4-fit2">{{flights_to[0].to.city}}</span>
        </h5>
        <table class="table table-hover table-bordered">
            <tr>
                <th>Flight</th>
                <th>Aircraft</th>
                <th>Date and time of departure</th>
                <th>Arrival time</th>
                <th>Flight time</th>
                <th>Cost</th>
            </tr>
            <tr v-for="flight in flights_to" :key="flight" style="backgroung:gray" v-on:click='updateSendData("flights_back", $event)'>
                <td class="test-4-fn">{{flight.flight_code}}</td>
                <td class="test-4-at">Sukhoi Superjet 100</td>
                <td> <span class="test-4-dd">{{flight.from.date}}</span> at <span class="test-4-dt">{{flight.from.time}}</span> </td>
                <td class="test-4-aatime">{{flight.to.time}}</td>
                <td class="test-4-ft"> <span class="test-4-fhour"></span> <span
                        class="test-4-fminutes">
                        {{ getHourMinute(flight) }}
                        </span>min </td>
                <td class="test-4-fp">{{flight.cost}}</td>
            </tr>
        </table> 
        <h5 class="mt-4 mb-3"> <span class="test-4-fif1">{{flights_back[0].from.city}}</span> -> <span class="test-4-fit1">{{flights_back[0].to.city}}</span>
        </h5>
        <table class="table table-hover table-bordered">
            <tr>
                <th>Flight</th>
                <th>Aircraft</th>
                <th>Date and time of departure</th>
                <th>Arrival time</th>
                <th>Flight time</th>
                <th>Cost</th>
            </tr>
            <tr v-for="flight in flights_back" :key="flight"  v-on:click='updateSendData("flights_to", $event)'>
                <td class="test-4-fn">{{flight.flight_code}}</td>
                <td class="test-4-at">Sukhoi Superjet 100</td>
                <td> <span class="test-4-dd">{{flight.from.date}}</span> at <span class="test-4-dt">{{flight.from.time}}</span> </td>
                <td class="test-4-aatime">{{flight.to.time}}</td>
                <td class="test-4-ft"> <span class="test-4-fhour">{{ getHourMinute(flight) }}</span>min </td>
                <td class="test-4-fp">{{flight.cost}}</td>
            </tr>



        </table>
        
        <button @click="BookingRedir()">dsa</button>
        
        
    </section>
   

</div>
</template>
<script>
export default {
  name:'Search',
  data(){
    console.log(123);
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
    let {ffrom,fto,datefrom,datereturn,pgr}=this;
    console.log(`eto ${ffrom}`);
    console.log(`From:${ffrom}\n To:${fto}\n Date From:${datefrom}\n Date Return:${datereturn}\n Passengers:${pgr}`);
    let url = `http://modc/fnc-master/public/api/flight?from=${ffrom}&to=${fto}&date1=${datefrom}&date2=${datereturn}&passengers=${pgr} `;

    
   
    
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
   ffrom:String,
   fto:String,
   datefrom:String,
   datereturn:String,
   pgr:Number,
  //  next_data:String
   },
   methods: {
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
let {ffrom,fto,datefrom,datereturn,pgr,cost}=this;
        this.$router.replace({name:'Booking',params:{ffrom,fto,datefrom,datereturn,pgr,ndfb,ndft,cost}});
    }

  },

 
}
</script>
