<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row
          align="center"
          justify="space-around"
          class="grey lighten-5"
          style="height: 300px;"
        >
          <a
            class="startupLogos-logo"
          >
            <img
              class="startupLogos-image"
              src="../../images/enspice.png"
            />
            <div
              class="startupLogos-background"
            ></div>
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    startups: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
  }),
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  cursor: pointer;
}

.startupLogos-logo {
  display: inline-block;
  position: relative;
  z-index: 0;
}

.startupLogos-logo:hover .startupLogos-background {
  background-color: #01A1DD !important;
  transform: skew(-25deg, 0) scale(1);
  /* opacity: 1; */
}

.startupLogos-image {
  width: 100%;
  
}

.startupLogos-background {
  transform: skew(-25deg, 0) scale(.9);
  display: block;
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  z-index: -100;
  /* opacity: 0; */
  transition-duration: 220ms;
  transition-timing-function: ease-out;
}

</style>