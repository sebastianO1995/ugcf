<template>
  <v-app id="app">
    <div :class="{overlay}">
    <nav-drawer  :ovNav = "ovNav"
      @closedDrawer = 'updateDrawerClass($event)'
      @openedDrawer= 'updateDrawerClass($event)'></nav-drawer>


        <v-content class="content">
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
*{
  margin:0;
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
  height:86% !important;
}
.content{
  margin-top:78px;

}

.header-main{
  height:40vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center;
  color:white;
  position:relative;
}

</style>
