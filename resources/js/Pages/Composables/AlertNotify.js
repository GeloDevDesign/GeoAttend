import Swal from "sweetalert2";

import { ref, onMounted, onUnmounted } from "vue";

// by convention, composable function names start with "use"
export function useAlertNotification() {
    // state encapsulated and managed by the composable
    const x = ref(0);
    const y = ref(0);

    // a composable can update its managed state over time.
    const modalAlert = (event) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
            }
        });
    };

    const toastAlert = () => {};

    // a composable can also hook into its owner component's
    // lifecycle to setup and teardown side effects.
    onMounted(() => window.addEventListener("mousemove", update));
    onUnmounted(() => window.removeEventListener("mousemove", update));

    // expose managed state as return value
    return { x, y };
}
