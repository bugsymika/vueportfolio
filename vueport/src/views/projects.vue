<template>
  <div class="main">
    <h1>Snapshots of my code:</h1>

    <div class="flex">
      <!-- <div class="container">
        <div class="polaroidFrame">
          <div class="polaroidText">Github Account</div>
          <div class="polaroidPicture" id="githubPic"></div>
        </div>
      </div>-->
      <div class="container">
        <router-link to="/mealPrepApp">
          <div class="polaroidFrame">
            <div class="polaroidText">Meal Prep App</div>
            <div class="polaroidPicture" id="mealPic"></div>
          </div>
        </router-link>
      </div>

      <div class="container">
        <router-link to="/gymApp">
          <div class="polaroidFrame">
            <div class="polaroidText">Prospect Manager</div>
            <div class="polaroidPicture" id="gymPic"></div>
          </div>
        </router-link>
      </div>

      <div class="container">
        <router-link to="/turkeyApp">
          <div class="polaroidFrame">
            <div class="polaroidText">Turkey Calculator</div>
            <div class="polaroidPicture" id="turkeyPic"></div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects"
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lobster|Permanent+Marker");

h1 {
  font-family: "Lobster", cursive;
  margin-top: 0;
  color: #5cf5b0;
  font-weight: bolder;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}

.polaroidFrame {
  width: 220px;
  height: 250px;
  background-color: rgb(228, 217, 211);
  border-style: solid;
  border-width: 4px;
  position: relative;
}
.polaroidPicture {
  width: 160px;
  height: 175px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  position: absolute;
  left: 30px;
  top: 20px;
  border-style: solid;
  border-width: 2px;
}

.polaroidText {
  width: 180px;
  height: 60px;
  left: 20px;
  font-family: "Permanent Marker", cursive;
  position: absolute;
  top: 210px;
  z-index: 1;
  font-size: 2vh;
  text-align: center;
  color: black;
}

#githubPic {
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg),
    linear-gradient(45deg, rgb(162, 195, 255), rgb(165, 255, 165));
}

#mealPic {
  background-image: url(https://i.imgur.com/33VCGip.png),
    linear-gradient(45deg, rgb(162, 195, 255), rgb(165, 255, 165));
  background-size: 110%;
}

#gymPic {
  background-image: url(https://i.imgur.com/mhdEapb.png);
  background-size: 220%;
  background-position: 0%;
}

#turkeyPic {
  background-image: url(https://i.imgur.com/klLYYc7.png),
    linear-gradient(45deg, brown, rgb(255, 166, 0));
}

.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.container {
  margin-top: 15%;
}

@media only screen and (max-width: 856px) {
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 15%;
  }
}

a:-webkit-any-link {
  color: black;
}
</style>



