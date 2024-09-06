<template>
    <Textarea v-model="value" rows="5" cols="30" :invalid="value ===''"  />
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
</script>
