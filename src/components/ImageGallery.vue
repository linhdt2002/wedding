<template>
  <div class="container-story">
    <h1 class="main">Our story</h1>
    <div id="ourstory" class="carousel slide" data-ride="carousel">
      <ul class="carousel-indicators">
        <li data-target="#ourstory" data-slide-to="0" class="active"></li>
        <li data-target="#ourstory" data-slide-to="1"></li>
        <li data-target="#ourstory" data-slide-to="2"></li>
      </ul>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/bride.jpg" alt="Los Angeles">
          <div class="carousel-caption">
            <h3>2019</h3>
            <p>We met each other when I'm in high school</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/bride.jpg" alt="Chicago">
          <div class="carousel-caption">
            <h3>Chicago</h3>
            <p>Thank you, Chicago!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/bride.jpg" alt="New York">
          <div class="carousel-caption">
            <h3>New York</h3>
            <p>We love the Big Apple!</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#ourstory" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#ourstory" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.container-story {
  width: 100%;
  margin: 0;
  padding-bottom: 40px;
}
h1 {
  font-family: 'Great Vibes', cursive;
  text-align: center;
  padding: 30px;
}
.carousel-inner img {
  width: 100%;
  height: 600px;
  object-fit: contain;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(50%) sepia(100%) saturate(1000%) hue-rotate(300deg);
}

.carousel-indicators {
  bottom: 10px;
  margin: auto;
}

.carousel-indicators li {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 4px;
  border: none;
}

.carousel-indicators .active {
  background-color: #333;
}
.carousel-caption {
  color: black;
  text-shadow: none;
}
@font-face {
  font-family: "beauty-font";
  src: url('@/assets/fonts/GeraldinePersonalUseItalic-PK12m.ttf');
}
</style>
