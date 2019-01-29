<template>
  <div class="main">
    <router-link to="/projects">
      <div class="back">
        <i class="icono-leftArrow"></i>
        <br>BACK
      </div>
    </router-link>

    <div class="text">
      <h1>Turkey Calculator</h1>
      <a href="http://bugmika.com/turkey.html">You can view this project here</a>
      <br>
      <a href="https://github.com/bugsymika/turkeycalc">And the repo here</a>
      <p>This was a project done over Thanksgiving weekend that calculates the defrost time of a turkey based on its weight, a simple JavaScript calculator app with a holiday twist. Its significance lies in that it was my first real JavaScript project done without hand holding or tutorials. It runs the value of the input through basic sanitization and passes the value through the formula and spits out an estimated thaw time for a frozen turkey and the turkey grows with input. It’s not perfect, however, as the thaw time rounds so it’s imperfect and the turkey can only grow so large. This was done in pure vanilla JavaScript</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "turkey",
  components: {}
};
</script>

<style scoped>
@media only screen and (max-width: 856px) {
  p {
    padding-bottom: 15%;
    text-align: left;
  }
}
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
  margin-left: 15%;
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
</style>
