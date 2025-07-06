<script setup>
import { ref } from "vue";
import { Menu,Pencil } from "lucide-vue-next";

const icons = {
    Menu,Pencil
};

const props = defineProps({
    name: {
        type: String,
    },
    icon: {
        type: String,
    },
});
</script>

<template>
    <button class="btn btn-primary">
        <component v-if="props.icon" :is="icons[props.icon]" />
        {{ props.name || "No button name" }}
    </button>
</template>
