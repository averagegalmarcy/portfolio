<template>
  <body>
    <ul>
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCSQRVmXcyfcmW8bd6IBj4fTDpZAYmFIQlDibBOPbxAT0Ha2miw" width="100%" height="100%">
        <div class="info">
          <h3> project </h3>
          <p> description</p>
        </div>
      </li>
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYwVKS5-aMVxNp7h1Q98GlR-KkMcZJ0Mdbs4zmJlHiJtr6xxnYw" width="100%" height="100%">
          <div class="info">
            <h3> project </h3>
            <p> description</p>
          </div>
      </li>
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhE-6jruhplNJrRNmFmA-eQVkNNGvU-Xlgp6yVsE2p9j4gExC" width="100%" height="100%">
        <div class="info">
        <h3> project </h3>
        <p> description</p>
      </div></li>
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhE-6jruhplNJrRNmFmA-eQVkNNGvU-Xlgp6yVsE2p9j4gExC" width="100%" height="100%">
          <div class="info">
            <h3> project </h3>
            <p> description</p>
          </div>
      </li>
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEVJPwNSdqhsyH3Td6Idsd8RHalVbatqivD-4bKyqPYtQ_d5y" width="100%" height="100%">
          <div class="info">
            <h3> project </h3>
            <p> description</p>
          </div>
      </li>
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYwVKS5-aMVxNp7h1Q98GlR-KkMcZJ0Mdbs4zmJlHiJtr6xxnYw" width="100%" height="100%">
        <div class="info">
          <h3> project </h3>
          <p> description</p>
        </div>
      </li>
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCSQRVmXcyfcmW8bd6IBj4fTDpZAYmFIQlDibBOPbxAT0Ha2miw" width="100%" height="100%">
        <div class="info">
          <h3> project </h3>
          <p> description</p>
        </div>
      </li>
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEVJPwNSdqhsyH3Td6Idsd8RHalVbatqivD-4bKyqPYtQ_d5y" width="100%" height="100%">
        <div class="info">
          <h3> project </h3>
          <p> description</p>
        </div>
      </li>
      <li>
        <img src="https://i.pinimg.com/236x/ef/4d/38/ef4d386f6e15552196e51b38a5c504cc--online-art-gallery-resin-art.jpg" width="100%" height="100%">
          <div class="info">
            <h3> project </h3>
            <p> description</p>
          </div>
      </li>
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCSQRVmXcyfcmW8bd6IBj4fTDpZAYmFIQlDibBOPbxAT0Ha2miw" width="100%" height="100%">
          <div class="info">
            <h3> project </h3>
            <p> description</p>
          </div>
      </li>
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYwVKS5-aMVxNp7h1Q98GlR-KkMcZJ0Mdbs4zmJlHiJtr6xxnYw" width="100%" height="100%">
          <div class="info">
            <h3> project </h3>
            <p> description</p>
          </div>
      </li>
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEVJPwNSdqhsyH3Td6Idsd8RHalVbatqivD-4bKyqPYtQ_d5y" width="100%" height="100%">
          <div class="info">
            <h3> project </h3>
            <p> description</p>
          </div>
      </li>
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCSQRVmXcyfcmW8bd6IBj4fTDpZAYmFIQlDibBOPbxAT0Ha2miw" width="100%" height="100%">
          <div class="info">
            <h3> project </h3>
            <p> description</p>
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

h1 {
  text-align: center;
  font-family: 'Nanum Myeongjo', serif;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  grid-column-gap: 5px;
  grid-row-gap:5px;
}
li:nth-child(2n) {
  grid-row: span 1.5;
  grid-column: span 1;
}
li:nth-child(3n) {
  grid-row: span 2;
  grid-column: span 1.5;
}
li:nth-child(4n) {
  grid-row: span 2.5;
  grid-column: span 2;
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
} 
li {
  position: relative;
  overflow: hidden;
&:hover {
    img{
        filter: grayscale(0); 
        }
        .info {
      bottom: 0;
    }
  }
}
img {
  transition: 500ms;
  filter: grayscale(1);
}
.info {
  transition: 500ms;
  position: absolute;
  bottom: -100px;
  height: 90px;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 5px;
}
h3, p {
  margin: 0;
}
</style>
