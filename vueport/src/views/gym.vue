<template>
  <div class="main">
    <router-link to="/projects">
      <div class="back">
        <i class="icono-leftArrow"></i>
        <br>BACK
      </div>
    </router-link>

    <div class="text">
      <h1>Gym Prospect Manager</h1>
      <a href="http://bugmika.com/broadway.html">You can view this project here</a>
      <br>
      <a href="https://github.com/bugsymika/broadwayRainmaker">And the repo here</a>
      <p>This project started as a way to better manage the gym leads coming into the membership software at my Jiu-Jitsu gym. The system implemented by our membership software was lacking in features so I attempted to find a way to manage the leads through an application of my own. The project takes an array of leads and displays them in an orderly application with several sorting features and a section for notes to be appended. For display purposes, an alert box is used to generate a number of fake leads but in the repo there is a data scrape script that pulls the leads from our membership web application which has no API for attaining member data. The data scrape then returns an array to the clipboard which would be used in place of the alert box to generate leads to fill the application’s data fields.
        <br>
        <br>This project taught me a lot about DOM manipulation and really helped solidify JavaScript DOM fundamentals, as well as giving me an appreciation for frameworks as this was done in vanilla and was a massive pain because of it. There are scattered bugs such as the CSS changing with the amount of leads, no input sanitization and text boxes being able to be appended without content but overall this project taught me a lot. One of the things I’m most proud of is that the search and sort features are very efficient, slowing down some but still working even with 10,000 prospects entered into the application.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "gym",
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
  font-size: 3vh;
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
