<template>
    <div>
      <h2 class=" text-muted">Cart INFO<font-awesome-icon icon="shopping-cart" /> </h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="bg-primary cust custed"  scope="col">Robot Name</th>
            <th class="bg-warning cust" scope="col">Totall Cost</th>
            <th class="bg-dark cust custcol">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot,index) in cart" :key="index">
            <td class="dataclass">{{robot.head.title}}</td>
            <td class="dataclass">{{robot.cost}} $</td>
            <td><button @click="removeItem(index)" class=" btn btn-danger btn-block" >Remove From Cart</button></td>
          </tr>
        </tbody>
      </table>
      <hr>
        <div>
       <h2  class="text-muted" >You <span style="color:#d9534f">
           Saved Money</span> on these robots <font-awesome-icon icon="dollar-sign" /> </h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="bg-primary cust custed"  scope="col">Robot Name</th>
            <th class="bg-warning cust" scope="col">Totall Cost</th>
           </tr>
        </thead>
        <tbody>
          <tr v-for="(robot,index) in addSelled" :key="index">
            <td class="dataclass">{{robot.head.title}}</td>
            <td class="dataclass">{{robot.cost}} $</td>
           </tr>
        </tbody>
      </table>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "Cart",
    computed:{
         ...mapGetters(['removeFromCart','addOnlySelled']),
        cart() {
            return this.$store.state.cart;
            console.log('this is from shopping cart table')
            console.log( this.$store.state.cart)
        },
        addSelled() {
            return this.addOnlySelled;
        }
    },
    methods: {
        removeItem(i) {
         this.removeFromCart(i);
    //   this.cart.splice(i,1);
     },
    }
}
</script>


<style>
.custed {
    color:white !important;
}
</style>
