<template>
  <div class="main">
    <div class="heading">
      <div>
        <h1>EXPERIENCE</h1>
        <hr/>
      </div>
      <h2>2021 - 2023</h2>
    </div>
    
    <div class="experience">
      
      <!-- First grid row -->
      <img src="../assets/chevron-right-double.svg" alt="">
      <div>
        <h2>Company 1</h2>
        <p>Role 2022-2024</p>
      </div>
      <p>My duties included Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut hic harum maxime, eveniet accusamus iusto, iure maiores, facere quod dolore voluptatem vitae eius placeat debitis nulla ad corrupti atque.</p>
      
      <!-- Next grid row -->
      <img src="../assets/chevron-right-double.svg" alt="">
      <div>
        <h2>Company 2</h2>
        <p>Role 2022-2024</p>
      </div>
      <p>My duties included Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut hic harum maxime, eveniet accusamus iusto, iure maiores, facere quod dolore voluptatem vitae eius placeat debitis nulla ad corrupti atque.</p>
   
      <!-- Next grid row -->
      <img src="../assets/chevron-right-double.svg" alt="">
      <div>
        <h2>Company 3</h2>
        <p>Role 2022-2024</p>
      </div>
      <p>My duties included Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut hic harum maxime, eveniet accusamus iusto, iure maiores, facere quod dolore voluptatem vitae eius placeat debitis nulla ad corrupti atque.</p>
    
    </div>
  </div>
</template>

  <style scoped>
  .main{
    padding: 2rem 3rem;
  }
    .heading{
      padding: 0 3rem;
      display: grid;
      grid-template-columns: 4fr 6fr;
      margin-bottom: 2rem;
    }

    .heading h1{
        font-size: 2.5rem;
        padding: 0;
        margin: 0;
    }
    .heading h2{
      font-size: 4rem;
      padding: 0;
      margin: 0;
    }

    .experience{
      max-width: 1200px;
      margin: auto;
      display: grid;
      grid-template-columns: 1fr 3fr 6fr;
    }
    .experience img{
      margin-top: 1rem;
      height: 5rem;
    }

    hr{
    width: 80%;
    border-top: 0.5rem solid #38b6ff;;
    justify-self: flex-start;
    margin: 0;
    }
  </style>
  