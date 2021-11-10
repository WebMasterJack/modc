export default {
    name: 'Profile',
    props:['token'],
    data() {
        return{
           fname: '',
           lname: '',
        };
    },
    created() {
        let url = `http://modc/fnc-master/public/api/user`;

    
   
    
    fetch(url,{headers: {'Authorization': `Bearer ${this.token}`}})
      .then(response => response.json())
      .then((commits) => {
          console.log(commits);
          console.log('date');
        this.fname=commits.first_name;
        this.lname=commits.last_name;

          
         
      });
    },
    methods:{
       

        Logout(){

        }
    },
    
    template:`<div class="container">
    <section class="mt-5">
        <div class="d-flex justify-content-between align-items-start">
            <h2 class="mb-4">
                Welcome,
                <span class="test-3-name">{{fname}}&nbsp</span> 
                <span class="test-3-last">{{lname}}</span>
            </h2>
            <a class="btn btn-sm btn-secondary test-3-logout" href="index.html">Logout</a>
        </div>

        <p>Completed <span class="test-3-numflights">10</span> flights</p>
    </section>

    <section class="mt-5 favorites">
        <h4 class="mb-4">Favorites flights</h4>

        <table class="table table-hover">
            <tr>
                <td>Saransk-> <span class="test-3-to">Moscow</span>
                    <br>
                <span class="test-3-from">Moscow</span> ->Saransk</td>
                <td>
                    Departure at
                    <span class="test-3-t1">08:00</span>

                    <br>

                    Departure at
                    <span class="test-3-t1">10:00</span>
                </td>
                <td>
                    Arrival at <span class="test-3-t2">09:30</span>
                    <br>
                    Arrival at <span class="test-3-t2">11:30</span>
                </td>
                <td>
                    <a href="booking_again_example.html" class="btn btn-sm btn-primary test-3-booknow">Book now</a>
                    <a href="#" class="btn btn-sm btn-danger test-3-removf">Remove from favorites</a>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="test-3-from">Moscow</span> -> <span class="test-3-to">Saransk</span>
                    <br>
                    <span class="test-3-from">Saransk</span> -> <span class="test-3-to">Moscow</span>
                </td>
                <td>
                    Departure at
                    <span class="test-3-t1">19:00</span>

                    <br>

                    Departure at
                    <span class="test-3-t1">10:00</span>
                </td>
                <td>
                    Arrival at <span class="test-3-t2">09:30</span>
                    <br>
                    Arrival at <span class="test-3-t2">11:30</span>
                </td>
                <td>
                    <a href="booking_again_example.html" class="btn btn-sm btn-primary test-3-booknow">Book now</a>
                    <a href="#" class="btn btn-sm btn-danger test-3-removf">Remove from favorites</a>
                </td>
            </tr>
        </table>

    </section>

    <section class="mt-5 past">
        <h4 class="mb-4">Past reservations</h4>

        <table class="table table-hover">
            <tr>
                <td>Saransk-> <span class="test-3-to">Moscow</span>
                    <br>
                    <span class="test-3-from">Moscow</span> -> <span class="test-3-to">Saransk</span>
                </td>
                <td>
                    Departured
                    <span class="test-3-d1">10-09-2020</span>
                    at
                    <span class="test-3-t1">08:00</span>

                    <br>

                    Departured
                    <span class="test-3-d1">20-09-2020</span>
                    at
                    <span class="test-3-t1">10:00</span>
                </td>
                <td>
                    Arrived at <span class="test-3-t2">09:30</span>
                    <br>
                    Arrived at <span class="test-3-t2">11:30</span>
                </td>
                <td>
                    <a href="#" class="btn btn-sm btn-primary">Add to favorites</a>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="test-3-from">Moscow</span> -><span class="test-3-to">Saransk</span><br>
                    <span class="test-3-to">Saransk</span> -> <span class="test-3-to">Moscow</span>
                </td>
                <td>
                    Departured
                    <span class="test-3-d1">20-09-2020</span>
                    at
                    <span class="test-3-t1">19:00</span>

                    <br>

                    Departured
                    <span class="test-3-d1">20-09-2020</span>
                    at
                    <span class="test-3-t1">10:00</span>
                </td>
                <td>
                    Arrived at <span class="test-3-t2">09:30</span>
                    <br>
                    Arrived at <span class="test-3-t2">11:30</span>
                </td>
                <td>
                    <a href="#" class="btn btn-sm btn-primary test-3-add-to-favorites">Add to favorites</a>
                </td>
            </tr>
        </table>

    </section>

    <section class="mt-5 upcoming">
        <h4 class="mb-4">Upcoming reservations</h4>

        <table class="table table-hover">
            <tr>
                <td>
                    <a class="test-3-code" href="booking_management.html">AFADS</a>
                </td>
                <td><span class="test-3-to">Saransk</span> -> <span class="test-3-to">Moscow</span>
                    <br>
                    <span class="test-3-from">Moscow</span> -> <span class="test-3-to">Saransk</span></td>
                <td>
                    Departure
                    <span class="test-3-d1">10-02-2021</span>
                    at
                    <span class="test-3-t1">08:00</span>

                    <br>

                    Departure
                    <span class="test-3-d1">11-02-2021</span>
                    at
                    <span class="test-3-t1">10:00</span>
                </td>
                <td>
                    Arrival at <span class="test-3-t2">09:30</span>
                    <br>
                    Arrival at <span class="test-3-t2">11:30</span>
                </td>
            </tr>
            <tr>
                <td>
                    <a class="test-3-code" href="booking_management.html">IFAAV</a>
                </td>
                <td>
                    <span class="test-3-from">Moscow</span> -><span class="test-3-to"> Saransk</span><br>
                    <span class="test-3-to">Saransk</span> -> <span class="test-3-to">Moscow</span>
                </td>
                <td>
                    Departure
                    <span class="test-3-d1">10-02-2021</span>
                    at
                    <span class="test-3-t1">19:00</span>

                    <br>

                    Departure
                    <span class="test-3-d1">11-02-2021</span>
                    at
                    <span class="test-3-t1">10:00</span>
                </td>
                <td>
                    Arrival at <span class="test-3-t2">09:30</span>
                    <br>
                    Arrival at <span class="test-3-t2">11:30</span>
                </td>
            </tr>
        </table>
    </section>

</div>

`,
}