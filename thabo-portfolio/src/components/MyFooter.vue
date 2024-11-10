<template>
    <div class="footer">
        <p>Thabo Chauke</p>
        <!-- <img src="../assets/design.svg" alt="" srcset=""> -->
        <p>{{ year }}</p>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
    
    }
</script>

<style>
    .footer{
        display: grid;
        grid-template-columns: 3fr 1fr;
    }
    .footer img{
        width: 100%;
    }
    p{
        color: white;
    }
    
</style>