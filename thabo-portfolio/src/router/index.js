import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Education from '../views/Education.vue'
import Experience from '../views/Experience.vue'
import Project from '../views/Project.vue'
import Contact from '../views/Contact.vue'

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/about', name: 'about', component: AboutMe},
    {path: '/education', education: 'home', component: Education},
    {path: '/experience', name: 'experience', component: Experience},
    {path: '/project', name: 'project', component: Project},
    {path: '/contact', name: 'contact', component: Contact}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
