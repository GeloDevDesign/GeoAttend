<script setup>
import { ref } from "vue";
import { Menu } from "lucide-vue-next"; // Make sure to import all icons you might use

const props = defineProps({
    name: {
        type: String,
    },
    icon: {
        type: String,
    },
});

// Create a map of available icons
const icons = {
    Menu,
    // Add other icons here as needed
};
</script>

<template>
    <button class="btn btn-primary">
        <component :is="icons[props.icon]" />
        {{ props.name || "No button name" }}
    </button>
</template>
