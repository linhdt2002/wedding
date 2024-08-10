<template>
    <div ref="container">
      <div ref="sections">
        <Beginning />
        <BriefInformation />
        <DateCounter />
        <ImageGallery />
        <TimeLine />
        <FriendWishes />
        <PartyMenu />
        <PageEnding />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Beginning from '../components/Beginning.vue';
  import BriefInformation from '@/components/BriefInformation.vue';
  import DateCounter from '@/components/DateCounter.vue';
  import ImageGallery from '@/components/ImageGallery.vue';
  import PartyMenu from '@/components/PartyMenu.vue';
  import TimeLine from '@/components/TimeLine.vue';
  import FriendWishes from '@/components/FriendWishes.vue';
  import PageEnding from '@/components/PageEnding.vue';
  
//   const container = ref(null);
//   const sections = ref(null);
  
//   const autoScroll = () => {
//     const elements = sections.value.children;
//     let index = 0;
  
//     const scrollToNext = () => {
//       if (index < elements.length) {
//         elements[index].scrollIntoView({ behavior: 'smooth' });
//         index++;
//         setTimeout(scrollToNext, 2000);
//       }
//     };
  
//     scrollToNext();
//   };
  
//   onMounted(() => {
//     autoScroll();
//   });
  </script>
  
  <style scoped>
  div[ref="container"] {
    height: 100vh;
    overflow: hidden;
  }
  
  div[ref="sections"] > * {
    height: 100vh;
  }
  </style>
  