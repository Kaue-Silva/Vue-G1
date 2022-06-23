<template>
    <main class="container">
        <div class="carregamento" v-if="msg_carregamento">
            <img src="https://media3.giphy.com/media/xKqbhrk8PL1CVqmKgY/giphy.gif?cid=ecf05e47pr7y4i4hw9qesx34r1ir0zl6sejusspncd9vswuk&amp;rid=giphy.gif&amp;ct=g" alt="fitness loading GIF by Gym Career">
            <h2>agurde o servidor terminar a consulta</h2>
        </div>
        <div class="container-noticia" v-for="noticia in noticias" :key="noticia.id">    
            <div class="noticia">
                <div class="imagem">
                    <img :src="noticia.imagem" alt="imagem noticia" v-if="noticia.imagem">
                </div>
                <div class="noticia-informacao">
                    <h1>{{ noticia.titulo }}</h1>
                    <ul>
                        <li v-for="(complemento, i) in noticia.complementos" :key="i">{{ complemento }}</li>
                    </ul>
                    <div class="data-hora">
                        <ul>
                            <li>{{ noticia.hora }}</li> <li v-if="noticia.hora && noticia.local">&nbsp;-&nbsp;</li> <li>{{ noticia.local }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="divisoria"></div>
        </div>
    </main>
</template>
<script>
import api from "@/services/api"

export default {
    name: "HomePage",
    data() {
       return {
           noticias: [],
           msg_carregamento: true
       }
    }, 
    components: {},
    methods: {
        async getNoticias() {
            await api.get("/noticias")
            .then((response) => {
                this.noticias = response.data
                this.msg_carregamento = false
            })
        }
    },
    mounted() {
        this.getNoticias()
    },
}
</script>
<style scoped>
    .container {
        min-height: 483px;
    }

    .carregamento{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 400px;
    }

    .carregamento img {
        height: 200px;
        width: 200px;
    }

    .noticia {
        display: flex;
        flex-direction: row;
        margin: 0px auto;
        margin-top: 45px;
        width: 80%;
    }

    .imagem {
        display: flex;
        justify-content: left;
    }
    .imagem img {
        width: 400px;
        max-height: 225px;
    }

    .noticia-informacao {
        display: flex;
        flex-direction: column;
        flex-grow: wrap;
        align-items: flex-start;
        justify-content: space-between;
        margin: 10px 30px;
        font-family: tekton-pro, Georgia;
        min-height: 160px;
    }

    .noticia-informacao > ul {
        margin-left: 20px;
    }

    .noticia-informacao h1 {
        font-size: 27pt;
    }

    .noticia-informacao li, .data-hora li {
        font-size: 13pt;
    }

    .data-hora ul {
        list-style: none;
        display: flex;
        flex-direction: row;
    }

    /* .data-hora li {
        margin: 0 3px;
    } */

    .divisoria {
        height: 3px;
        width: 90%;
        background-color:grey;
        margin: 45px auto;
        border-radius: 20px;
    }

    @media (max-width:500px) {
        .noticia {
            flex-direction: column;
            width: 90%;
        }
        
        .imagem {
            justify-content: center;
        }
        
        .imagem img {
            width: 90%;
            max-height: 225px;
        }

        .noticia-informacao h1 {
            font-size: 19pt;
        }

        .noticia-informacao li {
            font-size: 15pt;
        }

    }
</style>