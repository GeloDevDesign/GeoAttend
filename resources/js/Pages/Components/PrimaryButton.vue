<script setup>
import { ref } from "vue";
import { Menu, Pencil } from "lucide-vue-next";

const icons = {
    Menu,
    Pencil,
};

const props = defineProps({
    name: {
        type: String,
    },
    icon: {
        type: String,
    },
    iconSize: {
        type: String,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <button :disabled class="btn btn-primary">
        <component
            v-if="props.icon"
            :is="icons[props.icon]"
            :size="iconSize || '20'"
        />
        {{ props.name || "No button name" }}
    </button>
</template>
