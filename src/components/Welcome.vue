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

body {
  background-color: #333; 
}

.typewriter { 
  position: fixed;
  top: 0; 
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  z-index: 99;
  justify-content: center;
  align-items: center;

  background-color:#E4D3CB;
  background-repeat: no-repeat;
  background-position: left top;

  -webkit-animation-duration: 15s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 3s;
  animation-duration: 3s;
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

h1 {
  /* text-align: center; */
  font-family: 'Sawarabi Gothic', sans-serif;
}

.typewriter span {
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  display: block;
  letter-spacing: .15em;
  border-right: 3px solid grey;
}

.typewriter span:nth-child(1) {
  width: 7.5em;
  -webkit-animation: typing 2s steps(40, end);
  animation: typing 2s steps(40, end);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.typewriter span:nth-child(2) {
  width: 7.8em;
  opacity: 0;
  -webkit-animation: typing 2.5s steps(40, end);
  animation: typing 3s steps(40, end);
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

@keyframes typing {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: .15em solid;
  }
  100% {
    border: none;
    opacity: 1;
  }
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

</style>
