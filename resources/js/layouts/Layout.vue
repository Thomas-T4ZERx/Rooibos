<script setup>

import LayoutNavBar from "./LayoutNavBar.vue";
import 'primeicons/primeicons.css'


</script>

<template>





    <div class="header">
        <div class="header-text">
            <layout-nav-bar/>

        </div>
    </div>

    <div class="nav">

    </div>

    <div class="main">
        <div class="content">
            <slot></slot>
        </div>

        <div class="sidebar">
        </div>
    </div>

    <div class="footer">
    </div>

</template>

<style scoped>
.my-switch-slider {
    border-radius: 0;
}

.my-switch-slider:before {
    border-radius: 0;
}
</style>
