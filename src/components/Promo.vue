<template>

            <div class="col-12 col-md-6 col-lg-3">
                <div class="card"> <img src="assets/images/placeholder.jpg" class="card-img-top test-0-ai" alt="...">
                    <div class="card-body">
                        <h5 class="card-title test-0-an">{{promo__title}}</h5>
                        <p class="card-text test-0-ad">{{promo__text}}</p> <a href="#"
                            class="btn btn-primary test-0-abm">More</a>
                    </div>
                </div>
            </div>
</template>
<script>
export default {
    name:'Promo',
    props:{
        promo__title:String,
        promo__text:String,
    }
}
</script>