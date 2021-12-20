<template>
  <Header/>
<div class="container">
    <section class="mt-5">
        <h2 class="mb-4">Flight search</h2>
        <form  action="./search" v-on:submit.prevent="handleSubmit(ffrom,fto,datefrom,datereturn,pgr)">
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3 pr-lg-0"> 
                    <select class="form-control test-0-fd w-100" v-model="ffrom">
                        
                        <!-- <option v-for="flight in items" :value="flight.iata">{{flight.name}}</option> -->
                        <option v-for="flight in items" :key="flight" :value="flight.iata">{{flight.name}}</option>
                    </select> </div>
                <div class="col-12 col-sm-6 col-lg-4 mt-3 col-xl-3 mt-sm-0 pr-lg-0"> <select
                        class="form-control test-0-fd w-100" v-model="fto" >
                        
                        <option v-for="flight in items" :key="flight" :value="flight.iata">{{flight.name}}</option>
                    </select> </div>
                <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-lg-0"> <input type="text"
                        class="form-control test-0-fdt" placeholder="Departing" v-model="datefrom">2020-02-02
                    <div class="invalid-feedback">Error message</div>
                </div>
                <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-xl-0"> <input type="text"
                        class="form-control test-0-fat" placeholder="Returning" v-model="datereturn">2020-02-03
                    <div class="invalid-feedback">Error message</div>
                </div>
                <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-1 mt-lg-0 pr-xl-0"> <select
                        class="form-control test-0-fnp" v-model="pgr">
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
    <section class="mt-5">
        <h2 class="mb-4">Promotions</h2>
        <div class="row">
          <Promo promo__title='Promotion 1' promo__text='Promotion text'/>
          <Promo promo__title='Promotion 2' promo__text='Promotion text'/>
          <Promo promo__title='Promotion 3' promo__text='Promotion text'/>
          <Promo promo__title='Promotion 4' promo__text='Promotion text'/>

        </div>
    </section>
    <section class="mt-5">
        <h2 class="mb-4">Subscribe</h2>
        <form action="#">
            <div class="row">
                <div class="col-12 col-md-6"> <input type="email" class="form-control test-0-sie"
                        placeholder="example@domain.com"> </div>
                <div class="col-12 col-md-6"> <button class="btn btn-success w-100 test-0-sbs">Subscribe</button> </div>
            </div>
        </form>
    </section>
</div>
<footer class="mt-5">
    <div class="container">
        <div class="row">
            <div class="col-3"> <span class="test-0-phone">8 (800) 100-10-10</span> </div>
            <div class="col-7 offset-2">
                <div class="d-flex justify-content-between"><button @click="LogIn()">Log In</button>
                       </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Promo from '@/components/Promo.vue';

export default {
  name: 'HelloWorld',
  components:{
    Promo,
    Header
  },
  data(){
    return{
         ffrom: '',
        fto: '',
        datefrom: '',
        datereturn: '',
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
   methods:{
        handleSubmit(ffrom,fto,datefrom,datereturn,pgr) {
            this.$router.replace({name:'Search', params:{ffrom,fto,datefrom,datereturn,pgr}});
           

        },
        LogIn() {
            this.$router.replace({name:'Login'});
        },
        
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
