<template>
    <header>
        <nav>
            <div id="logo">
                <a href="#">
                    <img src="@/assets/logo.png" alt="logo">
                </a>
            </div>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Noticias</a></li>
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
        font-family: Georgia;
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