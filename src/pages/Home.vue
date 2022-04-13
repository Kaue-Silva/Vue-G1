<template>
    <main>
        <div id="home">
            <p>Projeto Vue-G1, Front - End Criado para um projeto de API <a href="https://github.com/Kaue-Silva/Vue-G1/tree/master" target="_blank">disponível no github</a>, 
            API foi feita para fins educativos, assim como este site,
            site criado para consolidar conhecimentos em Vue.js.<br>
            </p>
            <br>
            <p>Tecnologias Usadas:</p>
            <ul>
                <li>Front-End
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Vue.js</li>
                        <li>Axios</li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li>Back-End
                    <ul>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>Selenium</li>
                    </ul>
                </li>
            </ul>
        </div>
    </main>
</template>
<script>
export default {
    name: "HomePage",
    components: {
    }
}
</script>
<style scoped>
    #home {
        border: solid 1px black;
        margin: 60px auto;
        width: 80%;
        padding: 40px;
    }

    #home p {
        font-size: 20px;
    }

    ul {
        margin-left: 25px;
        font-size: 20px;
    }
</style>