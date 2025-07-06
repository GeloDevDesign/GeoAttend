<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import Banner from "../Components/Banner.vue";
import PrimaryButton from "../Components/PrimaryButton.vue";
import { useAlertNotification } from "../Composables/AlertNotify";

const { toastAlert, modalAlert } = useAlertNotification();

// Different toast examples
const showSuccessToast = () => {
    toastAlert("Success!", "Operation completed successfully", "success");
};

const showErrorToast = () => {
    toastAlert("Error!", "Something went wrong", "error");
};

const showWarningToast = () => {
    toastAlert("Warning", "This action cannot be undone", "warning");
};

const showInfoToast = () => {
    toastAlert("Information", "Here's something you should know", "info");
};

const showCustomToast = () => {
    toastAlert("Custom", "This has a special color", "question", "#9C27B0");
};

// Modal examples
const showConfirmModal = () => {
    modalAlert("Are you sure?", "This action is permanent", "warning");
};

const showSuccessModal = () => {
    modalAlert("Success!", "Your changes were saved", "success");
};
</script>

<template>
    <Banner />

    <section class="lg:px-10 md:px-8 px-6 pt-22">
        <div class="flex flex-wrap gap-4 mb-4">
            <PrimaryButton name="Success Toast" @click="showSuccessToast" />
            <PrimaryButton name="Error Toast" @click="showErrorToast" />
            <PrimaryButton name="Warning Toast" @click="showWarningToast" />
            <PrimaryButton name="Info Toast" @click="showInfoToast" />
            <PrimaryButton name="Custom Toast" @click="showCustomToast" />
        </div>
        
        <div class="flex flex-wrap gap-4">
            <PrimaryButton name="Confirm Modal" @click="showConfirmModal" />
            <PrimaryButton name="Success Modal" @click="showSuccessModal" />
        </div>
        
        <slot />
    </section>
</template>