<template>
  <div class="hero-image">
    <div class="hero-text">
      <h1 class="green">Vue Sample App</h1>
      <p>A Test App to demonstrate Core Functionality</p>
    </div>
  </div>
</template>

<style scoped>
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/HeroPicture.jpg");
  height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.hero-text {
  text-align: center;
  font-size: 1.1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
h1 {
  font-weight: 700;
  font-size: 4rem;
}
</style>
