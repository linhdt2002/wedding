<template>
  <div class="page-container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><img :src="iconImage" alt="Brand Icon" class="icon" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#date">Date</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#ourstory">Our story</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#timeline">Timeline</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#menu">Menu</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0 search-form">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <div class="fullsize-image-container">
      <div class="overlay-text">Save the date</div>
      <button class="open-modal-btn" @click="showModal = true">Open Invitation</button>

      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <div class="modal-text">
            <p class="invitation">TRÂN TRỌNG KÍNH MỜI</p>
            <p>With joyous hearts, we invite you</p>
            <p class="name">{{ guestName }}</p>
            <hr>
            <p>VUI LÒNG ĐẾN DỰ BUỔI TIỆC</p>
            <p>CHUNG VUI CÙNG GIA ĐÌNH CHÚNG TÔI</p>
            <p>To attend the Wedding Celebration</p>
            <p>Sự hiện diện của quý khách</p>
            <p>là niềm vinh hạnh cho gia đình chúng tôi.</p>
            <p>With love!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import imageUrl from '@/assets/image.jpeg';
import invitationImageUrl from '@/assets/guest.jpeg';
import iconImage from "@/assets/icon.png";

export default {
  data() {
    return {
      showModal: false,
      imageUrl,
      invitationImageUrl,
      iconImage,
      guestName: ''
    };
  },
  created() {
    const id = this.$route.params.id;
    console.log(this.$route)
    this.fetchGuestData(id);
  },
  mounted() {

  },
  methods: {
    fetchGuestData(id) {
      axios.get("http://54.167.160.229:3000/api/guests")
        .then(response => {
          const guests = response.data;
          let guest;
          for (guest of guests) {
            if (guest.id == id) {
              this.guestName = guest.invitation;
              break;
            }
          }
          if (!guest) {
            this.guestName = 'Mọi người';
          }
        })
        .catch(error => {
          console.error('Error fetching guest data:', error);
          this.guestName = 'Mọi người';
        });
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: space-between;
}
html {
  scroll-behavior: smooth;
}
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.page-container {
  background-image: url('@/assets/image.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000; 
}


.search-form {
  margin-left: auto;
}

.fullsize-image-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.overlay-text {
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 10px;
  font-size: 150px;
  text-align: center;
  font-family: "Amatic SC", sans-serif;
  font-weight: 700;
}

.open-modal-btn {
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #ff6b81;
  color: white;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(139, 132, 132, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  max-width: 22.5%;
  height: 70%;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background-image: url('@/assets/weddingcard.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

hr {
  margin-left: 50px;
  margin-right: 50px;
}

.modal-text {
  /* max-width: 50%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.invitation, .message {
  font-size: 1.5em;
  margin: 10px 0;
}

.name {
  font-size: 2em;
  font-weight: bold;
  margin: 10px 0;
  font-family: 'Great Vibes', cursive;
}

.icon {
  width: 50px;
}
</style>



