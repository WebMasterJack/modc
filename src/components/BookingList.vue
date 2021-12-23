<template>
    dsa 
</template>
<script>
export default {
    name:'BookingList',
    data(){
        let {from,to,date__from,date__to,pgr,ndfb,ndft,cost}=this;
        console.log ({from,to,date__from,date__to,pgr,ndfb,ndft,cost});
        return{
            
        }
    },
    props:{
        from:String,
        to:String,
        date__from:String,
        date__to:String,
        pgr:String,
        ndfb:String,
        ndft:String,
        cost:String
    }
}
</script>