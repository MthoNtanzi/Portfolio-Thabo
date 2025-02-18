<script setup>
import { computed, ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue';
import projectData from '@/projects.json'
import { RouterLink } from 'vue-router';

const projects = ref(projectData)

function shuffleArray(array) {
  const shuffled = [...array]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled
}

const randomProjects = computed(() => shuffleArray(projects.value).slice(0,3))
</script>

<template>
  <div class="project">
    <div class="heading">
      <p>My Projects</p>
      <!-- <p>2023-202X</p> -->
    </div>
    <hr/>
  
  <div class="myProjects">

    <!-- Projects -->
    <ProjectCard v-for="project in randomProjects" :key="project.id" :project="project" />
    <!-- End Projects  -->
     
  </div>

  <div class="button-container">
    <RouterLink to="/projects" class="full-width-btn">More Projects</RouterLink>
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

  .button-container {
    width: 100%;
    margin-top: 20px;
  }

  .full-width-btn {
    display: block;
    width: 100%;
    padding: 12px;
    font-size: 1.2rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    text-align: center;
  }

  .full-width-btn:hover {
    background-color: #0056b3;
  }


  @media (max-width: 768px) {
    .heading {
    flex-direction: column;
    align-items: center; 
    text-align: center;
  }

  hr{
    display: none;
  }

  .heading p:first-child {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .heading p:last-child {
    font-size: 2.5rem; 
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
  