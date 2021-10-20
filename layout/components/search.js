export default {
    name: 'Search',
    async data() {
        
      console.log(321);
      let {ffrom,fto,datefrom,datereturn,pgr}=this;
      console.log(`From:${ffrom}\n To:${fto}\n Date From:${datefrom}\n Date Return:${datereturn}\n Passengers:${pgr}`);
      let url = `http://modc/fnc-master/public/api/flight?from=${ffrom}&to=${fto}&date1=${datefrom}&date2=${datereturn}&passengers=${pgr} `;
      
let response = await fetch(url);

let commits = await response.json(); // читаем ответ в формате JSON
//GET response
// http://modc/fnc-master/public/api/flight?from=SKX&to=SVO&date1=2021-02-10&date2=2021-02-11&passengers=1
let data =  commits.data;
let {flights_back,flights_to}=data;

let firstPostFromCity=flights_back[0].from.city;
console.log(firstPostFromCity);

    return {
      count: await this.getComputedFlights(),
      
      firstFromCity: await this.firstPostFromCity,
    };
      //vue-async-data
   
    },
   
    methods:{
        
      async getComputedFlights() {
        let {ffrom,fto,datefrom,datereturn,pgr}=this;
        console.log(`From:${ffrom}\n To:${fto}\n Date From:${datefrom}\n Date Return:${datereturn}\n Passengers:${pgr}`);
        let url = `http://modc/fnc-master/public/api/flight?from=${ffrom}&to=${fto}&date1=${datefrom}&date2=${datereturn}&passengers=${pgr} `;

        
        let response = await fetch(url);
        let commits = await response.json(); // читаем ответ в формате JSON
        let data =  commits.data;
        
        // let firstPostToCity
        // let firstPostFromFlightCode
        // let firstPostToFlightCode
        // let firstPostFromTime
        // let firstPostToTime
        // let firstPostFromDate
        // let firstPostToDate
        let {flights_back,flights_to}=data;
        console.log(flights_back,flights_to);
        
        return {flights_back,flights_to};
      }
  },
   props:['name','ffrom','fto','datefrom','datereturn','pgr'],

    template: `<div class="container">
    <p> {{ffrom}} {{fto}} {{datefrom}} {{datereturn}} {{pgr}} {{testa}}</p>
    {{count}} {{firstFromCity}}
    <section class="mt-5">
        <div class="d-flex justify-content-between align-items-start">
            <h2 class="mb-4"> We found the following flights </h2> <a href="./"
                class="btn btn-sm btn-secondary test-4-bback">Back</a>
        </div>
        <h5 class="mt-4 mb-3"> <span class="test-4-fif1">Saransk</span> -> <span class="test-4-fit1">Moscow</span>
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
            <tr class="selected">
                <td class="test-4-fn">FC 2144</td>
                <td class="test-4-at">Sukhoi Superjet 100</td>
                <td> <span class="test-4-dd">10-02-2021</span> at <span class="test-4-dt">08:00</span> </td>
                <td class="test-4-aatime">09:30</td>
                <td class="test-4-ft"> <span class="test-4-fhour">1</span>h <span
                        class="test-4-fminutes">30</span>min </td>
                <td class="test-4-fp">8000</td>
            </tr>
            <tr>
                <td class="test-4-fn">FC 2162</td>
                <td class="test-4-at">Sukhoi Superjet 100</td>
                <td> <span class="test-4-dd">10-02-2021</span> at <span class="test-4-dt">12:00</span> </td>
                <td class="test-4-aatime">13:30</td>
                <td class="test-4-ft"> <span class="test-4-fhour">1</span>h <span
                        class="test-4-fminutes">30</span>min </td>
                <td class="test-4-fp">8000</td>
            </tr>
        </table>
        <h5 class="mt-4 mb-3"> <span class="test-4-fif2">Moscow</span> -> <span class="test-4-fit2">Saransk</span>
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
            <tr>
                <td class="test-4-fn">FC 2143</td>
                <td class="test-4-at">Bombardier CRJ200</td>
                <td> <span class="test-4-dd">11-02-2021</span> at <span class="test-4-dt">06:00</span> </td>
                <td class="test-4-aatime">07:30</td>
                <td class="test-4-ft"> <span class="test-4-fhour">1</span>h <span
                        class="test-4-fminutes">30</span>min </td>
                <td class="test-4-fp">9000</td>
            </tr>
            <tr class="selected">
                <td class="test-4-fn">FC 2161</td>
                <td class="test-4-aatime">Bombardier CRJ200</td>
                <td> <span class="test-4-dd">11-02-2021</span> at <span class="test-4-dt">10:00</span> </td>
                <td class="test-4-at">11:30</td>
                <td class="test-4-ft"> <span class="test-4-fhour">1</span>h <span
                        class="test-4-fminutes">30</span>min </td>
                <td class="test-4-fp">9000</td>
            </tr>
        </table> <a href="booking.html" class="btn btn-primary test-4-bgobook mt-4">Go to booking</a>
    </section>
</div>`
}
//get 
// out json console
