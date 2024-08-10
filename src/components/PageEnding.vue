<template>
    <div class="container-end">
      <form @submit.prevent="submitWish">
        <div class="form-group">
          <label for="nickname">Nickname</label>
          <input type="text" class="form-control" id="nickname" v-model="nickname" placeholder="Your name or nickname" required>
        </div>
        <div class="form-group">
          <label for="wish">Wishes</label>
          <input type="text" class="form-control" id="wish" v-model="wish" placeholder="Your wish to us" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <iframe
        src="https://www.youtube.com/embed/FfNeoAyaQp0?autoplay=1&loop=1&playlist=FfNeoAyaQp0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div>Address cac thu do day</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        nickname: '',
        wish: ''
      };
    },
    methods: {
      submitWish() {
        if (this.nickname && this.wish) {
          axios.post('http://54.167.160.229:3000/api/wishes', {
            nickname: this.nickname,
            wish: this.wish
          })
          .then(response => {
            alert('Wish added successfully!');
            this.nickname = '';
            this.wish = '';
            window.location.reload();
          })
          .catch(error => {
            console.error('There was an error adding the wish!', error);
          });
        } else {
          alert('Please fill out both fields.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container-end {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 30px;
  }
  form {
    border: 1px solid rgb(240, 115, 136);
    border-radius: 10px;
    padding: 10px;
    background-color: pink;
    width: 100%;
    max-width: 500px;
  }
  </style>
  