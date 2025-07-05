<script setup>
import { ref } from "vue";

const props = defineProps({
    title: {
        type: String,
        default: "No Header",
    },
    description: {
        type: String,
        default: "No Description",
    },
});
</script>

<template>
    <h3 class="lg:text-3xl md:text-2xl text-lg text-gray-700 mb-1 font-medium">
        {{ props.title }}
    </h3>
    <p class="text-gray-500">{{ props.description }}</p>
</template>
