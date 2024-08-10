<template>
  <div id="carouselExampleControlsNoTouching" class="carousel slide" data-ride="carousel" data-touch="false" data-interval="false">
    <div class="carousel-inner">
      <div v-for="(wish, index) in wishes" :key="wish.id" class="carousel-item" :class="{ active: index === 0 }">
        <div class="quote-container">
          <blockquote>
            <p class="quote-text">{{ wish.nickname }}</p>
            <footer class="quote-footer">{{ wish.wish }}</footer>
          </blockquote>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControlsNoTouching" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControlsNoTouching" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      wishes: []
    };
  },
  mounted() {
    axios.get('http://54.167.160.229:3000/api/wishes')
      .then(response => {
        this.wishes = response.data;
      })
      .catch(error => {
        console.error('There was an error fetching the wishes!', error);
      });
  }
};
</script>

<style scoped>
.carousel-inner {
  background-color: #f8f9fa;
  padding: 20px;
}

.carousel-item {
  text-align: center;
}

.quote-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.quote-text {
  font-size: 1.25rem;
}

.quote-footer {
  font-size: 1rem;
  color: #6c757d;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #ec167a;
}
</style>
