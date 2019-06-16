<template>
    <div    >
            <!-- <img src="../assets/build-a-bot-logo.png" class="card-img-top carding" alt="...">
            <h1 class=" text-warning  card-header ">{{part.title}}</h1>
            <div class="card-body">
           <h5 class="card-title text-primary">{{part.description}}</h5> 
        </div> -->
        <div class="card mb-3 border-warning" style="max-width: 800px; border-width:1px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="part.src" class="card-img" :alt="part.type">
    </div>
    <div class="col-md-8 " style="border-left:1px solid #f0ad4e" >
        <h3 class="card-header text-light bg-warning ">{{part.title}}</h3>
      <div class="card-body"  >
        
        <p class="card-text ">{{part.description}}</p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
 import getPartMixin from './robotparts/get-parts-mixin'
export default {
    name: "RobotPartInfo",
    mixins:[getPartMixin],
    props: {
        partType: {type:String},
        partId: {type:[Number,String], validator(value) {
            return Number.isInteger(Number(value));
        }},
        myTitle: {type:String}
    },
     computed: {
            part() {       
                const {partType,partId} = this 
                return  this.parts[partType].find(part => part.id === +partId);
            }
        },
}
</script>

<style scoped>
.carding{
    width:3.5rem !important;
    height:3.5rem !important;
}
</style>
