<template>
  <div class="about">
    <img src="../assets/profile2.jpg" alt="">
    <div>
      <h1>My Biography</h1>
      <hr/>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum, autem accusamus perferendis modi consectetur, aliquam suscipit, commodi tenetur ex facere corrupti repudiandae quidem fugiat id obcaecati consequuntur nihil placeat. Vel officia rerum veniam officiis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque porro quibusdam aut omnis ex at labore molestias quisquam!</p>
      <h2>Skills & Tools</h2>
      <div class="mySkills">
        <p>Python</p>
        <p>Java</p>
        <p>C#</p>
        <p>Django</p>
        <p>Flask</p>
        <p>VSCode</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .about{
    display: flex;
    gap: 2rem;
    padding: 2rem 3rem;
  }
  .about div{
    width: 40rem;
  }

  h1{
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 700;
  }
  img{
    width: 25rem;
    height: 100%;
  }

  hr{
    width: 40%;
    border-top: 0.7rem solid #38b6ff;;
    justify-self: flex-start;
    margin: 0;
  }
  .mySkills{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    max-width: 35rem;
  }
  .mySkills p{
      width: 8rem;
      text-align: center;
      border: white 1px solid;
      border-radius: 2rem;
      padding: 0.25rem 0.5rem;
      
  }
</style>
