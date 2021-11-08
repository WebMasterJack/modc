export default {
    name:'Login',
  
    data() {
        return {
         phone:'',
         password:'',
         token:'',
        }
      },
      methods: {
        async PostReqests() {
            let data = {
                phone: this.phone,
                password: this.password // sending the option which was selected from dropdown
                
            };
          const response = await fetch("http://modc/fnc-master/public/api/login", {
            method: "POST",
            body:JSON.stringify(data),
            headers: {'Content-Type': 'application/json'},
            
          });
          if (response.ok) { // если HTTP-статус в диапазоне 200-299
            // получаем тело ответа (см. про этот метод ниже)
            let json = await response.json();
            console.log(json); 
            this.token = json.data.token;
            let {phone,password,token}=this;
            this.$router.replace({name:'Profile',params:{phone,password,token}});
          }else{alert("error")};
          console.log(response,this.phone,this.password,this.token);
        }
      },
        template:`<div class="container vh-100 d-flex align-items-center justify-content-center">
    
        <section class="mt-5 w-75">
            <h2 class="mb-5 text-center">Log in</h2>

            
                <div class="row">
                    <div class="col-12">
                        <!-- is-invalid class show error message -->
                        89001238833
                        <input type="phone" class="form-control is-invalid test-1-fpn" placeholder="Phone" v-model="phone">
                        <div class="invalid-feedback test-1-emph">Error message</div>
                    </div>
                    <div class="col-12 mt-2">
                        <input type="password" class="form-control test-1-fps" placeholder="Password" v-model="password">
                        <div class="invalid-feedback test-1-emps">Error message</div>
                    </div>
                    <div class="col-12 mt-4">
                        <button class="btn btn-primary w-100 test-1-fbs" @click="PostReqests()" >Log in</button>
                        <div class="text-center mt-2">
                            Don't have an account yet? <a href="register.html" class="test-1-bsu">Sign up</a>
                            or
                            <a href="index.html" class="test-1-bbh">Back home</a>
                        </div>
                    </div>
                </div>
            
        </section>

    </div>
`,

}
