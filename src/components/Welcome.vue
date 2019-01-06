<template>
  <section>
     <div class="typewriter">
      <h1>{ Marcy Silerman }</h1>
      </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding|Sawarabi+Gothic');

h1 {
  text-align: center;
  font-family: 'Sawarabi Gothic', sans-serif;
}
body {
  background-color: #333; 
  padding-top: 5em;
  display: flex;
  justify-content: center;
}

.typewriter h1 {
  overflow: hidden;
  border-right: .15em solid grey;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation: 
    typing 5s steps(30, end);
}

@keyframes typing {
  from { width: 0 }
  to { width: 50% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: blue }
}

.typewriter {
  background-repeat: no-repeat;
  background-position: left top;
  padding-top:95px;
  margin-bottom:60px;
  -webkit-animation-duration: 15s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-duration: 10s;

}
@-webkit-keyframes fadeOut {
  0% {opacity: 1;}
  100% {opacity: 0;}
}

@keyframes fadeOut {
  0% {opacity: 1;}
  100% {opacity: 0;}
}

.typewriter {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}
</style>
