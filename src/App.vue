<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/"> home </RouterLink>
        <RouterLink to="/work"> work </RouterLink>
         <div id="header">
             <img src="../src/assets/logo.png" width="150" height="100px" alt="logo" />
        </div> 
        <RouterLink to="/about"> about </RouterLink>
        <RouterLink to="/contact"> contact </RouterLink>
      </nav>
    </header>
     <main> 
      <RouterView></RouterView>
    </main>
    <Welcome/>
  </div>
</template>
<script>
import Welcome from './components/Welcome';
export default {
  components: {
    Welcome
  }
}; 
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding|Sawarabi+Gothic');
header {
  height: 100px;
  background: #E4D3CB;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Sawarabi Gothic', sans-serif;
}
#header {
  display: left;
}
nav {
  display: flex;
  justify-content: space-around;
}
nav a {
  color:rgba(255,255,255, 0.8);
  text-decoration: none;
  font-weight: bold;
  font-size: 3vh;
  padding: 20px;
  font-size: 15pt;
  margin-top: 20px;
}
nav a:hover {
  text-decoration: underline;
  font-weight: bolder;
}
</style>
