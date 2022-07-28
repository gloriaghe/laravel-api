<template>
    <section class="container">
        <h1 class="text-center">Boolpress</h1>
        <div class="row g-2">
            <div class="col-sm-6 col-md-4" v-for="post in posts" :key="post.id">
                <div class="card h-100">
                    <img :src="post.image" class="card-img-top" :alt="post.title">
                    <div class="card-body d-flex flex-column">

                        <h5 class="card-title">{{ post.title }}</h5>
                        <p class="card-text mb-auto">{{ post.excerpt }}</p>
                        <a :href="baseUrl + '/posts/' + post.slug" class="btn btn-primary">Vedi di più</a>
                    </div>
                </div>
            </div>
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
import Axios from 'axios'

export default {
    name: 'App',
    data() {
        return {
            baseUrl: window.location.origin,
            posts: []
        }
    },
    created() {
        //facciamo la richiesta all'API
        axios.get('http://127.0.0.1:8000/api/posts')
            .then(risposta => {
                this.posts = risposta.data.response.data;
                console.log(risposta);
            })
            .catch(error => console.log('errore API'));
    }
}
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap';
</style>
