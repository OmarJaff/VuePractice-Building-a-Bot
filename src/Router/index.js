import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage.vue'
import RobotBuild from '../components/RobotBuilder.vue'
import PartsInfo from '../components/RobotPartInfo.vue'
import BrowseParts from '../components/BrowseParts.vue'
import RobotHead from '../components/robotparts/RobotHeads.vue'
import RobotArm from '../components/robotparts/RobotArms.vue'
import RobotTorsos from '../components/robotparts/RobotTorsos.vue'
import RobotBases from '../components/robotparts/RobotBases.vue'
import SideBarContent from '../components/sidebar/SideBarContent.vue'
import SideBarBuild from '../components/sidebar/SideBarBuild.vue'
import ShoppingCart from '../components/cart/ShoppingCart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: { default: HomePage, sidebarcontent: SideBarContent }
    },
    {
      path: '/build',
      name: 'RobotBuild',
      components: { default: RobotBuild, sidebarcontent: SideBarBuild }
    },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        { name: 'RobotHead', path: 'head', component: RobotHead },
        { name: 'RobotArm', path: 'arm', component: RobotArm },
        { name: 'RobotTorsos', path: 'torses', component: RobotTorsos },
        { name: 'RobotBase', path: 'base', component: RobotBases }
      ]
    },
    {
      path: '/parts/:partType/:partId',
      name: 'robotparts',
      component: PartsInfo,
      props: true
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart
    }
  ]
})
