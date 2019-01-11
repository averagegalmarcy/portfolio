<template>
  <body>
    <h1> This is the about page </h1>
    <ul>
      <li> Marcy Silverman</li>
      <li> <img src="../../src/assets/photo-of-me.jpg" width="100%" height="100%"></li>
    </ul>
  </body>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding|Sawarabi+Gothic');

h1 {
  text-align: center;
  font-family: 'Sawarabi Gothic', sans-serif;

}
ul {
  margin-top: 30pt;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  list-style-type: none;
  /* grid-auto-rows: 250px; */
  grid-auto-flow: dense;
  grid-column-gap: 20px;
  grid-row-gap:20px;
  margin: 0;
}
li {
  align-items: center;
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  background-image:#FFFEFD;
  border: 1pt grey solid;
} 
img {
  height: auto;
  width: 300px;
}
</style>
