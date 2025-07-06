import Swal from "sweetalert2";
import { ref } from "vue";

export function useAlertNotification() {
    const modalAlert = (title, text, icon = "warning") => {
        Swal.fire({
            title: title || "Are you sure?",
            text: text || "You won't be able to revert this!",
            icon: icon,
            showConfirmButton: false,
            showCloseButton: true,
            timer: 3000,
        });
    };

    const toastAlert = (title, text, icon = "warning") => {

        const colorConfig = getBackgroundColor(icon);
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            background: colorConfig.bg,
            iconColor: colorConfig.text,
            color: colorConfig.text,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });

        Toast.fire({
            title: title || "Are you sure?",
            icon: icon,
            text: text || "",

        });
    };

    // Helper function to determine background color based on icon type
    const getBackgroundColor = (icon) => {
        switch (icon) {
            case "success":
               return { bg: "#e8fdf0", text:"#166534" };
            case "error":
                return { bg: "#fee8e8", text: "#b91c1c" };
            case "warning":
              return { bg: " #fef9e8", text: "#b45309" };
            case "info":
                return { bg: "#e8f2fe", text: "#1d4ed8" };
            default:
                return "#424242"; 
        }
    };

    // Helper function to determine icon color
    const getIconColor = (icon) => {
        return "#ffffff"; // White icons for better contrast
    };

    return { modalAlert, toastAlert };
}
