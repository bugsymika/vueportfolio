<template>
  <div class="main">
    <router-link to="/projects">
      <div class="back">
        <i class="icono-leftArrow"></i>
        <br>BACK
      </div>
    </router-link>

    <div class="text">
      <h1>Meal Prep App</h1>
      <a
        href="https://bug-meal-prep-app.netlify.com/"
        target="_blank"
      >You can view this project here</a>
      <br>
      <a href="https://github.com/bugsymika/groceryAppPublic" target="_blank">And the repo here</a>
      <p>This is the project that I’m most proud of to date. It uses the Nutritionix API to gather nutritional info from food searched in the search bar which allows the user to create meals for their shopping list. It allows the user to easily plan out their food for the week and easily calculate the macronutrients for each meal. I initially intended to create it using the Vue CDN but as the project grew in complexity, it forced me to adapt and learn the Vue CLI and the single-file component design pattern that comes with it. In addition to that, I worked with several new libraries such as Axios for the API requests and Lodash for debouncing the API requests to not surpass my API limit.
        <br>
        <br>In addition to those libraries, I had to learn how to use Vue’s native state management tool, Vuex as there is a lot of data being passed from one component to another. I worked extremely hard to get this application into a state that I’m satisfied with however if I’d do it again I’d definitely try to integrate a way to email the results to yourself instead of having to copy and paste your shopping list and spend more time making it mobile-friendly. In addition to that, there are a few sections where the code could be broken into smaller components but it was my first time with single-file components and I’ll have better planning for my next project. Overall this project taught me a lot about Vue and Vuex and forced me to pick up new libraries, the code is readable and I had a great time doing it.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mealprep",
  components: {}
};
</script>

<style scoped>
@media only screen and (min-width: 856px) {
  .back {
    float: left;
  }
}
i {
  color: #5cf5b0;
}

a {
  text-decoration: none;
  color: #5cf5b0;
  font-size: 1.25em;
}

.back {
  border: solid;
  border-width: 2px;
  width: fit-content;
  border-color: #5cf5b0;
}

.main {
  padding-top: 2%;
  padding-left: 2%;
}

p {
  color: white;
  width: 75%;
  margin-left: 10%;
  font-size: 2.85vh;
}

h1 {
  font-family: "Lobster", cursive;
  margin-top: 0;
  padding-top: 5%;
  color: white;
  font-weight: bolder;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}

.text {
  padding-right: 2%;
}

@media only screen and (max-width: 856px) {
  p {
    padding-bottom: 15%;
    text-align: left;
  }
}
</style>
