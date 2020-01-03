<template>  
    <div class="startupContainer">
        <div v-for="item in startups" :key="item.name">
            <a @click="item.open=true" class="startupLogos-logo">
                <img
                    class="startupLogos-image startupLogos-btn"
                    :src="item.colorLogo" 
                    alt="hello"
                />
                <div class="startupLogos-background"></div>
            </a>
            <mdc-dialog v-model="item.open" elevation="24dp">
                <mdc-card-header :title="item.name" class="startupCard-header">
                    <div style="display: grid; grid-template-columns: 55px auto;">
                        <mdc-card-action-icon 
                          icon="close" 
                          style="margin-right: 0 !important; color: #000 !important;" 
                          @click="item.open=false"
                        />
                        <mdc-headline style="padding: 3px 0; margin: 0; color: #000 !important;">{{item.name}}</mdc-headline>
                    </div>
                </mdc-card-header>
                <mdc-drawer-divider/>
                <mdc-card-text class="startupCard-text">
                    <div class="startupCard-imagebox">
                        <img
                            class="startupLogos-image"
                            :src="item.colorLogo" 
                            alt="hello"
                        />
                    </div>
                    {{ item.nonConfidentialSummary }}
                </mdc-card-text>
                <mdc-drawer-divider/>
                <mdc-card-actions style="padding: 18px;">
                    <mdc-card-action-icons>
                      <mdc-button dense class="actionBtn actionBtn-contact" :href="'mailto:' + item.contactEmail">Contact</mdc-button>
                      <mdc-button dense class="actionBtn actionBtn-website" :href="item.websiteLink">Website</mdc-button>
                    </mdc-card-action-icons>
                </mdc-card-actions>
            </mdc-dialog>   
        </div>
    </div>
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
      .then(response => {
          response.data.forEach(element => {
              element.open = false
          });
          this.startups = response.data;
        })
  },

  methods: {

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

.startupContainer {
  margin: 30px auto;
  padding: 20px 40px;
  width: 100%; 
  display: grid;
  /* Define Auto Row size */
  grid-auto-rows: 100px; 
  /*Define our columns */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  grid-gap: 1em;
}

.actionBtn-website {
  border: 1.5px solid #2B324F !important;
  color: #2B324F !important;
}

.actionBtn-contact {
  border: 1.5px solid #D4AE41 !important;
  margin-right: 20px;
  color: #D4AE41 !important;
}

.actionBtn {
  width: 120px !important;
  border-radius: 0 !important;
}

.actionBtn:hover {
  background-color: rgba(0, 0, 0, 0.05) !important;
  transition: 500ms;
}

.v-dialog {
  -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0) !important; 
  -moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0) !important;
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,0) !important;
  filter: drop-shadow(-4px 4px 3px rgba(0, 0, 0, 0.12)) !important;
}

.mdc-dialog__surface {
  max-width: 500px !important;
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

.mdc-dialog__body {
  padding-bottom: 0 !important;
}

.mdc-dialog__footer {
  display: none !important;
}

.startupCard-header {
  padding-top: 0 !important;
  padding-left: 0 !important;
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
  background-color: #FFF !important;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,.25) !important;
  transform: skew(-30deg, 0) scale(1);
}

.startupLogos-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.startupLogos-btn {
  filter: grayscale(1);
}

.startupLogos-image:hover {
  filter: grayscale(0);
  transition: 220ms;
}
.startupCard-imagebox {
  width: 200px;
  height: 100px;
}
.startupLogos-background {
  transform: skew(-30deg, 0) scale(.9);
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