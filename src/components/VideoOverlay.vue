 <template>
 <section class="wrapper">
      <div class="video-wrap">
      <video controls muted id="video" src="../../src/assets/homeClip.mp4" height="500px" autoplay="" loop="" ></video>
      </div>
      <div class="overlay">
      <h1> I am a <span>Web Developer</span> Always Striving to Learn More </h1>
      </div>
   </section>
 </template>

 <style scoped>
 h1 {
   border: 2pt solid white;
   padding: 20px;
 }
.wrapper {
  font-size: 20pt;
  font-family: 'Playfair Display', serif;
  align-items: center;
  display: flex;
  justify-content: center;
  /* height: 500px; */
}
section {
  text-align: center;
  z-index: 10;
  /* width: 100vw; */
}
.video-wrap {
  position: fixed;
  /* width: 100%; */
  z-index: -1;
}
.overlay {
  /* height: 100%; */
  top: 0;
  left: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  letter-spacing: .02em;
}
span {
  color: #979797;
}

 </style>
 