<template>
  <div class="main">
    <div class="imageContainer">
      <img src="https://i.imgur.com/ver4qFc.jpg">
    </div>

    <div class="textContainer">
      <p>My name is Bug and I’m a 100% self taught 20 year old front-end web developer. I prefer to work with the Vue framework however my understanding of vanilla javascript allows me to pick up libraries and frameworks and quickly get up to speed with them.
        <br>
        <br>In addition to Javascript, I am versed in semantic HTML5 and the features of CSS3 such as flexbox and grid. While my experience on the back end is limited, I have some experience writing simple servers in the Node.js framework “Express” and working with the non-relational database MongoDB using the MEVN stack.
        <br>
        <br>When not coding I work as the marketing and public relations manager at Red Velvet Ventures, LLC and train/compete in Brazilian Jiu Jitsu in my free time.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  components: {}
};
</script>

<style scoped>
p {
  font-size: 3vh;
  text-align: left;
  color: white;
  width: fit-content;
  margin-left: 5%;
}

img {
  width: 350px;
  height: 400px;
}

.textContainer {
  width: 50%;
  padding-top: 10%;
}

.imageContainer {
  width: fit-content;
  float: right;
  margin-top: 12%;
  padding-right: 10%;
}

@media only screen and (max-width: 856px) {
  .textContainer {
    width: 100%;
    padding-bottom: 10%;
  }

  .imageContainer {
    width: fit-content;
    margin-top: 12%;
    padding-right: 10%;
  }
}
</style>



