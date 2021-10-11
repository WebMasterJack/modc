export default {
    name: 'Home',
    data() {

      return {
        ffrom: '',
        fto: '',
        datefrom: '',
        datereturn: '',
        pgr:'',
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
      };

    },
    methods:{
        handleSubmit(ffrom,fto,datefrom,datereturn,pgr) {
            this.$router.replace({name:'Search', params:{ffrom,fto,datefrom,datereturn,pgr}});
        }
    },
    
    template:`<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container"> <img src="assets/images/logo.png" class="logo test-0-logo" alt="logo">
        <div class="navbar-collapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active"> <a class="nav-link test-0-nav-1" href="#">Promotions</a> </li>
                <li class="nav-item"> <a class="nav-link test-0-nav-2" href="#">Search</a> </li>
                <li class="nav-item"> <a class="nav-link test-0-nav-3" href="#">Check-in</a> </li>
                <li class="nav-item"> <a class="nav-link test-0-nav-4" href="login.html">Personal area</a> </li>
            </ul>
        </div>
    </div>
</nav>
<div class="container">
    <section class="mt-5">
        <h2 class="mb-4">Flight search</h2>
        <form  action="./search">
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3 pr-lg-0"> 
                    <select class="form-control test-0-fd w-100" v-model="ffrom">
                        
                        <option v-for="flight in items" :value="flight.iata">{{flight.name}}</option>
                    </select> </div>
                <div class="col-12 col-sm-6 col-lg-4 mt-3 col-xl-3 mt-sm-0 pr-lg-0"> <select
                        class="form-control test-0-fd w-100" v-model="fto" >
                        
                        <option v-for="flight in items" :value="flight.iata">{{flight.name}}</option>
                    </select> </div>
                <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-lg-0"> <input type="text"
                        class="form-control test-0-fdt" placeholder="Departing" v-model="datefrom">
                    <div class="invalid-feedback">Error message</div>
                </div>
                <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-xl-0"> <input type="text"
                        class="form-control test-0-fat" placeholder="Returning" v-model="datereturn">
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
                <div class="col-12 col-xl-1 px-2 mt-3 mt-xl-0"> <button
                        class="btn btn-success form-control test-0-fbs" @click="handleSubmit(ffrom,fto,datefrom,datereturn,pgr)">Search</button> </div>
            </div>
        </form>
    </section>
    <section class="mt-5">
        <h2 class="mb-4">Promotions</h2>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card"> <img src="assets/images/placeholder.jpg" class="card-img-top test-0-ai" alt="...">
                    <div class="card-body">
                        <h5 class="card-title test-0-an">Promotion 1</h5>
                        <p class="card-text test-0-ad">Promotion text</p> <a href="#"
                            class="btn btn-primary test-0-abm">More</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card"> <img src="assets/images/placeholder.jpg" class="card-img-top test-0-ai" alt="...">
                    <div class="card-body">
                        <h5 class="card-title test-0-an">Promotion 1</h5>
                        <p class="card-text test-0-ad">Promotion text</p> <a href="#"
                            class="btn btn-primary test-0-abm">More</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card"> <img src="assets/images/placeholder.jpg" class="card-img-top test-0-ai" alt="...">
                    <div class="card-body">
                        <h5 class="card-title test-0-an">Promotion 1</h5>
                        <p class="card-text test-0-ad">Promotion text</p> <a href="#"
                            class="btn btn-primary test-0-abm">More</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card"> <img src="assets/images/placeholder.jpg" class="card-img-top test-0-ai" alt="...">
                    <div class="card-body">
                        <h5 class="card-title test-0-an">Promotion 1</h5>
                        <p class="card-text test-0-ad">Promotion text</p> <a href="#"
                            class="btn btn-primary test-0-abm">More</a>
                    </div>
                </div>
            </div>
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
                <div class="d-flex justify-content-between"> <a href="http://xxxxxx-m1.wsr.ru">Home</a> <a
                        href="http://xxxxxx-m1.wsr.ru/login">Log in</a> <a
                        href="http://xxxxxx-m1.wsr.ru/register">Registration</a> <a
                        href="http://xxxxxx-m1.wsr.ru/contact">Contact</a> <a
                        href="http://xxxxxx-m1.wsr.ru/news">News</a> <a href="http://xxxxxx-m1.wsr.ru/return">Return</a>
                    <a href="http://xxxxxx-m1.wsr.ru/feedback">Feedback</a> </div>
            </div>
        </div>
    </div>
</footer>`
}
