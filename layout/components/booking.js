export default {
    name: 'Booking',
    
    data() {
        console.log(15);    
        return {
          
        }
      },
      props:['name','ffrom','fto','datefrom','datereturn','pgr'],
      template:`<div class="container">
      <section class="mt-5">

          <div class="d-flex justify-content-between align-items-start">
              <h2 class="mb-4">
                  Booking
              </h2>
              <a href="search.html" class="btn btn-sm btn-secondary test-5-bgoback">Back</a>
          </div>

          <div class="d-flex justify-content-between align-items-baseline mb-4">
              <h4>Flight information</h4>
          </div>

          <table class="table table-hover table-bordered">
              <tr>
                  <th>Flight</th>
                  <th>From where</th>
                  <th>Date and time of departure</th>
                  <th>To where</th>
                  <th>Flight time</th>
                  <th>Cost</th>
              </tr>
              <tr>
                  <td class="test-5-fc">FC 2144</td>
                  <td>Saransk,
                  Saransk</td>
                  <td>
                      <span class="test-5-dd">10-02-2021</span>
                      at
                      <span class="test-5-dt">08:00</span>
                  </td>
                  <td class="test-5-to">
                      <span class="test-5-to-cn">Moscow</span>,
                      <span class="test-5-to-an">Sherementievo</span> 
                  </td>
                  <td class="test-5-at">09:30</td>
                  <td class="test-5-fp">8000</td>
              </tr>
              <tr>
                  <td class="test-5-fc">FC 2161</td>
                  <td class="test-5-from">
                      <span class="test-5-from-cn">Moscow</span>,
                      <span class="test-5-from-an">Sherementievo</span> 
                  </td>
                  <td>
                      <span class="test-5-dd">11-02-2021</span>
                      at
                      <span class="test-5-dt">10:00</span>
                  </td>
                  <td class="test-5-to">Saransk,
                  Saransk</td>
                  <td class="test-5-at">11:30</td>
                  <td class="test-5-fp">9000</td>
              </tr>
              <tr>
                  <td colspan="5" class="text-right">
                      <b>Total cost</b>
                  </td>
                  <td colspan="1" class="text-right test-5-price">16000</td>
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