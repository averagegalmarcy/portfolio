 <template>
 <section class="wrapper">
      <div class="video-wrap">
      <video id="video" src="../../src/assets/home-clip.mp4" height="400%" autoplay="" loop=""></video>
      </div>
      <div class="overlay">
      <h1> Welcome </h1>
      </div>
   </section>
 </template>

 <style scoped>
.wrapper {
  font-size: 40pt;
  font-family: 'Acme', sans-serif;
  display: flex;
  align-items: center;
  margin-top: 200px;
  /* position: fixed; */
}
section {
  text-align: center;
  z-index: 10;
  /* display: block; */

}
.video-wrap {
  position: fixed;
  width: 100%;
  z-index: -1;
}
.overlay {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
 </style>
 