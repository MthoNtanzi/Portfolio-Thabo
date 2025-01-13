<script setup>
import { defineProps } from 'vue';

defineProps({
  project: Object
})

function resolvePath(path) {
  return require(`@/assets/${path}`)
}
</script>

<template>
  <div class="projectTemplateClass">
    <img :src="resolvePath(project.image_path)" alt="">
    <h1>
      <a :href="project.host_link" target="_blank">{{ project.project_name }}</a>
      <a :href="project.repo_link" target="_blank"><i class="pi pi-github" alt="Github"></i></a>
    </h1>
    <p>{{ project.project_description }}</p>
  </div>
</template>

<style>
  .projectTemplateClass{
    max-width: 20rem;
  }

  .projectTemplateClass img{
    max-width: 20rem;
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
    text-decoration: underline;
  }

  h1 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 2rem;
  }

  .pi {
    font-size: 1.5rem;
    margin-left: 10px;
  }
</style>