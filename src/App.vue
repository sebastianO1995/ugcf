<template>
  <v-app id="app">
    <nav-drawer :overlay = "overlay" :ovNav = "ovNav"
      @closedDrawer = 'updateDrawerClass($event)'
      @openedDrawer= 'updateDrawerClass($event)'></nav-drawer>

      <div :class="{overlay}">
        <section class="content">
          <router-view/>
        </section>
      </div>


    <main-footer :class="{overlay}"></main-footer>


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
  position:absolute;
  opacity:.46;
  z-index:1;
}
.ovNav:before{
  content:'';
  height:86% !important;
}
.content{
  margin-top:30px
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
