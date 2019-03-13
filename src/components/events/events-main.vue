<template lang="html">
  <div class="page">
    <header class="hm-height header-main">
      <v-container>
        <div :class="['center main-title page-title',
          {'display-2 e-xs': $vuetify.breakpoint.xs},
          {'display-4': $vuetify.breakpoint.smAndUp}]"
          >
          Events
        </div>
        <!-- <div class="display-1 center subMain">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        </div> -->
      </v-container>
    </header>
    <section id="events-box" class="card-content">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card id="upcoming-events" class="main-card ontop">
            <v-container>
              <div :class="[{'display-1': $vuetify.breakpoint.xs},
                  {'display-2': $vuetify.breakpoint.smAndUp},'primary--text text--darken-4']">
                Upcoming Events
              </div>
              <hr class="style-eight mt-3" />
              <div class="mt-4">
                <div v-for= "event in eventStore" :key="event.id">
                  <event-box :event="event"></event-box>
                </div>
              </div>
            </v-container>
          </v-card>

          <v-card id="past-events" class=" main-card ontop mt-3">
            <v-container>
              <div :class="[{'display-1': $vuetify.breakpoint.xs},
                  {'display-2': $vuetify.breakpoint.smAndUp},'primary--text text--darken-4']">
                Past Events
              </div>
              <hr class="style-eight mt-3" />
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
  </section>

  </div>
</template>

<script>
import eventPreview from '@/components/events/event-preview.vue';
import events from '@/components/events/events-list.js';

export default {
  components:{
    'event-box': eventPreview,
  },
  data () {
    return{
      eventStore: events,

    };
  },
};
</script>

<style lang="css" scoped>
header{
  width:100%;
  background-image: url('../../assets/events.jpg');
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  background-position: center -50px;

}
header:before{
  content:'';
  background-color: #212121;
  height:inherit;
  width:100%;
  position:fixed;
  opacity:.46;
  z-index:1;
  left:0;
  right:0;
  top:0;
  bottom:0;
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

position:absolute;
z-index: 1;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
bottom:30%;
}
.e-xs{
  bottom:45%;
}
#events-box{
  overflow-wrap: break-word;
}
@media only screen and (max-width:1000px) {

  header{
    width:100%;
    background-image: url('../../assets/events.jpg');
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    background-position: center;

  }
}

</style>
