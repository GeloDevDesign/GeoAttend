<script setup>
import { ref } from "vue";
import { Menu } from "lucide-vue-next";
</script>

<template>
    <div class="navbar bg-primary text-white border-b-6 border-accent px-8 fixed top-0">
        <div class="flex-1 items-center justify-center">
            <div class="flex items-center">
                <div class="drawer w-14">
                    <input
                        id="my-drawer"
                        type="checkbox"
                        class="drawer-toggle"
                    />
                    <div class="drawer-content">
                        <!-- Page content here -->
                        <label
                            for="my-drawer"
                            class="btn btn-ghost btn-sm drawer-button"
                            ><Menu /></label
                        >
                    </div>
                    <div class="drawer-side">
                        <label
                            for="my-drawer"
                            aria-label="close sidebar"
                            class="drawer-overlay"
                        ></label>
                        <ul
                            class="menu bg-base-200 text-base-content min-h-full w-80 p-4"
                        >
                            <!-- Sidebar content here -->
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div>
              
                <img
                    class="h-10 aspect-square"
                    src="https://national-u.edu.ph/wp-content/uploads/2018/12/cropped-NU-Shield_FC_RGB_POS_AW.png"
                    alt=""
                />
                <a class="btn btn-ghost text-lg text-base-100" src="/public/favicon.ico"
                    >COMEX LIPA</a
                >
            </div>
        </div>
        <div class="flex items-center gap-4">
            <div>
                <p>Hi <span class="text-accent">Sigbin</span></p>
            </div>
            <div class="dropdown dropdown-end text-black">
                <div
                    tabindex="0"
                    role="button"
                    class="btn btn-ghost btn-circle avatar"
                >
                    <div class="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                    </div>
                </div>
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
