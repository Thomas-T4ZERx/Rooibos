<template>
    <div class="layout-sidebar">
        <Menu :model="items" class="layout-menu-container">
            <template #item="{ item, props }">

                <a v-ripple @click="test(item)" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </template>
        </Menu>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { router } from '@inertiajs/vue3'

const items = ref([
    {
        label: 'Router Link',
        icon: 'pi pi-palette',
        route: 'test'
    },
    {
        label: 'dash Link',
        icon: 'pi pi-palette',
        route: '/'
    },
]);
function test(item){
    console.log(item.route)
    router.visit(item.route)
}
</script>

<style scoped>
</style>
