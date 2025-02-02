<template>
  <div class="about">
    <img src="../assets/profile2.jpg" alt="">
    <div>
      <h1>My Biography</h1>
      <hr/>
      <p>I&apos;m a software developer with a passion for backend systems, automation, and testing. My journey began with an NQF Level 5 certification in IT Systems Development, where I built a strong foundation in software engineering. I later expanded my knowledge through CS50, refining my problem-solving skills. With hands-on experience in multiple programming languages and frameworks, I thrive on building efficient, scalable applications that solve real-world problems. I&apos;m always eager to explore new technologies and enhance my expertise.</p>
      <p>Beyond development, I hold an FMVA certification, blending technical and financial insights. I enjoy working on challenging projects, constantly improving my skills, and sharing knowledge with the tech community. My goal is to create impactful solutions through continuous learning and innovation.</p>
      <h2>Skills & Tools</h2>
      <div class="mySkills">
        <p>Python</p>
        <p>Java</p>
        <p>C#</p>
        <p>Git</p>
        <p>Flask</p>
        <p>TypeScript</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .about{
    display: flex;
    gap: 2rem;
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
    border-top: 0.4rem solid #38b6ff;;
    justify-self: flex-start;
    margin: 0;
    margin-top:-1.5rem;
    margin-bottom: 2.4rem;
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

  @media (max-width: 768px) {
    .about {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .about img {
      width: 15rem;
      height: auto;
    }

    .about div {
      width: 90%;
    }

    .mySkills {
      justify-content: center;
    }
  }

</style>
