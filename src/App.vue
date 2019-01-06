<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/work"> Work </RouterLink>
        <RouterLink to="/about"> About </RouterLink>
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
header {
  height: 75px;
  background: lightgray; 
  display: flex;
  align-items: center;
  justify-content: center;
}
nav {
  display: flex;
  justify-content: space-around;
  padding: 5px;
}
nav a {
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 3vh;
  padding: 10px
}
nav a:hover {
  text-decoration: underline;
  font-weight: bolder;
}
</style>
