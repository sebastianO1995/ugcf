<template lang="html">
  <div>
    <section class="card-content">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card id="our-inspiration" class="main-card ontop">
            <v-container>

              <v-layout row wrap>
                <v-flex xs12>
                  <div :class="['title font-weight-medium primary--text text--darken-4',
                    {'body-2': $vuetify.breakpoint.smAndDown}]"
                    style="line-height:1.5 !important; text-align: justify">
                      <span class="pl-5">The</span>
                      Unified Global Connections Foundation was established to help build
                       meaningful connections between people of different
                       cultures in order to nurture compassionate
                        and accepting communities across the world.
                        The Foundation began in November of 2018 when it
                         was simply a single event that was anticipated to
                         repeat annually, but with foresight,
                          ambition, and immense support from our community,
                          it has come to grow into an entire
                           organization with a life of its own. Our story
                           however, though inspiring, has an unfortunate
                            origin.
                      <br />
                      <span class="pl-5">On</span>
                      June 11, 2018, the world endured the tragic loss of
                      Jacob Gibbons-Morales, graduate of Amity
                      Regional High School and a student at George Washington
                       University who embodied the true nature
                       of what it meant to be a global citizen. As a friend,
                       brother, son, and community builder,
                       Jacob brought together all those around him through his
                       love for experiencing new cultures,
                       traveling to far flung locations, and most of all, soccer.
                       Jacob’s radiant passion and care for
                       others was contagious to those around him, inspiring the
                       pursuit of self-development, the urge to
                       travel the world and see other cultures, and most of
                       all, the desire to help others and develop a
                        better global community. In his loving memory, and
                       in an effort to continue the teachings that he so
                       dedicated his life to, we have hereby formed
                       ourselves into an association with just cause and
                       passionate hearts, to develop a global
                       community where all cultures are not just accepted,
                       but celebrated. It is our mission to help
                       spread Jacob's message of inclusion, and love, both
                       domestic and abroad, to combat hatred,
                       discrimination and bigotry as he set out to do.
                  </div>
                  <v-container>
                    <v-carousel :height="getHeight()">
                      <v-carousel-item
                        v-for="(item,i) in images"
                        :key="i"
                        :src="require(`@/assets/inspiration/${item.src}`)"
                      ></v-carousel-item>
                    </v-carousel>
                  </v-container>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
  </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: 'jgm-chile.jpeg',
        },
        {
          src: 'jgm-water.jpeg',
        },
        {
          src: 'jgm-beach.jpeg',
        },
        {
          src: 'jgm-friends.jpeg',
        },
      ],
    };
  },
  methods: {
    getHeight() {
      if (this.$vuetify.breakpoint.xs) {
        return '200';
      }
      return '500';
    },
  },
};
</script>

<style lang="css" scoped>

</style>
