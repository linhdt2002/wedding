<template>
<div class="party-menu">
  <h1 id="menu">Menu</h1>
  <p>OUR SPECIAL EVENTS
Wedding events
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
  <div class="comp-container">
    <div class="container">
      <div v-for="(dish, index) in menuItems" :key="index" @click="selectDish(dish)">
        <a href="#" :id="`dish-${index}`" @click.prevent>{{index}}.  {{ dish.name }}</a>
      </div>
    </div>
    <div v-if="selectedDish" class="swiper-container">
      <swiper ref="swiper" :direction="'vertical'" :autoplay="{ delay: 200 }">
        <swiper-slide>
          <img :src="selectedDish.image" alt="Dish Image" class="img-fluid" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

import dishImage1 from '@/assets/groom.jpeg';
import dishImage2 from '@/assets/bride.jpg';
import dishImage3 from '@/assets/bride.jpg';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      menuItems: [
        {
          name: 'Bê chao Mộc Châu',
          image: dishImage1
        },
        {
          name: 'Mướp giá xào lòng mề',
          image: dishImage2
        },
        {
          name: 'Nem tôm cua Hương Ngọc',
          image: dishImage3
        },
        {
          name: 'Sasimi',
          image: dishImage3
        },
        {
          name: 'Salat',
          image: dishImage3
        },
        {
          name: 'Xôi',
          image: dishImage3
        },
        {
          name: 'Bánh dày',
          image: dishImage3
        },
        {
          name: 'Hoa quả theo mùa',
          image: dishImage3
        },
      ],
      selectedDish: null
    };
  },
  methods: {
    selectDish(dish) {
      this.selectedDish = dish;
    }
  },
  mounted() {
    if (this.menuItems.length) {
      this.selectDish(this.menuItems[0]);
    }
  }
};
</script>

<style scoped>
.party-menu {
  background-image: url("@/assets/food.jpg");
  background-size: cover;
  background-position: 50%;

}
h1 {
  font-family: 'Great Vibes', cursive;
  text-align: center;
  font-size: 70px;
  padding-top: 30px;
}
.comp-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  bottom: 50px;
}
.container {
  width: 40%;
  text-align: left;
  padding-bottom: 350px;
  margin: 0 40px 0 40px;
}
.container a {
  text-decoration: none;
  font-size: large;
  color: palevioletred;
  font-family: 'Great Vibes', cursive;
  cursor: pointer;
}
.container a:hover {
  color: darkred;
}
.swiper-container {
  width: 500px;
  height: 200px;
}

.img-fluid {
  width: 100%;
  height: 500px;
  object-fit: cover;
  animation: slideIn 1s forwards;
}

@keyframes slideIn {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@font-face {
  font-family: "beauty-font";
  src: url('@/assets/fonts/GeraldinePersonalUseItalic-PK12m.ttf');
}
</style>
