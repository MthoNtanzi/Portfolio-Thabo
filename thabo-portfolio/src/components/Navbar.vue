
<template>
    <div class="navBar">
        <nav class="desktop-nav">
            <router-link id="main-link" to="/">Online Portfolio</router-link>
            <router-link active-class="isActive" to="/about">About Me</router-link>
            <router-link active-class="isActive" to="/education">Education</router-link>
            <router-link active-class="isActive" to="/experience">Experience</router-link>
            <router-link active-class="isActive" to="/project">Project</router-link>
            <router-link active-class="isActive" to="/contact">Contact</router-link>
            <img src="../assets/design.svg" alt="" srcset="">
        </nav>

        <Slide width="300" :closeOnNavigation="true" class="mobile-nav">
            <div class="navBar">
                <router-link id="main-link" to="/">Online Portfolio</router-link>
                <router-link active-class="isActive" to="/about">About Me</router-link>
                <router-link active-class="isActive" to="/education">Education</router-link>
                <router-link active-class="isActive" to="/experience">Experience</router-link>
                <router-link active-class="isActive" to="/project">Project</router-link>
                <router-link active-class="isActive" to="/contact">Contact</router-link>
                <img src="../assets/design.svg" alt="Logo" class="menu-logo">
            </div>
        </Slide>
    </div>
</template>

<script>
    import { Slide } from 'vue3-burger-menu'

    export default {
        components: {
            Slide, // Register your component
        }
    }
</script>

<style scoped>

    .bm-burger-bars {
        background-color: white; 
    }

    .bm-burger-button {
        position: fixed;
        width: 36px;
        height: 30px;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }

    .desktop {
        display: flex;
        justify-content: space-around;
        background-color: #333;
        padding: 1rem;
    }

    .desktop-nav a {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        font-weight: bold;
    }

    .desktop-nav a.isActive {
    color: #38b6ff;
    }

    /* Mobile Burger Menu Styling */
    .mobile-nav {
        display: none; /* Hide burger menu by default */
    }

    /* Show Desktop Navbar on larger screens */
    @media (min-width: 801px) {
        .desktop-nav {
        display: flex;
        }
        .mobile-nav {
        display: none;
        }
    }

    /* Show Mobile Burger Menu on smaller screens */
    @media (max-width: 800px) {
        .desktop-nav {
        display: none;
        }
        .mobile-nav {
        display: block;
        }
    }

    /* Burger Menu Custom Styling */
    .navBar {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
    }
    .navBar a {
        color: white;
        text-decoration: none;
        padding: 0.7em;
        font-size: 18px;
    }
    .navBar img.menu-logo {
        margin-top: 1.5rem;
        width: 80%;
        max-width: 200px;
        color: white;
    }


</style>