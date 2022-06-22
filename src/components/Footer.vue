<template>
    <footer class="rodape">
        <div class="social">
            <ul>
                <li><a href="#"><img src="@/assets/linkedin.png" alt="linkedin link"></a></li>
                <li><a href="#"><img src="@/assets/github.png" alt="github link"></a></li>
            </ul>
        </div>
        <div class="autor">
            <p>Projeto By: Kauê Silva de Carvalho</p>
            <p>Projeto Para Fins Educativos</p>
        </div>
        <div class="logo">
            <img src="@/assets/logo.png" alt="logo project g1">
        </div>
        <!-- <ul>
            <li><a href="https://www.linkedin.com/in/kaue-silva2004/" target="_blank"><img src="@/assets/linkedin.png" alt="linkedin"></a></li>
            <li><a href="https://github.com/Kaue-Silva" target="_blank"><img src="@/assets/github.png" alt="github"></a></li>
        </ul> -->
    </footer>
</template>
<script>
export default {
    name: "FooterPage",
}
</script>
<style scoped>
    .rodape {
        position: static;
        bottom: 0;
        display: flex;
        flex-direction: row;
        background-color: var(--wp--preset--color--blue);
        justify-content: space-between;
        align-items: center;
        height: 90px;
        width: 100%;
    }

    .autor {
         font-family: 'Tekton Pro', 'Georgia';
         color: var(--wp--preset--color--white);
         font-size: 20pt;
         text-align: center;
    }

    .social {
        margin: 0px 10px;
    }

    .logo {
        margin: 0px 10px;
    }
</style>