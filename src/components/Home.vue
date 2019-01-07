<template>
  <body>
    <div>
    <ul>
      <div id="project-1">
      <li> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor invidunt ut labore et dolore 
        magna aliquyam erat, sed diam voluptua. At vero eos et 
        accusam et justo duo dolores et ea rebum.</li>
      </div>
      <div id="image-1">
      <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCSQRVmXcyfcmW8bd6IBj4fTDpZAYmFIQlDibBOPbxAT0Ha2miw"></li>
      </div>
      <div id="image-2">
      <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYwVKS5-aMVxNp7h1Q98GlR-KkMcZJ0Mdbs4zmJlHiJtr6xxnYw"></li>
      </div>
      <div id="project-2">
      <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor invidunt ut labore et dolore 
        magna aliquyam erat, sed diam voluptua. At vero eos et 
        accusam et justo duo dolores et ea rebum.</li>
      </div>
      <div id="project-3">
      <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor invidunt ut labore et dolore 
        magna aliquyam erat, sed diam voluptua. At vero eos et 
        accusam et justo duo dolores et ea rebum. </li>
      </div>
      <div id="image-3">
      <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhE-6jruhplNJrRNmFmA-eQVkNNGvU-Xlgp6yVsE2p9j4gExC"> </li>
      </div>
    </ul>
    </div>
  </body>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display');

ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  list-style-type: none;
  margin: 0 auto;
  grid-row-gap: 100px;
  text-align: center;
}
li {
  /* box-shadow: 1pt 3pt 3pt rgb(209, 206, 205); */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px; 
  padding: 10px 10px 10px 10px;
  font-size: 20pt;
  color: #A28070;
  font-family: 'Playfair Display', serif;
  background-color:#FFFEFD;
}
img {
  height:100%;
  width:100%;
}
</style>
