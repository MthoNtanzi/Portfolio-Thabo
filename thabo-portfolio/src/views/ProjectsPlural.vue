<script setup>
import { ref } from 'vue';
import projectData from '@/projects.json';
import ProjectCard from '@/components/ProjectCard.vue';


const projects = ref(projectData)
</script>

<template>
    <div class="project">
      <div class="heading">
        <p>My Projects</p>
        <p>2023-202X</p>
      </div>
      <hr/>
    
    <div class="myProjects">
  
      <!-- Projects -->
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      <!-- End Projects  -->
       
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

  .myProjects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    justify-content: center;
  }

  .projectTemplateClass{
    width: 100%;
    max-width: 20rem;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }


  @media (max-width: 768px) {
  .heading p:first-child {
    font-size: 2rem;
  }

  .heading p:last-child {
    font-size: 3rem;
  }

  .myProjects {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .projectTemplateClass {
    max-width: 280px;
  }

  .projectTemplateClass h1 {
    font-size: 1.2rem;
    max-height: 3rem;
  }

  .projectTemplateClass img {
    max-width: 280px;
    height: 280px;
  }
}
</style>
  