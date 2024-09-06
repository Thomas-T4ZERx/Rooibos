
<template>
    <div class="card">
        <Toolbar>
            <template #start>
                <Avatar image="https://i2.wp.com/www.primefaces.org/wp-content/uploads/2021/10/primevue-logo-1.png?fit=263%2C300&ssl=1" style="width: 32px; height: 32px" />
                <h3 style="margin-left: 15px;">Rooibos</h3>
            </template>

            <template #end>
                <IconField>
                    <InputIcon>
                        <i class="pi pi-search" />
                    </InputIcon>
                    <InputText placeholder="Search" />
                </IconField>
                <Button icon="pi pi-plus" class="mr-2" severity="secondary" text />
                <Button icon="pi pi-print" class="mr-2" severity="secondary" text />
                <Button icon="pi pi-upload" severity="secondary" text />
                    <div class="relative ">
                        <Button
                            @click="toggle"
                            aria-haspopup="true"
                            aria-controls="overlay_tmenu"
                            class="flex items-center gap-2 focus:outline-none border-none bg-transparent p-0 custom-topbar-btn"
                            style="background-color: transparent; border: transparent">
                            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" style="width: 32px; height: 32px" />
                            <span :class="{'text-white': isDarkMode, 'text-black': !isDarkMode}">
            Sauvageot Thomas
        </span>
                        </Button>
                    </div>
            </template>
        </Toolbar>




        <Popover ref="op">
            <div class="flex flex-col gap-4 w-[25rem]">
                <div>
                    <span class="font-medium block mb-2">Mode sombre</span>
<br>
                    <ToggleSwitch v-model="checked" @click="toggleDarkMode" />
                </div>
                <div>
                    <Button icon="pi pi-plus" class="mr-2" severity="secondary" text />
                    <Button icon="pi pi-print" class="mr-2" severity="secondary" text />
                    <Button icon="pi pi-upload" severity="secondary" text />
                </div>
            </div>
        </Popover>



    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
const isDarkMode = ref(false);

function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    const element = document.documentElement; // Utilisez document.documentElement pour accéder au <html>
    element.classList.toggle('my-app-dark', isDarkMode.value); // Applique la classe si isDarkMode est true
}

const op = ref();
const members = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
]);

const toggle = (event) => {
    op.value.toggle(event);
}

const items = ref([
    {
        label: 'Update',
        icon: 'pi pi-refresh'
    },
    {
        label: 'Delete',
        icon: 'pi pi-times'
    }
])
</script>


<style>
/* Couleur pour le mode clair par défaut */
.custom-topbar-btn span {
    color: black; /* Couleur pour le mode clair */
}

/* Mode sombre */
.my-app-dark .custom-topbar-btn span {
    color: white; /* Couleur pour le mode sombre */
}
</style>
