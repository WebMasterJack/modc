<template>
    <Header/>
    <div class="container">
        <FlightSearch/>
    </div>
</template> 
<script>
import Header from '@/components/Header.vue'
import FlightSearch from '@/components/FlightSearch.vue'
export default {
    name:'Home',
    components:{
        Header,
        FlightSearch
    }
}
</script>
