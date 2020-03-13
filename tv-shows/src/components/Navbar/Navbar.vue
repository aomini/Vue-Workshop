<template>
  <nav
    class="navbar navbar-expand-lg navbar-light"
    style="background-color:#05158e;margin-top:10px;border-radius:4px;padding:0px;"
  >
    <a
      class="navbar-brand"
      href="#"
      data-abc="true"
      style="font-weight:bolder;font-size:90px;color:#ffc107;"
    >SHOWTIME !</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor02"
      aria-controls="navbarColor02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end">
      <!-- <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" data-abc="true">
            Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-abc="true">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-abc="true">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-abc="true">Contact</a>
        </li>
      </ul> -->
      <form class="form-inline my-2 my-lg-0" v-if="searchInput">
        <FormInput class="searchInput" type="text" placeholder="Search.." @on-handle-keyup="searchMovie"/>
      </form>
    </div>
  </nav>
</template>
<script>
export default {
  props: {
    searchInput : {
      default : true
    }
  },
  methods : {
    searchMovie(input){
      this.$emit('on-search', input);
    }
  }
};
</script>

<style lang="scss">
@import "./navbar.styles.scss";
.searchInput{
    margin-right:2px;    
}
</style>