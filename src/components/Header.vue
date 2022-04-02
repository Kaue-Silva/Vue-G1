<template>
    <header>
        <nav>
            <div id="logo">
                <router-link to="/">
                    <img src="@/assets/logo.png" alt="logo">
                </router-link>
            </div>
            <ul>
                <li><router-link to="/">Inicio</router-link></li>
                <li><router-link to="/noticias">Noticias</router-link></li>
            </ul>
        </nav>
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
    header {
        background-color: #253547;
        width: 100%;
    }

    nav {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }
    
    nav ul {
        list-style: none;
        display: flex;
        flex-direction: row;
    }

    nav ul li {
        margin: 0 10px;
        flex-direction: row;
    }
    
    nav ul li a {
        text-decoration: none;
        color: white;
        font-size: 25px;
        transition: .5s;
    }

    nav ul li a:hover {
        opacity: 0.5;
    }

    #logo {
        align-items: start;
    }
    
    #logo img{
        width: 60px;
    }
</style>