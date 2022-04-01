<template>
    <footer>
        <ul>
            <li><a href="#"><img src="@/assets/linkedin.png" alt="linkedin"></a></li>
            <li><a href="#"><img src="@/assets/github.png" alt="github"></a></li>
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
        height: 75px;
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