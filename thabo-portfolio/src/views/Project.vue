<script setup>
import { computed, ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue';
import projectData from '@/projects.json'

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
      <p>2023-202X</p>
    </div>
    <hr/>
  
  <div class="myProjects">

    <!-- Projects -->
    <ProjectCard v-for="project in randomProjects" :key="project.id" :project="project" />
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
  