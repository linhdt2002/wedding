<template>
  <div class="intro"><p class="main">Hello!</p>
        <p>We invite you to celebrate our wedding</p></div>
  <div id="about" class="container">
    <div class="image-text-container">
      <p class="text">{{ groom_info }}</p>
      <div class="images">
        <img :src="image1Url" alt="Image 1" class="round-image">
        <div class="heart"><img src="@/assets/heart.jpg"></div>
        <img :src="image2Url" alt="Image 2" class="round-image">
      </div>
      <p class="text">{{ bride_info }}</p>
    </div>
  </div>
</template>

<script>
  import groomImage from '@/assets/groom.webp';
  import brideImage from '@/assets/bride.jpg';
  import heartImage from '@/assets/heart.jpg';

  export default {
    name: "BriefInformation",
    data() {
      return {
        image1Url: groomImage,
        image2Url: brideImage,
        heartImage,
        groom_info: 'Chien Anh',
        bride_info: 'Tran Thi Huong'
      };
    }
  };
</script>

<style scoped>
.intro {
  text-align: center;
  font-size: 20px;
  padding-top: 30px;
  margin: 0;
}

.main {
  font-family: "Great Vibes", cursive;
  font-size: 30px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.image-text-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.images {
  display: flex;
  align-items: center;
}

.round-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 20px;
}

.heart {
  animation: pound 1s infinite;
}
.heart img {
  width: 50px;
  height: 50px;
}

@keyframes pound {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.text {
  font-size: 1.5em;
  margin-left: 20px;
  font-family: 'Great Vibes', cursive;
}
</style>
