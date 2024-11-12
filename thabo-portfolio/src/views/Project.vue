<template>
  <div class="project">
    <div class="heading">
      <p>My Projects</p>
      <p>2020-202X</p>
    </div>
    <hr/>
  
  <div class="myProjects">
    <!-- Project 1 -->
    <div class="projectTemplateClass">
      <img src="../assets/projects.jpg" alt="">
      <h1>My project</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora architecto inventore quam harum iure aperiam sunt tenetur ipsum in quibusdam.</p>
    </div>
    <!-- End project 1 -->
    <!-- Project 2 -->
    <div class="projectTemplateClass">
      <img src="../assets/projects.jpg" alt="">
      <h1>My project</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora architecto inventore quam harum iure aperiam sunt tenetur ipsum in quibusdam.</p>
    </div>
    <!-- End project 2 -->
    <!-- Project 3 -->
    <div class="projectTemplateClass">
      <img src="../assets/projects.jpg" alt="">
      <h1>My project</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora architecto inventore quam harum iure aperiam sunt tenetur ipsum in quibusdam.</p>
    </div>
    <!-- End project 3 -->
  </div>
</div>
</template>

<style scoped>
  .project{
    padding: 2rem 3rem;
  }

  hr{
    width: 30%;
    border-top: 0.5rem solid #38b6ff;
    margin: 0.1rem 1.1rem 2.8rem 1.1rem;
  }

  .heading{
    display: flex;
    justify-content: space-between;
    margin: 0 1.4rem 0 1.4rem;
  }

  .heading p:first-child{
    font-size: 3rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  .heading p:last-child{
    font-size: 4rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .myProjects{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    margin: auto;
  }
  
  .projectTemplateClass{
    max-width: 20rem;
  }

  .projectTemplateClass img{
    max-width: 20rem;
  }
</style>
  