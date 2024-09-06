<template>
    <div class="layout-sidebar">
        <Menu :model="items" class="layout-menu-container"/>
    </div>
</template>

<script setup>
import { ref } from "vue";
import MegaMenu from 'primevue/megamenu';


const items = ref([
    {
        label: 'Documents',
        items: [
            {
                label: 'Dashboard',
                icon: 'pi pi-home'
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            }
        ]
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog'
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out'
            }
        ]
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog'
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out'
            }
        ]
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog'
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out'
            }
        ]
    },
]);
</script>

<style scoped>
</style>
