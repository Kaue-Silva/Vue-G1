<template>
    <footer>
        <ul>
            <li><a href="https://www.linkedin.com/in/kaue-silva2004/" target="_blank"><img src="@/assets/linkedin.png" alt="linkedin"></a></li>
            <li><a href="https://github.com/Kaue-Silva" target="_blank"><img src="@/assets/github.png" alt="github"></a></li>
        </ul>
    </footer>
</template>
<script>
export default {
    name: "FooterPage",
}
</script>
<style scoped>
    footer {
        background-color: #253547;
        width: 100%;
        margin-top: 10px ;
        position: fixed;
        bottom: 0;
    }

    footer ul {
        display: flex;
        justify-content: center;
    }
    
    footer ul li {
        list-style: none;
        margin: 0 5px;
    }
    
    footer ul li a img {
        width: 50px;
    }
</style>