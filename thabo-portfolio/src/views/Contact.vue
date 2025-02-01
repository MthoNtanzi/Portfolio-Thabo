<script setup>
import { reactive } from 'vue';

const person = reactive({
    phoneNumber: '+27 84 968 4995',
    email: 'chaukethabo@gmail.com',
    linkedin: 'https://www.linkedin.com/in/thabo-chauke/',
    github: 'https://github.com/ThaboChauke',
    address: 'Based in Johannesburg, SA'
})
</script>

<template>
    <div class="contact">
        <h1 class="headings">Get in touch</h1>
        <h2 class="headings">Connect With Me</h2>
        <div class="details">
            <div class="type">
                <img src="../assets/call.svg" alt="">
                <h1>Phone & Mobile</h1>
                <p>{{ person.phoneNumber }}</p>     

                <!-- Improvised -->
                <!-- <p><a :href="'tel:' + person.phoneNumber">{{ person.phoneNumber }}</a></p> -->
            </div>
            <div class="type">
                <img src="../assets/email.svg" alt="">
                <h1>Email</h1>
                <p>{{ person.email }}</p>

                <!-- Improvised -->
                <!-- <p><a :href="'mailto:' + person.email">{{ person.email }}</a></p> -->
            </div>
            <div class="type">
                <img src="../assets/address.svg" alt="">
                <h1>Address</h1>
                <p>{{ person.address }}</p>
            </div>
            <div class="type">
                <img src="../assets/linkedin.svg" alt="">
                <h1>Social Media</h1>
                <p><a :href="person.linkedin" target="_blank">LinkedIn Profile</a></p>

                <!-- Improvised -->
                <!-- <p><a :href="person.linkedin" target="_blank"><span></span><i class="pi pi-linkedin" alt="Linkedin"></i></a>
                &nbsp;
                <a :href="person.github" target="_blank"><i class="pi pi-github" alt="Github"></i></a></p> -->

            </div>
        </div>
    </div>
</template>
<style>
    .headings{
        padding: 2rem 3rem;
        text-align: center;
    }

    .details{
        display: flex;
        justify-content: center;
        gap: 2.4rem;
        flex-wrap: wrap;
        margin-top: 2rem;
    }

    .type{
        text-align: center;
    }

    .type img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 3rem;
        max-width: 100%;
        height: auto;
    }

    a {
        font-family: "Space Mono", serif;
        font-weight: 400;
        color: white;
        text-decoration: none;
    }

    a:visited {
        color: lightblue;
    }

    a:hover {
        color: blue;
    }

    .type p {
        font-size: 1rem;
    }

    .type h1 {
        font-size: 1.6rem;
        margin-top: 1rem;
    }

    @media (max-width: 768px) {
        .details {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
        }
    }

    @media (max-width: 768px) {
        .type img {
            width: 3rem;
        }
    }

    @media (max-width: 768px) {
        .headings {
            font-size: 1.5rem;
            padding: 1.5rem 2rem;
        }
    }

    @media (max-width: 768px) {
        .type h1 {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 768px) {
        .type p {
            font-size: 0.9rem;
        }   
    }
</style>