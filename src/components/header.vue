<template lang="html">
  <header class="navHeader">
      <div :class="[overlay,'logo',ovNav]" >
        <router-link :to="{ name: 'Home' }">
          <img id="myLogo" src="@/assets/logo.png" /></router-link>
      </div>
      <nav style="width:88%;" :class="[overlay, 'topNav']" v-if="notSmall==true">
          <ul>
            <li v-for="item in menuItems" :key="item.name">
              <div v-if="item.hasSub === true">
                <div class="dropdown">
                  <div class="drop-text navList mainList">
                    {{item.name}}
                  </div>
                  <div class="drop-content">

                      <router-link
                        v-for="sub in item.subMenu" :key="sub.text"
                          :to="sub.link">
                        {{sub.text}}
                      </router-link>


                  </div>

                </div>

              </div>

              <div v-else>
                <router-link class="navList mainList" :to="item.link">
                  {{item.name}}
                </router-link>
              </div>
            </li>
          </ul>
      </nav>

    <div v-else style="width:95%;">
    <span class="hamburger">
        <i class="fas fa-bars" v-on:click="openNav()"></i>
    </span>
    <div id="sideNav"  class="mySideNav" ref="icon" v-show="showSide"  >
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">&times;</a>
      <ul>
        <li v-for="item in menuItems" :key="item.name" >
          <div v-if="item.hasSub" class="drop-text navList sideList">
            {{item.name}}
            <ul>
              <li v-for="sub in item.subMenu" :key="sub.text">
                <router-link class="navList sideList" :to="sub.link">
                  <span v-on:click="closeNav()">{{sub.text}}</span>
                </router-link>
              </li>
            </ul>
          </div>
          <div v-else>
            <router-link class="navList sideList" :to="item.link">
              <span v-on:click="closeNav()">{{item.name}}</span>
            </router-link>
          </div>

        </li>
      </ul>
    </div>
  </div>
  </header>
</template>

<script>
export default {
  props: ['overlay', 'ovNav'],
  data() {
    return {
      menuItems: [
        {
          name: 'Home',
          link: '/',
          hasSub: false,
        },
        {
          name: 'About Us',
          hasSub: true,
          subMenu: [
            {
              text: 'Our Mission',
              link: '/#our-mission',
            },
            {
              text: 'Our Vision',
              link: '/#our-vision',
            },
            {
              text: 'Our Inspiration',
              link: '/our-inspiration',
            },
            {
              text: 'Meet the Team',
              link: '/team',
            }
          ],
        },
        {
          name: 'Events',
          link: '/events',
          hasSub: false,
        },
        {
          name: 'Contact Us',
          link: '/contact',
          hasSub: false,
        },
      ],
      notSmall: true,
      showSide: false,
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener('click', this.handleClickOutside);
  },
  mounted() {

  },
  methods: {
    closeNav() {
      // closed the drawer and changes opacity of left side
      this.showSide = false;
      this.$emit('closedDrawer', false);
    },
    openNav() {
      // opens navigation drawer
      this.showSide = true;
      this.$emit('openedDrawer', true);
    },
    handleClickOutside(evt) {
      // any click outside of the opened drawer will cause the drawer to close
      if (!this.$el.contains(evt.target)) {
        if (this.showSide === true) {
          this.closeNav();
        }
      }
    },
    handleResize() {
      // show drawer for small screen
      if (window.innerWidth < 711) {
        this.notSmall = false;
      } else {
        this.notSmall = true;
        this.closeNav();
      }
    },
  },
};
</script>

<style lang="css" scoped="">

.navHeader{
  position: fixed;
  top: 0;
  z-index: 2;
  width:100%;
  background-color: rgba(0, 0, 0, 0.9);;
  height:auto;
  padding: 10px;
  margin-bottom:10px;
  display: flex;
  align-items: center;
}
.navList{
  color:#ddc;
  text-decoration: none;
}

.mainList{
  font-size: 30px;
  border-right: 1px solid white;
  padding-right:20px;
}
.navList:hover,
.router-link-exact-active{
  color:white;
  text-decoration: underline;
}
.topNav{
  text-align: right;
}
.topNav ul li{
  display:inline-block;
  margin: 0.5em;
}
.logo{
  text-align: left;
  width:10%;

}
#myLogo{
  height:50px;
  width:50px;
}
.hamburger{
  font-size:40px;
  color:#ddc;
  float:right;
  margin-right:10px;
}
.hamburger:hover{
  cursor: pointer;
  color:white;
}
.mySideNav{
  height: 100%; /* 100% Full-height */
  padding:10px;
  font-size:35px;
  text-align:left;
  width:230px;
  position: fixed; /* Stay in place */
  z-index: 5; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}
.mySideNav .closebtn {
  position: absolute;
  color:#ddc;
  text-decoration: none;
  top: 0;
  right: 200px;
  font-size: 36px;
  margin-left: 50px;
}

.closebtn:hover{
  color:white;
}
.mySideNav li {
  padding:10px;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown:hover .drop-content {display: block;}
.drop-content{
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  max-width: 130px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.drop-content a{
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  width:100%;
  text-align: left;
}

.drop-content a:hover{
  background-color:red;

}
</style>
