<template>
  <section>
     <div class="typewriter">
      <h1>
        <span>{ Marcy </span>
        <span> &nbsp; Silverman }</span>
      </h1>
      </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding|Sawarabi+Gothic');

h1 {
  /* text-align: center; */
  font-family: 'Sawarabi Gothic', sans-serif;
}
body {
  background-color: #333; 
}
h1 span {
  display: block;
}
.typewriter span {
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  display: inline-block;
  letter-spacing: .15em;
  border-right: 3px solid grey;
  animation: 
    typing 5s steps(30, end);
}
.typewriter { 
  position: fixed;
  top: 0; left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  z-index: 99;
  justify-content: center;
  align-items: center;
  background-color:#E4D3CB;
}

@keyframes typing {
  from { width: 0 }
  to { width: 200px }
}

@keyframes blink-caret {
  from, to { border-color: transparent };
}
.typewriter {
  background-repeat: no-repeat;
  background-position: left top;
  -webkit-animation-duration: 15s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 3s;
  animation-duration: 3s;

}
@-webkit-keyframes fadeOut {
  80% {opacity: 1;}
  100% {opacity: 0;
        z-index:-1}
}

@keyframes fadeOut {
  80% {opacity: 1;}
  100% {opacity: 0;
        z-index:-1}
}

.typewriter {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}
</style>
