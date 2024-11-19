<template>
  <div class="mainDiv">
    <div class="intro">
      <h1>Hello ///</h1>
      <h2>I'm Thabo Chauke</h2>
      <p class="role">Software Developer</p>
      <p class="lightIntro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae quo quos nobis veniam nulla sunt ipsum, ut suscipit totam explicabo atque odit doloribus ducimus numquam officiis, ullam ex voluptatum, ratione cumque tempora a voluptatem id!</p>
    </div>
    <img src="../assets/profile.png" alt="My progile image" srcset="">
  </div>
</template>

<style scoped>
  .mainDiv{
    display: flex;
    gap: 1rem 3rem;
    max-width: 55rem;
  }
  .intro *{
    margin-bottom: 2.5rem;
  }

  h1{ color: #38b6ff;
     font-size: 1rem; 
     margin-top:2.5rem ;
  }
  h2{
    text-transform: uppercase;
    font-size: 3rem;
  }
  .intro .role{
    background: #38b6ff;
    color:#161616;
    display: inline-block;
    padding: 1rem 1.5rem;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
  }

  img{
    max-width: 15rem;
    height: auto;
    z-index: -1;
  }

  
  @media (max-width: 800px) {
    .mainDiv{
      flex-direction: column;
    }

    h2{
      font-size: 1.4rem;
    }

    .intro .role{
      display: inline-block;
      padding: 0.4rem 1rem;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .lightIntro{
      font-size: x-small;
    }

    img{
      max-width: 15rem;
      height: auto;
      z-index: -1;
      margin: auto;
    }
  }

  
</style>

