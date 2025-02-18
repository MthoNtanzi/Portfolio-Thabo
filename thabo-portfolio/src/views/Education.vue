<template>
    <div class="education">
      
      <div class="certificates">
        <div class="about">
          <h1 class="heading_">Education</h1>
          <hr/>
          <p>My learning journey blends software development, computer science, and financial analysis. I earned an NQF Level 5 certification in IT Systems Development, strengthening my technical foundation before diving deeper into CS50. With additional expertise in financial modeling, I&apos;m always expanding my skill set to tackle real-world challenges.</p>
        </div>
        <div class="credentials">
          <ul>
            <li>
                <h2>CS50's Introduction to Computer Science</h2>
                <p>Harvard University (edX) | 2025</p>
            </li>
            <li>
              <h2>Information Technology (Systems Development)</h2>
              <p>WeThinkCode_ (Holdings NPC) |National Certificate:  NQF Level 5</p>
            </li>
            <li>
              <h2>Financial Modeling & Valuation Analyst (FMVA)®</h2>
              <p>Corporate Finance Institute® (CFI) | 2023</p>
            </li>
          </ul>

        </div>
      </div>
    </div>
</template>

<style scoped>
  
  
  hr{
    width: 40%;
    border-top: 0.4rem solid #38b6ff;
    justify-self: flex-start;
    margin: 0;
    margin-top:-1.2rem;
    margin-bottom: 2.4rem;
  }

  .certificates{
    display: flex;
    gap: 2rem 4rem;
  }

  .credentials ul{
    padding: 0;
  }
  .credentials li{
    list-style-type: none;
    margin: 2rem 0;
  }

  .credentials li h2, .credentials li p{
    margin: 0;
  }

  .credentials h2 {
    color: #38b6ff;
    text-align:start;
  }

  .about{
    max-width: 35rem;
  }

  @media screen and (max-width: 768px) {
    hr {
      display: none;
    }
    .heading_ {
      font-size: 2rem;
      margin: 1.6rem auto;
    }

    .certificates {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .about {
      max-width: 100%;
      padding: 0 1rem;
    }

    .credentials ul {
      text-align: left;
      width: 100%;
      max-width: 30rem;
      margin: auto;
    }
  }

  @media screen and (max-width: 1024px) {
    .certificates {
      flex-wrap: wrap;
      justify-content: center;
    }
  }


</style>
  