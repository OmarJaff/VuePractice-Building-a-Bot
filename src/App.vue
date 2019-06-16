<template>
  <div id="app" >
    <header>
    <nav class="navbar navbar-dark bg-primary main">
      <div class="alinment">
        <div class="leftgroup">
            <slim-slide-bar>
              <router-view name="sidebarcontent"></router-view>
            </slim-slide-bar>
     <router-link  :to="{name:'Home'}" exact> 
                     <img src="./assets/build-a-bot-logo.png" class="marginlogo" width="30" height="30"  alt="">

    <vs-button  color="warning" size="small" type="line">Build-a-bot</vs-button>
  </router-link>
  <router-link  to="/build" exact>
      <vs-button  color="warning" size="small" type="line" icon="build" icon-after>start Building</vs-button>
  </router-link>
  </div>
  </div>
  <div class="rightgroup">
  <router-link to="/cart">
 
   <vs-button  
    
     size="normal"  class="btndirection" color="warning" type="line" icon="shopping_cart" icon-after>
      <vs-chip   color="danger" >
         <div style="color:white;font-size:15px; font-weight:bolder">{{cart.length}}</div> 
   </vs-chip>
     Cart</vs-button>
  </router-link>
</div>
</nav>
     </header>
   <!-- <div class="sidenav">
   <router-view name="sidebarcontent"></router-view>
</div> -->

      <main>
    <router-view />
    </main>
    </div>
    
 </template>
<script>

 import SlimSlideBar from './components/sidebar/SlimSlideBar'
export default {
  name: 'app',
  components: {
    SlimSlideBar,
   },
   computed: {
     cart() {
       return this.$store.state.cart
     }
   },
  
}
</script>
 <style>
body {
  background:linear-gradient(to bottom, rgb(224, 221, 221),rgb(79, 106, 226));
  background-attachment: fixed;
} 

 </style>
 

<style scoped>
 
 
.alinment {
   display: flex;
  }
.btn-outline-warning {
  border:none; 
}
.leftgroup {
  display: flex;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
main {
  margin: 0 auto ;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
 .navbar{
 margin-bottom: 1rem;
 font-size: 22px;
}
.router-link-active {
  color:white !important;
}
.marginlogo {
  margin-left: 1rem;
}
</style>
