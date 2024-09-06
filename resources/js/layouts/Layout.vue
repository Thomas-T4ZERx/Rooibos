<template>
    <div class="layout">
        <header class="header ">
            <layout-nav-bar/>
        </header>

        <div class="main">
            <aside class="nav">
                <layout-left-menu/>
            </aside>

            <div class="content">
                <slot></slot>


            </div>

        </div>
        <footer class="footer">
            <layout-footer/>
        </footer>
    </div>

</template>

<script setup>
import LayoutNavBar from "./LayoutNavBar.vue";
import 'primeicons/primeicons.css';
import LayoutLeftMenu from "./LayoutLeftMenu.vue";
import LayoutFooter from "./LayoutFooter.vue";
</script>

<style scoped>
html, body {
    height: 100%;
    margin: 0;
}

.layout {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.header {
    flex: 0 0 auto; /* Ne pas étirer le header */
}

.main {
    display: flex;
    flex: 1; /* Prend tout l'espace disponible */
}

.nav {
    flex: 0 0 300px; /* Largeur fixe ou ajustable pour le menu */
    display: flex;
    flex-direction: column;
}

.content {
    flex: 1; /* Prend tout l'espace restant */
    overflow: auto;
}

.footer {
    flex: 0 0 auto; /* Ne pas étirer le footer */
}
</style>
