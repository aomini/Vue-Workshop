
<template>
  <div class="card">
    <div class="card-header">
      <img class="card-img" :src="list.image.medium" alt="Card image" style="min-width: 200px" />
    </div>
    <div class="card-body">
      <h1 class="card-title">{{list.name}}</h1>
      <div class="container">
        <div class="row d-flex align-items-center justify-content-between">
          <div class="d-flex" style="padding-left :0">
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="margin-top: 2px;color: goldenrod;"
            ></i>
            <p style="margin-bottom:5px;">{{list.rating.average || 0}}/10</p>
          </div>
          <div>{{list.genres.join(' ')}}</div>
        </div>
      </div>
      <p class="card-text" v-html="list.summary" style="overflow:hidden;max-height:118px;"></p>
      <div class="buttons">
      <DangerButton @on-handle-click="favourite">Favourites</DangerButton>
      <router-link :to="`/detail/${list.id}`" style="color:white;text-decoration:none;"> <InfoButton>View</InfoButton></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data(){
    return {
      name : ''
    }
  },
  methods: {
    viewMovieDetails(e) {
      e.preventDefault();
    },
    favourite(e){
      e.preventDefault();
      alert('Favoutirte');
    }   
  }
};
</script>

<style lang="scss">
@import "./movieList.styles.scss";
</style>