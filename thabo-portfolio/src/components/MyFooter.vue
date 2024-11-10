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

<style scoped>
    .footer{
        display: grid;
        grid-template-columns: 3fr 1fr;
        padding: 1.25rem;
    }
    .footer img{
        width: 100%;
    }
    p{
        color: white;
    }
    
</style>