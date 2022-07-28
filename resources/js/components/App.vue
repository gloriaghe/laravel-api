<template>
    <main>
        <section class="container">
            <h1 class="text-center">BOOLPRESS</h1>
            <div class="row g-3 mt-4">
                <div class="col-sm-6 col-md-4 p-4" v-for="post in posts" :key="post.id">
                    <div class="card h-100">
                        <img :src="post.image" class="card-img-top" :alt="post.title">
                        <div class="card-body d-flex flex-column  pt-4">

                            <h5 class="card-title text-uppercase">{{ post.title }}</h5>
                            <p class="card-text mb-auto">{{ post.excerpt }}</p>
                            <a :href="baseUrl + '/posts/' + post.slug" class="btn btn-primary  mt-4"><strong>VEDI
                                    POST</strong></a>
                        </div>
                    </div>
                </div>
                <nav id="pagination" aria-label="...">
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
    </main>
</template>

<script>
import Axios from 'axios'

export default {
    name: 'App',
    components: {

    },
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

main {
    background-color: #C4FFF9;
    min-height: 100vh;

    .container {
        .text-center {
            color: #3DCCC7;
            padding-top: 30px;
            font-weight: bolder;
        }

        .card {
            padding: 20px;

            .btn {
                background-color: #3DCCC7;
                border: none;
                width: 50%;
                align-self: center;
            }
        }

        #pagination {
            margin: 0 auto;

            .active{
                --bs-pagination-active-bg: #3DCCC7;
                --bs-pagination-active-border-color: #3DCCC7;
            }
        }
    }

}
</style>
