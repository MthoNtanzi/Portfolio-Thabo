<template>
    <div class="navBar">
        <router-link id="main-link" to="/">Online Portfolio</router-link>
        <router-link active-class="isActive" to="/about">About Me</router-link>
        <router-link active-class="isActive" to="/education">Education</router-link>
        <router-link active-class="isActive" to="/experience">Experience</router-link>
        <router-link active-class="isActive" to="/project">Project</router-link>
        <router-link active-class="isActive" to="/contact">Contact</router-link>
        <img src="../assets/design.svg" alt="" srcset="">
    </div>
    
</template>

<style>
    .navBar{
        padding: 1.25rem;
        display: flex;
        justify-content: space-between;
        font-weight: 700;
    }

    .navBar a{
        padding: 0.3rem 1rem;
        color: white;
        text-decoration: none;
        font-size: 16px;
        letter-spacing: 0.08rem;
    }
    #main-link{
        background-color: #38b6ff;
        color: #161616;
    }
    .navBar a.isActive{
        color: #38b6ff;
    }
</style>