<template>
  <body>
    <!-- <header>
      From Web Components, APIs, and UI/UX designs to Javascript, React.JS, 
      Redux, Vue.JS, and Node.JS. Please feel free to view any of 
      these projects further.
    </header> -->
    <ul>
      <li>
        <img src="../assets/pasta-css.png" width="100%" height="100%">
        <div class="info">
          <p> HTML </p>
          <p> CSS </p>
        </div>
      </li>
      <li>
        <img src="../assets/list-vue.png" width="100%" height="100%">
        <div class="info">
         <p> HTML</p>
         <p> CSS </p>
         <p> JAVASCRIPT </p>
        </div>
      </li>
      <li>
        <img src="../assets/registration.png" width="100%" height="100%">
        <div class="info">
         <p> HTML</p>
         <p> CSS </p>
         <p> JAVASCRIPT </p>
        </div>
      </li>
      <li>
        <img src="../assets/todo.png" width="100%" height="100%">
          <div class="info">
          <p> HTML</p>
          <p> CSS </p>
          <p> JAVASCRIPT </p>
          </div>
      </li>
      <li>
          <img src="../assets/aboutme.png" width="100%" height="100%">
          <div class="info">
          <p> HTML</p>
          <p> CSS </p>
          <p> JAVASCRIPT </p>
          </div>
      </li>
      <li>
        <img src="../assets/portlandia.png" width="100%" height="100%">
        <div class="info">
          <p> HTML</p>
          <p> CSS </p>
          <p> JAVASCRIPT </p>
        </div>
      </li>
      <li>
        <img src="../assets/going-fullstack.png" width="100%" height="100%">
        <div class="info">
          <p> HTML</p>
          <p> CSS </p>
          <p> JAVASCRIPT </p>
          <p> SQL </p>
        </div>
      </li>
      <li>
        <img src="../assets/lorem.png" width="100%" height="100%">
        <div class="info">
          <p> HTML</p>
          <p> CSS </p>
          <p> JAVASCRIPT </p>
        </div>
      </li>
      <li>
        <img src="../assets/twitch.png" width="100%" height="100%">
          <div class="info">
          <p> HTML</p>
          <p> CSS </p>
          <p> JAVASCRIPT </p>
          <p> SQL </p>
          <p> API </p>
          <p> VUE </p>
          </div>
      </li>
      <li>
        <img src="../assets/goals.png" width="100%" height="100%">
          <div class="info">
            <p> HTML</p>
            <p> CSS </p>
            <p> JAVASCRIPT </p>
            <p> SQL </p>
            <p> VUE </p>
          </div>
      </li>
      <li>
        <img src="../assets/search-the-web.png" width="100%" height="100%">
          <div class="info">
            <p> HTML</p>
            <p> CSS </p>
            <p> JAVASCRIPT </p>
            <p> SQL </p>
            <p> API </p>
            <p> VUE </p>
          </div>
      </li>
      <li>
        <img src="../assets/return-of-pokedex.png" width="100%" height="100%">
          <div class="info">
            <p> HTML</p>
            <p> CSS </p>
            <p> JAVASCRIPT </p>
          </div>
      </li>
      <li>
        <img src="../assets/calculator.png" width="100%" height="100%">
          <div class="info">
            <p> HTML</p>
            <p> CSS </p>
            <p> JAVASCRIPT </p>
          </div>
      </li>
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYwVKS5-aMVxNp7h1Q98GlR-KkMcZJ0Mdbs4zmJlHiJtr6xxnYw" width="100%" height="100%">
          <div class="info">
          <h3> project </h3>
          <p> description</p>
          </div>
      </li>
    </ul>
  </body>
</template>

<style scoped lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Nanum+Myeongjo');
@import url('https://fonts.googleapis.com/css?family=Asap');
@import url('https://fonts.googleapis.com/css?family=Poiret+One');


header {
  text-align: center;
  font-family: 'Sawarabi Gothic', sans-serif;
  /* color: white; */
  color: #A28070;
  font-size: 1.5em;
  display: inline-block;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: 300px;
  grid-auto-flow: dense;
  grid-column-gap: 15px;
  grid-row-gap:15px;
}
li:nth-child(2n) {
  grid-row: span 2;
  grid-column: span 1.5;
}
li:nth-child(3n) {
  grid-row: span 1.5;
  grid-column: span 1;
}
li:nth-child(4n) {
  grid-row: span 1.75;
  grid-column: span 1.75.;
}
li:nth-child(5n) {
  grid-row: span 1.3;
  grid-column: span 1;
}
li {
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image:#FFFEFD;
  box-shadow: 1pt 1pt 3pt lightgrey;
} 
li {
  position: relative;
  overflow: hidden;
&:hover {
    img{
        transform: scale(1.1);
        filter: grayscale(1); 
        }
        .info {
      bottom: 0;
    }
  }
}
img {
  transition: 500ms;
  opacity: .7;
  filter: grayscale(0);
  position: absolute;
  z-index: -1;
}
.info {
  transition: 500ms;
  position: absolute;
  bottom: -100%;
  height: 100%;
  width: 100%;
  background:rgba(228, 211, 203, 0.8);
  text-align: center;
}
p {
  margin: 0;
  color: white;
  /* color: #A28070; */
  font-family: 'Poiret One', cursive;
  text-shadow: 1pt 1pt 1pt grey;
  font-weight: bold;
  align-content: center;
  margin-top: 10%;
}

</style>
