export default {
    name:'Register',
    data(){
        return{
            fname: '',
            lname: '',
            docNumber: '',
            phone: '',
            password: '',
            rpassword:''
        };
        
    },
    methods: {
        async PostReqests() {
            let data = {
                phone: this.phone,
                password: this.password,
                rpassword:this.rpassword,
                first_name: this.fname,
                last_name: this.lname,
                document_number: this.docNumber
                
            };
          const response = await fetch("http://modc/fnc-master/public/api/register", {
            method: "POST",
            body:JSON.stringify(data),
            headers: {'Content-Type': 'application/json'},
            
          });
          if (response.ok) { // если HTTP-статус в диапазоне 200-299
            
            let {phone,password,rpassword,fname,lname,docNumber}=this;
            this.$router.replace({name:'Profile',params:{phone,password,rpassword,fname,lname,docNumber}});
          }else{alert("error")};
          console.log(response,this.phone,this.password,this.rpassword,this.fname,this.lname,this.docNumber);
        }
      },
      template:`
      <div class="container vh-100 d-flex align-items-center justify-content-center">
      
          <section class="mt-5 w-75">
              <h2 class="mb-5 text-center">Registration</h2>
  
              
                  <div class="row">
                      <div class="col-12 col-md-6">
                          <input type="text" class="form-control is-invalid test-2-name" v-model="fname" placeholder="Frist name">
                          <div class="invalid-feedback test-1-emfn">Error message</div>
                      </div>
                      <div class="col-12 mt-3 col-md-6 mt-md-0">
                          <input type="text" class="form-control is-invalid test-2-last" v-model="lname" placeholder="Last name">
                          <div class="invalid-feedback test-2-emln">Error message</div>
                      </div>
                      <div class="col-12 mt-3 col-md-6">
                          <input type="text" class="form-control test-2-doc" v-model="docNumber" placeholder="Document number">
                          <div class="invalid-feedback test-2-emdn">Error message</div>
                      </div>
                      <div class="col-12 mt-3 col-md-6">
                          <input type="text" class="form-control test-2-phone" v-model="phone" placeholder="Phone">
                          <div class="invalid-feedback test-2-empn">Error message</div>
                      </div>
                      <div class="col-12 mt-3 col-md-6">
                          <input type="password" class="form-control test-2-pass" v-model="password" placeholder="Password">
                          <div class="invalid-feedback test-2-empw">Error message</div>
                      </div>
                      <div class="col-12 mt-3 col-md-6">
                          <input type="password" class="form-control test-2-pass2" v-model="rpassword" placeholder="Password confirmation">
                          <div class="invalid-feedback test-2-empw2">Error message</div>
                      </div>
                      <div class="col-12 mt-3">
                          
                          <div class="text-center mt-2">
                              Already have an account? <button class="btn btn-primary w-100 test-2-btn" @click="PostReqests(phone,password,fname,lname,docNumber)">Register now</button>
                              or
                              <a href="index.html" class="test-2-bbhm">Back home</a>    
                          </div>
                      </div>
                  </div>
              
          </section>
  
      </div>
  `,
}