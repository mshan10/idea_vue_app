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
          <v-dialog
            :v-model="item.name"
            width="700"
            v-for="item in startups"
            :key="item.name"
            elevation="0"
            :retain-focus="false"
          >
            <template v-slot:activator="{ on }">
              <div class="startupLogos-container">
                <a
                  class="startupLogos-logo"
                  v-on="on"
                >
                  <img
                    class="startupLogos-image"
                    :src="item.colorLogo" 
                    alt="hello"
                  />
                  <div
                    class="startupLogos-background"
                  ></div>
                </a>
              </div>
            </template>

            <v-card class="startupCard-shape" elevation="10" >
              <v-card-title>
                <v-btn text left icon>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <span style="margin-left: 12px">{{item.name}}</span>
              </v-card-title>
              <v-divider />
              <v-card-text class="startupCard-text">
                <div class="startupCard-imagebox">
                  <img
                    class="startupLogos-image"
                    :src="item.colorLogo" 
                    alt="hello"
                  />
                </div>
                {{item.nonConfidentialSummary}}
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions class="startupCard-actions">
                <v-spacer></v-spacer>
                <v-btn
                  color="#2B324F"
                  outlined
                  width="120px"
                  class="actionBtn-website"
                  :href="item.websiteLink"
                >
                  Website
                </v-btn>
                <v-btn
                  color="#D4AE41"
                  outlined
                  width="120px"
                  class="actionBtn-contact"
                  @click="dialog = false"
                >
                  Contact
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const axios = require('axios').default;
export default {

  name: 'HelloWorld',

  data: function(){
    return {
      startups: [],
    }
    
  },
  mounted(){
    axios
      .get('http://localhost:4000/startups')
      .then(response => (this.startups = response.data))
  },

  methods: {
    // method1: () => {
    //   console.log('Started')
    // },

    // update: (event) => {

    //   value = event.target.value;

    //   this.info = value;
    //   console.log(value)
    // }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.actionBtn-website {
  border-radius: 0 !important;
  border: 2px solid #2B324F;
  color: #2B324F;
}

.actionBtn-contact {
  border-radius: 0 !important;
  border: 2px solid #D4AE41;
  border-color: #D4AE41;
  margin-right: 20px;
}
.v-dialog {
  -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0) !important; 
  -moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0) !important;
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,0) !important;
  filter: drop-shadow(-4px 4px 3px rgba(0, 0, 0, 0.12));
}

.startupCard-shape {
  clip-path: 
    polygon(
      0% 20px,                 /* top left */
      20px 0%,                 /* top left */
      calc(100% - 20px) 0%,    /* top right */
      100% 20px,               /* top right */
      100% calc(100% - 20px),  /* bottom right */
      calc(100% - 20px) 100%,  /* bottom right */
      20px 100%,               /* bottom left */
      0 calc(100% - 20px)      /* bottom left */
    );
}

.startupCard-text {
  min-height: 400px;
  padding: 12px 42px !important;
}

.startupCard-actions {
  padding: 12px 0px !important;
}

.startupLogos-container {
  width: auto;
}

.startupLogos-logo {
  display: inline-block;
  position: relative;
  z-index: 0;
  margin: 30px 0;
  width: 200px;
  height: 100px;
}

.startupLogos-logo:hover .startupLogos-background {
  background-color: #01A1DD !important;
  transform: skew(-20deg, 0) scale(1);
  /* opacity: 1; */
}

.startupLogos-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.startupCard-imagebox {
  width: 200px;
  height: 100px;
}
.startupLogos-background {
  transform: skew(-20deg, 0) scale(.9);
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