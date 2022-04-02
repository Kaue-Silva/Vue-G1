<template>
    <main>
        <h1>Noticias</h1>
        <h2 v-if="msg_carregamento">agurde o servidor terminar a consulta</h2>
        <div v-else v-for="noticia in noticias" :key="noticia.id">
            <div class="noticia">
                <img class="imagem" :src="noticia.imagem" alt="imagem noticia">
                <div class="texto-noticia">
                    <div class="titulo">{{ noticia.titulo }}</div>
                    <div class="complemento">
                        <ul>
                            <li v-for="(complemento, index) in noticia.complementos" :key="index" v-show="complemento">{{ complemento }}</li>
                        </ul>
                    </div>
                    <div class="hora-local">{{ noticia.hora_local }}</div>
                </div>
            </div>
            <div class="separador"></div>
        </div>
    </main>
</template>

<script>
import api from "@/services/api"

export default {
    name: "NoticiasPage",
    data() {
        return {
            noticias: [],
            msg_carregamento: true,
        }
    }, 
    methods: {
        async getNoticias() {
            await api.get("/noticias")
            .then((response) => {
                this.noticias = response.data
                this.msg_carregamento = false
            })
            .catch(() => {
                this.getNoticias()
            })
        }
    },
    mounted() {
        this.getNoticias()
    },
}
</script>

<style scoped>
    h1 {
        margin: 15px;
        color: rgb(218, 69, 69);
    }

    h2 {
        margin: 15px;
    }

    .main {
        height: calc(100vh - 75px);
    }
    
    .noticia {
        margin: 20px;
        display: flex;
    }
    .imagem {
        border: solid 1px black;
        width: 350px;
        height: 260px;
    }

    .texto-noticia {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .titulo {
        font-size: 40px;
        font-family: 'Times New Roman', 'Georgia';
    }

    .complemento {
        margin: 0 20px;
        font-size: 25px;
    }

    .hora-local {
        font-size: 20px;
    }

    .separador {
        width: 90%;
        margin: 0 auto;
        height: 5px;
        border: solid 1px black;
        background-color: black;
    }

</style>>
