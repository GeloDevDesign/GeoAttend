import Swal from "sweetalert2";
import { ref } from "vue";

export function useAlertNotification() {
    const modalAlert = (title, text, icon = "warning") => {
        Swal.fire({
            title: title || "Are you sure?",
            text: text || "You won't be able to revert this!",
            icon: icon,
        });
    };

    const toastAlert = (title, text, icon = "warning", color = null) => {
        // Set background color based on icon type if color not specified
        const bgColor = color || getBackgroundColor(icon);
        const iconColor = getIconColor(icon);

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            background: bgColor,
            iconColor: iconColor,
            color: "#ffffff", // text color
            iconSize: "10px",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });

        Toast.fire({
            icon: icon,

            text: text || "",
        });
    };

    // Helper function to determine background color based on icon type
    const getBackgroundColor = (icon) => {
        switch (icon) {
            case "success":
                return "#4CAF50"; // Green
            case "error":
                return "#F44336"; // Red
            case "warning":
                return "#FF9800"; // Orange
            case "info":
                return "#2196F3"; // Blue
            case "question":
                return "#9C27B0"; // Purple
            default:
                return "#424242"; // Dark gray
        }
    };

    // Helper function to determine icon color
    const getIconColor = (icon) => {
        return "#ffffff"; // White icons for better contrast
    };

    return { modalAlert, toastAlert };
}
