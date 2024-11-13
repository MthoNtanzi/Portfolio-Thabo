<template>
    <div class="education">
      <h1 class="heading">2020 - 2019</h1>
      <div class="certificates">
        <div class="about">
          <h1>Education</h1>
          <hr/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsa at accusamus vero quisquam voluptates ad vitae recusandae rem nihil nisi consequatur ratione, error, cumque quas cupiditate esse neque sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magnam eligendi culpa!</p>
        </div>
        <div class="credentials">
          <ul>
            <li>
              <h2>My Certificate</h2>
              <p>School | 2020</p>
            </li>
            <li>
              <h2>My Certificate</h2>
              <p>School | 2020</p>
            </li>
            <li>
              <h2>My Certificate</h2>
              <p>School | 2020</p>
            </li>
          </ul>

        </div>
      </div>
    </div>
</template>

<style scoped>
  
  .heading{
    text-align: right;
    font-size: 3.5rem;
    margin-right: 12rem;
  }
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

  .about{
    max-width: 35rem;
  }
</style>
  