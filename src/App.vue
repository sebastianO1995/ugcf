<template>
  <v-app id="app">
    <div :class="{overlay}">
      <nav-drawer
        @closedDrawer = 'updateDrawerClass($event)'
        @openedDrawer= 'updateDrawerClass($event)'></nav-drawer>
        <v-content class="content">
          <router-view></router-view>

        </v-content>
        <main-footer></main-footer>

      </div>
  </v-app>
</template>

<script>
// eslint-disable-next-line
import navigation from '@/components/nav-drawer.vue';
// eslint-disable-next-line
import mainFoot from '@/components/footer-main.vue';

export default {
  data() {
    return {
      overlay: '',
    };
  },
  methods: {
    updateDrawerClass(op) {
      if (op) {
        this.overlay = 'overlay';
      } else {
        this.overlay = '';
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
  background-color: var(--v-info-lighten2);
}
/* Header properties */
.hh-md{
  height:70vh !important;
}
.hh-sm{
  height:50vh !important;

}
.page-title{
  color: var(--v-secondary-lighten4);
  text-shadow: 0 1px 0 #ccc,
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);


}
.page-title::selection{
  background-color: var(--v-secondary-base);
  color: var(--v-primary-ligthen4);
  text-shadow: 0 1px 0 #ccc,
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
}
/* Gradient color1 - color2 - color1 */
/* HR STYLE ONE _ TWO */

hr.style-one {
    border: 0;
    height: 1px;
    background: #333;
    background-image: linear-gradient(to right, var(--v-primary-lighten2),
    var(--v-primary-base), var(--v-primary-lighten2));
}
hr.style-two {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}

/* HR STYLE 7 */
hr.style-seven {
    overflow: visible; /* For IE */
    height: 30px;
    border-style: solid;
    border-color: black;
    border-width: 1px 0 0 0;
    border-radius: 20px;
}
hr.style-seven:before { /* Not really supposed to work, but does */
    display: block;
    content: "";
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: black;
    border-width: 0 0 1px 0;
    border-radius: 20px;
}
/*HR STYLE 8 */

hr.style-eight {
    overflow: visible; /* For IE */
    padding: 0;
    border: none;
    border-top: medium double #333;
    color: var(--v-accent-base);
    text-align: center;
}
hr.style-eight:after {
    content: "∞";
    display: inline-block;
    position: relative;
    top: -0.7em;
    font-size: 1.5em;
    padding: 0 0.25em;
    background: white;
}
body{

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

min-height: calc(100vh);

}
/*Text Breaks*/

.bw{
  word-break:break-word;
}

.o-bk{
  overflow-wrap:break-word;
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

</style>
