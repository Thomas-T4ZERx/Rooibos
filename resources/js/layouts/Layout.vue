<template>
    <div class="layout">
        <header class="header ">
            <layout-nav-bar/>
        </header>


        <aside class="nav">
            <layout-left-menu/>
        </aside>
            <div class="layout-main-container">

                <div class="layout-main">

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
</style>
