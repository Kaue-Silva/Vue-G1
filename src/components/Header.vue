<template>
    <header class="cabecalho">
        <div class="logo">
            <img src="@/assets/logo.png" alt="logo project g1">
        </div>
        <div class="social">
            <ul>
                <li><a href="https://www.linkedin.com/in/kaue-silva2004/"><img src="@/assets/linkedin.png" alt="linkedin link"></a></li>
                <li><a href="https://github.com/Kaue-Silva"><img src="@/assets/github.png" alt="github link"></a></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderPage",
    data() {
        return {

        }
    }

}
</script>
<style scoped>
    .cabecalho {
        top: 0;
        display: flex;
        flex-grow: wrap;
        flex-direction: row;
        background-color: var(--wp--preset--color--blue);
        height: 90px;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    
    .logo {
        margin-left: 15px;
    }
    
    .social {
        margin-right: 20px;
    }

    @media (max-width: 500px) {
        .logo img {
            width: 120px;
            height: 80px;
        }

        .social {
            display: none;
        }
    }
    
</style>