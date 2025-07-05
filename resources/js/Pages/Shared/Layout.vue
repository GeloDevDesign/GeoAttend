<script setup>
import { ref, defineOptions } from "vue";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import Banner from "../Components/Banner.vue";

const test = () => {
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question",
    });
};
</script>

<template>
    <Banner />
    <section class="lg:px-10 md:px-8 px-6 pt-22">
        <slot />
    </section>
</template>
