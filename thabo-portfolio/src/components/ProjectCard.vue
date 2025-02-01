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
  .myProjects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
  }

  .projectTemplateClass{
    max-width: 20rem;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .projectTemplateClass img {
    width: 320px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
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

  .projectTemplateClass h1 {
    font-size: 1.5rem;
    max-height: 5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp:initial;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: center;
  }

  .projectTemplateClass p {
    max-height: 6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp:initial;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .pi {
    font-size: 1.5rem;
    margin-left: 10px;
  }
</style>