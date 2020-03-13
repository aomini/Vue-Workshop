<template>
  <div>
    <Navbar @on-search="searchMovie" />
    <div v-if="loading">
      <h1 class="loader">loading ....</h1>
    </div>
    <div class="row">
      <div class="col-md-6" v-for="movie in filteredMovies" :key="movie.id">
        <MovieList :list="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieList from "./../components/MovieList/MovieList.vue";
import Navbar from "./../components/Navbar/Navbar.vue";

export default {
  name: "App",
  components: {
    MovieList,
    Navbar,
  },
  mounted() {
    this.axios.get("http://api.tvmaze.com/shows?page=1").then(response => {
      this.movies = response.data;
      this.loading = false;
    });
  },
  computed: {
    filteredMovies() {
      return this.searchInput ? this.filterMovie() : this.movies;
    }
  },
  data() {
    return {
      movies: [],
      searchInput: "",
      loading: true
    };
  },
  methods: {
    searchMovie(input) {
      this.searchInput = input.toLowerCase();
    },
    filterMovie() {
      return this.movies.filter(movie => {
        return movie.name.toLowerCase().includes(this.searchInput);
      });
    }
  }
};
</script>