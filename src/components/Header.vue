<template>
  <section>
    <header>
      <!-- <div class="form" v-if="show"> -->
      <!-- <transition name="fade">
      </transition> -->
      <nav>
        <RouterLink to="/"> home </RouterLink>
        <RouterLink to="/work"> work </RouterLink>
         <div id="header">
             <img src="../../src/assets/logo.png" width="160" height="100px" alt="logo" />
        </div> 
        <div id="link">
        <RouterLink to="/about"> about </RouterLink>
        <RouterLink to="/contact"> contact </RouterLink>
        </div>
      </nav>
      <!-- </div> -->
      <!-- <div class="form-button" v-else>
            <button @click="show = true"> ☰ </button>   
        </div> -->
    </header>
    <main> 
      <RouterView></RouterView>
    </main>
  </section>
</template>
<script>
export default {
  // data() {
  //   return {
  //     show: false
  //   };
  // }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display');
header {
  height: 100px;
  background: #E4D3CB;
  display:flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
}
#link {
  margin-left: 30px;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;

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
  display: inline-block;
  margin-right: 60px;
  color: #585557;
  font-size: 1em;
  line-height: 1.6em;
  letter-spacing: .01em;
}
nav a:hover {
  text-decoration: underline;
  font-weight: bolder;
  color: white;
}
/* .form-button {
  margin-left: 90%;
  border: none;
  background-color: transparent;
  outline: none;
} */
</style>
