<template lang="html">
  <v-card height="65px" :class="['navigation-bar', {'overlay ovNav': showSide}]">
    <div class="logo">
      <router-link to='/'>
        <img id="myLogo" src="@/assets/logo.png" /></router-link>
    </div>
    <!-- Big Screen Begin -->
      <nav class="navBig" v-if="notSmall==true">
        <ul class="u-main">
          <!-- Menu Item Begin -->
          <router-link v-for="item in menuItems" :key="item.name" :to="item.link">
            <li class="li-main">

                <div class="navItem">
                  {{item.name}}
                  <v-icon v-if="item.hasDropdown === true" size="16"
                    class="pl-2 pb-1 arrow-down">
                      fas fa-angle-down</v-icon>
                </div>

              <div v-if="item.hasDropdown === true">

                <v-card>
                  <ul class="u-sub">
                    <li class="li-sub" v-for="sub in item.subMenu" :key="sub.text">
                      <router-link :to="sub.link" class="navSubItem">

                          {{sub.text}}

                      </router-link>
                    </li>
                  </ul>
                </v-card>
              </div>
            </li>
            </router-link>
          <!-- Menu Item End -->
        </ul>
      </nav>
    <!-- Big Screen End-->

    <!-- Small Screen Begin -->
    <nav class="navSmall" v-else>
      <span class="hamburger">
          <i class="fas fa-bars" v-on:click="openNav()"></i>
      </span>
      <v-slide-x-reverse-transition>
        <v-card class="drawerOpen" ref="icon" v-show="showSide"  >
          <a class="closebtn" v-on:click="closeNav()">&times;</a>
          <hr class="style-one"/>
          <ul class="drawer-ul-main">
            <div v-for="itemDrawer in menuItems" :key="itemDrawer.name">
              <div v-if="!itemDrawer.hasDropdown">
                <router-link  :to="itemDrawer.link" >
                  <li class="drawer-li" v-on:click="closeNav()">
                    <div class="drawer-item headline">
                      <div class = "drawer-item-icon">
                        <v-icon color="primary darken-4" size="22">{{itemDrawer.icon}}</v-icon>
                      </div>
                          {{itemDrawer.name}}
                    </div>
                  </li>
                </router-link>
              </div>
              <div v-else>
                <li class="drawer-li">
                  <div class="drawer-item headline">
                    <div class = "drawer-item-icon">
                      <v-icon color="primary darken-4" size="22">{{itemDrawer.icon}}</v-icon>
                    </div>
                    <!-- about us -->
                    <div class="drawer-about">
                      {{itemDrawer.name}}
                    </div>
                  </div>
                  <ul class="drawer-ul-sub">
                    <router-link v-for="sub in itemDrawer.subMenu" :key="sub.text" :to="sub.link">
                      <li class="drawer-li-sub subheading" v-on:click="closeNav()">
                        {{sub.text}}
                      </li>
                    </router-link>
                  </ul>
                </li>
              </div>
            </div>
          </ul>
        </v-card>
      </v-slide-x-reverse-transition>
    </nav>
    <!-- Small Screen End -->

  </v-card>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          name: 'Home',
          link: '/',
          hasDropdown: false,
          icon: 'fas fa-home',
        },
        {
          name: 'About Us',
          icon: 'fas fa-users',
          hasDropdown: true,
          link: '',
          subMenu: [
            {
              text: 'Our Inspiration',
              link: '/our-inspiration',
              isActive: false,
            },
            {
              text: 'Who we are',
              link: '/who-we-are',
              isActive: false,
            },
          ],
        },
        {
          name: 'Events',
          link: '/events',
          hasDropdown: false,
          icon: 'fas fa-calendar-alt',
        },
        {
          name: 'Contact Us',
          link: '/contact',
          hasDropdown: false,
          icon: 'fas fa-envelope',
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
      if (window.innerWidth < 728) {
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
/*LOGO*/
.logo{
  text-align: left;
  width:10%;
  padding:5px 0px 5px 10px;
}
#myLogo{
  height:69px;
  width:57px;
  padding: 10px 5px 5px 5px;
}

/*navigation*/
.navigation-bar{
  position: fixed;
  top: 0;
  z-index: 2;
  width:100%;
  background-color: var(--v-primary-darken1);
  height:auto;
  padding: 0px 10px 0px 10px;
  margin-bottom:10px;
  display: flex;
  align-items: center;
}

.navBig, .navSmall{
  width:90%;
  text-align:right;
}
.li-main{
  display:inline-block;
  margin: 0.5em;
  position:relative;
  text-align:left;
}
.u-main a{
  padding: 29px 0px 20px 0px;
  color: var(--v-primary-lighten4);
  font-size: 22px;
  font-weight: 400;
  padding-right:20px;
}
.u-main a:hover{
  background-color: #fff;
  color: var(--v-primary-darken4);
}
.u-main a:hover .arrow-down{
  color: var(--v-primary-darken4);
}
.arrow-down{
  color: var(--v-primary-lighten4);
}
.li-main a{
  text-decoration: none;
}
.li-sub{
  list-style: none;
}

.li-sub:hover{
  background: red;
}

/*Drop Down*/

.u-main a:hover .u-sub{display:block}
.u-sub{
  display:none;
  position:absolute;
  top:16px;
  left:-11px;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding-left:0px;
  width:180px;
  border-top: 2px solid var(--v-primary-darken4);

}

.u-sub .navSubItem{
  padding: 8px 14px 8px 0px;
  text-decoration: none;
  display: block;
  width:100%;
  text-align: left;
  padding-left: 10px;
  font-size:16px;
  color: var(--v-primary-darken4);
}
.u-sub .navSubItem:hover{
background: var(--v-primary-lighten2);
}

/*Item Text*/
.mainList{
  font-size: 22px;
  border-right: 1px solid black;
  font-weight: 400;
  padding-right:20px;
}
.router-link-exact-active{
text-decoration: underline;
}

/*Drawer*/
.hamburger{
  font-size:40px;
  color: var(--v-primary-lighten4);
  float:right;
  margin-right:10px;
}
.hamburger:hover{
  cursor: pointer;
  color: var(--v-primary-darken4);

}
.drawerOpen{
  height: 100%; /* 100% Full-height */
  font-size:35px;
  text-align:left;
  width:300px;
  position: fixed; /* Stay in place */
  z-index: 5; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  left:auto;
  max-width:100%;
  background-color: white;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  /* opacity:.95; */
}
.drawerOpen .closebtn {
  position: absolute;
  color: var(--v-primary-darken4);
  text-decoration: none;
  top: 0;
  left: 2%;
  font-size: 36px;
  max-width:100%;
}

.closebtn:hover{
  color: var(--v-primary-darken3);
  transform: scale(1.2);
}
/*Drawer Menu*/
.drawer-ul-main{
  padding:0px;
}
.drawer-ul-main a{
text-decoration: none;
color: var(--v-primary-darken4);

}
.drawer-item, .drawer-li-sub{
  font-weight: 300;
}
.drawer-ul-main a:hover{

background-color: red;
}

.drawer-li{
  list-style: none;
}
.drawer-item{
padding: 10px 0px 12px 60px;
position:relative;
}
.drawer-about{
  color: var(--v-primary-darken4);
}

.drawer-ul-sub{
padding-left: 0px;
}
.drawer-li-sub{
  padding: 8px 0px 5px 75px;
  list-style: none;
}
.drawer-item:hover,.drawer-li-sub:hover {
  background-color: var(--v-primary-lighten4);
}
/* .drawer-ul-main a:hover{
  background-color: var(--v-primary-lighten4);
} */
.drawer-item-icon{
  position:absolute;
  left:18px;
  top:6px;
}
.drawer-ul-main .router-link-exact-active,
.drawer-ul-main .router-link-exact-active i{
color: var(--v-accent-darken2) !important;

}
.drawer-ul-main .router-link-exact-active .drawer-li .drawer-item,
.drawer-ul-main .router-link-exact-active .drawer-li-sub{
  font-weight: 500;

}

</style>
