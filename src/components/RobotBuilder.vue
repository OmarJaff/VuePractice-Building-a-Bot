<template>
  <div v-if="availableParts"  class="pos">
   <div class="row">
    <div class="col-6 col-md-12 col-sm-4">
    <!--this is preview -->
  <div class="btn-group">
    <collapsable-section>
    <div class="mouseclick">
  <robot-preview v-b-modal.modal-xl :imageSrc="selectedRobot">
  </robot-preview>
    </div>
  </collapsable-section>
 
      <button 
      
     class="add-to-cart btn-primary"  @click="addToCart()">Add To Cart
         <font-awesome-icon icon="shopping-cart" /> 
       </button>  
  
    </div>
     <!--The Model that shows the picture preview -->
    <div>
      <b-modal :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" ok-only   id="modal-xl" size="xl"  title="Robot Preview">
             <div class="previeww">
      <div class="preview-content">
        <div class="top-row">
          <img :src="selectedRobot.head.src"/>
        </div>
        <div class="middle-row">
          <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
          <img :src="selectedRobot.Torsos.src"/>
          <img :src="selectedRobot.RightArm.src" class="rotate-right"/>
        </div>
        <div class="bottom-row">
          <img :src="selectedRobot.Bases.src"/>
        </div>
      </div>
    </div>
    <template slot="modal-footer" slot-scope="{ ok}">
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm" class="btn btn-block" variant="primary" @click="ok()">
        Close
      </b-button>
    </template>
  </b-modal>
    </div>
    <!--End of modal -->

    <div class="content ">
    <div class="top-row">
      <part-selectors :parts="availableParts.heads"
      position="top"
      @PartSelected="part => selectedRobot.head = part"
      ></part-selectors>
    </div>
    <div class="middle-row">
      <part-selectors
       @PartSelected="part =>selectedRobot.leftArm=part"
         position="left"
         :parts="availableParts.arms">
         </part-selectors>

     <part-selectors @PartSelected="part =>selectedRobot.Torsos=part"
        position="center" 
        :parts="availableParts.torsos">
        </part-selectors>

      <part-selectors @PartSelected="part =>selectedRobot.RightArm=part"
         position="right" 
         :parts="availableParts.arms">
         </part-selectors>
    </div>
    <div class="bottom-row">
       <part-selectors @PartSelected="part =>
          selectedRobot.Bases=part" position="bottom" 
          :parts="availableParts.bases">
          </part-selectors>
    </div>
  </div>
  </div>
  </div>
    </div>
 </template>

<script>
// import availableParts from '../data/parts'
import PartSelectors from './PartSelectors'
import RobotPreview from './RobotPreview'
import  'vuesax'
import CollapsableSection from './CollapsableSection' 
 export default {
  beforeRouteLeave(to,from,next) {
    if(this.addedToCart) {
      next(true);
    }else {
      next(true)
    }
  },
  name: 'RobotBuilder',
  components: {
    PartSelectors,
    RobotPreview,
    CollapsableSection
  },
  created() {
    this.$store.dispatch('getParts');
  },
  data() {
    return {
    variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
    headerBgVariant: 'primary',
    headerTextVariant: 'light',
    addedToCart: false,
  
    selectedRobot: {
    head: {},
    leftArm: {},
    Torsos: {},
    RightArm: {},
    Bases: {},
    }
    }
  },
 computed: {
   availableParts() {
     return this.$store.state.parts;
   },
    saleClass() {
      return this.selectedRobot.head.onSale ? 'border-sale' : ''
    },
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.RightArm.cost +
        robot.Torsos.cost +
        robot.Bases.cost;
        this.$store.dispatch('addRobotToCart',Object.assign({},robot,{cost})).then(this.$vs.notify({title:'Card',  text:'(' + this.selectedRobot.head.title +') was added to the cart',
    color:'dark',icon:'shopping_cart',position:'top-left'}));
        // this.$store.commit('addToStore',Object.assign({},robot, {cost}));
        this.addedToCart = true;
    },
      randomIcon(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(255,255)},${getRandomInt(0,0)},${getRandomInt(0,0)})`

      this.$vs.notify({title:'Icon mail',text:'Lorem ipsum dolor sit amet, consectetur',color:color,icon:'verified_user'})
    }
  },
 
}
</script>

<style>
 .custcol {
   color:red;
 }
 .cust {
  text-align: center;
}
.cartIcon {
  height: 20px;
  width: 20px;
  
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}

</style>


<style lang="scss" scoped>
.mouseclick {
  cursor: pointer;
}
.dataclass {
  text-align: center;
  font-weight: 500;
}

.deleteBtn {
 width:9rem;
}
 .btn-group {
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
  margin-bottom: 1rem;
}
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part {
  img {
    width: 165px;
  }
}

.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}

.add-to-cart {
  width: 10rem;
  height: 30px;
  
  font-size: 16px;  
 }
.container {
  display:absolute;
}
.bg-primary {
  color: white;
  
}
.border-sale {
  border: 3px red solid;
}
  
//for modal preview

.previeww {
position: relative;
 display: block;
}
 
.previeww img {
  width: 150px;
  height: 150px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}

//end of modal preview
</style>
