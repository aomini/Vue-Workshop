<template>
    <div>
        <Navbar :searchInput="false" />
        <div>
            <div class="detail-header d-flex">
                <div class="banner" :style="`background: url('${movie.image.original}')`"></div>
                <div style="margin-left: 30px">
                    <div class="show-details">
                        <h1>{{movie.name}}</h1>
                    </div>
                    <div class="more-details">
                        Ratings : {{movie.rating.average ? movie.rating.average : 0}}<br>
                        Language : {{movie.language}} <br>
                        Genre : {{movie.genres.join(' ')}}<br/>
                        Runtime : {{movie.runtime}} <br/>
                        Premiered : {{movie.premiered}}
                    </div>
                    <br/>
                    <p class="detail-summary" v-html="movie.summary">
                    </p>
                </div>
            </div>
            <br/>
            <div class="episodes">
                <h2>EPISODES</h2>
                <ul>
                    <li v-for="episode in episodes" :key="episode.id">
                        <div class="d-flex">
                            <h4>
                                {{episode.number}}. &nbsp;&nbsp;&nbsp;&nbsp; {{episode.name}}
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './../Navbar/Navbar'
export default {
    components : {
        Navbar
    },
    mounted(){
        this.axios.get(`http://api.tvmaze.com/shows/${this.$route.params.id}`).then(response => {
            this.movie = response.data;
            this.axios.get(`http://api.tvmaze.com/shows/${this.$route.params.id}/episodes`).then(response => {
                this.episodes = response.data;
            });
        })
    },
    data(){
        return {
            movie : {},
            episodes : []
        }
    }
}
</script>

<style scoped>

    .more-details{
        color: white;
    }

    .banner{
        height: 400px;
        max-width: 100%;
        min-width: 300px;
        background-repeat: no-repeat !important;
        background-size: contain !important;
    }

    .show-details{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

    .detail-summary{
        color: white;
        margin-bottom: 0;
    }

    .episodes h2{
        color: white;
    }

    ul{
        list-style: none;
        padding: 0;
    }

    ul li {
        color: black;
        background:white;
        margin: 5px 0 5px;
        padding: 8px;
    }

</style>