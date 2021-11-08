export default {
    name: 'Booking',
    
    data() {

        let {ffrom,fto,datefrom,datereturn,pgr,ndfb,ndft,cost}=this;
        console.log ({ffrom,fto,datefrom,datereturn,pgr,ndfb,ndft,cost});
        return {
          
        }
        
        
      },
    //   created() {
    //     // Simple GET request using fetch
        
    
        
       
        
    //     fetch(url)
    //       .then(response => response.json())
    //       .then((commits) => {
    //           console.log(commits);
    //           console.log('datedadwq');
              
    //           this.flights_back = commits.data.flights_back;
    //           this.flights_to = commits.data.flights_to;
    //       });
      
    //   },
      props:['name','ffrom','fto','datefrom','datereturn','pgr','ndfb','ndft','cost'],
      methods:{
        BookingReturn(){
            console.log(this.$router);
           
            let {ffrom,fto,datefrom,datereturn,pgr}=this;
                    this.$router.replace({name:'Search',params:{ffrom,fto,datefrom,datereturn,pgr}});
                }
      },
      template:`<div class="container">
      <section class="mt-5">

          <div class="d-flex justify-content-between align-items-start">
              <h2 class="mb-4">
                  Booking
              </h2>
              <button @click="BookingReturn()">back</button>
          </div>

          <div class="d-flex justify-content-between align-items-baseline mb-4">
              <h4>Flight information</h4>
          </div>

          <table class="table table-hover table-bordered" >
              <tr>
                  <th>Flight</th>
                  <th>From where</th>
                  <th>Date and time of departure</th>
                  <th>To where</th>
                  <th>Flight time</th>
                  <th>Cost</th>
              </tr>
              <tr v-html="ndft">

              </tr>
              <tr v-html="ndfb">
         
              </tr>
              <tr>
                  <td colspan="5" class="text-right">
                      <b>Total cost</b>
                  </td>
                  <td colspan="1" class="text-right test-5-price">{{cost}}</td>
              </tr>
          </table>
      </section>

      <section class="mt-5">
          <div class="d-flex justify-content-between align-items-baseline mb-4">
              <h4>Passengers</h4>
              <button class="btn btn-primary btn-sm test-5-add">Add passenger</button>
          </div>

          <form action="booking_management.html">

              <div class="row">
                  <div class="col-12 col-sm-6 col-lg-4 col-xl-3 pr-lg-0">
                      <input type="text" class="form-control test-5-name w-100" placeholder="First name">
                  </div>
                  <div class="col-12 col-sm-6 col-lg-4 mt-3 col-xl-3 mt-sm-0 pr-lg-0">
                      <input type="text" class="form-control test-5-last w-100" placeholder="Last name">
                  </div>
                  <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-lg-0">
                      <input type="text" class="form-control test-5-dob" placeholder="Date of Birth">
                  </div>
                  <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-xl-0">
                      <input type="text" class="form-control test-5-doc" placeholder="Document number">
                  </div>
                  <div class="col-12 col-xl-2 mt-3 mt-xl-0">
                      <button class="btn btn-danger btn-sm form-control test-5-bremove">Remove</button>
                  </div>
              </div>

              <button class="btn btn-success mt-4 form-control test-5-book">Confirm</button>
          </form>
      </section>

  </div>`,
  
}
