<template>
  <v-app id="app">
    <div :class="{overlay}">
    <nav-drawer  :ovNav = "ovNav"
      @closedDrawer = 'updateDrawerClass($event)'
      @openedDrawer= 'updateDrawerClass($event)'></nav-drawer>
        <v-content class="content page">
        <router-view></router-view>
        </v-content>
      </div>
  </v-app>
</template>

<script>
// eslint-disable-next-line
import navigation from '@/components/header.vue';
// eslint-disable-next-line
import mainFoot from '@/components/footer-main.vue';

export default {
  data() {
    return {
      overlay: '',
      ovNav: '',
    };
  },
  methods: {
    updateDrawerClass(op) {
      if (op) {
        this.overlay = 'overlay';
        this.ovNav = 'ovNav';
      } else {
        this.overlay = '';
        this.ovNav = '';
      }
    },
  },
  components: {
    'nav-drawer': navigation,
    'main-footer': mainFoot,
  },
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
/* Gradient color1 - color2 - color1 */

hr.style-one {
    border: 0;
    height: 1px;
    background: #333;
    background-image: linear-gradient(to right, var(--v-primary-lighten2), var(--v-primary-base), var(--v-primary-lighten2));
}
hr.style-two {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
body{

}
.page{
    background-color: var(--v-info-lighten2);
}
*{
  margin:0;
  padding: 0;
}
.center {
  text-align: center;
  margin: auto;
}
.overlay:before{
  content: '';
  background-color: #212121;
  height:100%;
  width:100%;
  position:fixed;
  opacity:.46;
  z-index:1;
  left:0;
  right:0;
  top:0;
  bottom:0;
  pointer-events: auto;
    touch-action: none;
}
.ovNav:before{
  content:'';
  height:66px !important;
}
.content{

  margin-bottom:5rem;

}
/*HEADERS*/
.hm-height{
  height:60vh;
}
.header-main{

  background-size: cover;
  background-repeat: no-repeat;
  background-position:center;
  color:white;
  position:relative;
}
.main-title{
margin-top:5rem;

}
/*main-card*/

.card-content{
  position:relative;
  max-width: 86.25rem;
  margin-left: auto;
  margin-right: auto;
}

.main-card{
    padding: 30px 0 40px 0;
    margin-left: auto !important;
    margin-right: auto !important;
}
.ontop{
  top: -80px;
}
@media only screen and (max-width:600px) {

  .hm-height{
    height:50vh;
  }
}
</style>
