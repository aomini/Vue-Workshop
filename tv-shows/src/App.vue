<template>
  <div id="app">
    <div class="container">      
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.loader {
  text-align: center;
  height: 200px;
  margin-top: 100px;
  font-size: 6rem;
  font-weight: 100;
  letter-spacing: 2px;
  text-align: center;
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f32626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 0.9s infinite linear;
}

@-webkit-keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
</style>
