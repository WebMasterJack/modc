<template>
    <section class="mt-5">
            <h2 class="mb-4">Flight search</h2>

            <form  v-on:submit.prevent="getFlight(from,to,date__from,date__to,pgr)">
                <div class="row">
                    <div class="col-12 col-sm-6 col-lg-4 col-xl-3 pr-lg-0" >
                        
                        <select class="form-control test-0-fd w-100" v-model="from" >
                            <option v-for="flight in items" :key="flight" :value="flight.iata"> {{flight.name}}</option>
                        </select>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 mt-3 col-xl-3 mt-sm-0 pr-lg-0">
                       <select class="form-control test-0-fd w-100" v-model="to" >
                            <option v-for="flight in items" :key="flight" :value="flight.iata"> {{flight.name}}</option>
                        </select>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-lg-0">
                        <input type="text" class="form-control test-0-fdt"  v-model="date__from">
                        2020-02-02
                    </div>
                    <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-xl-0">
                        <input type="text" class="form-control test-0-fat" v-model="date__to">
                        2020-02-03
                    </div>
                    <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-1 mt-lg-0 pr-xl-0" >
                        <select class="form-control test-0-fnp" v-model="pgr">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                        <div class="invalid-feedback">Error message</div>
                    </div>
                    <div class="col-12 col-xl-1 px-2 mt-3 mt-xl-0">
                        <button class="btn btn-success form-control test-0-fbs">Search</button>
                        
                    </div>
                </div>
            </form>
        </section>
</template>
<script>

export default {
   name:'FlightSearch',
   data(){
       
    return{
       from:'',
       to:'',
       date__from:'',
       date__to:'',
       pgr:'',
       items: [
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
        ],
        
    }
    
   },
   props:{
       
   },
   methods: {
       getFlight(from,to,date__from,date__to,pgr) {
           
            this.$router.replace({name:'Search', params:{from,to,date__from,date__to,pgr}});
           
        },
   },
}
</script>
