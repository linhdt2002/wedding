<template>
  <div id="date" class="date-counter">
    <div class="content">
      <p class="main-text">
        <p class="main">The big day</p>
        <span class="main">{{ eventDateFormatted }}</span><br>
        <p class="support">We are so excited to celebrate our special day with our family and friends. Thank you so much for visiting our wedding website!</p>
      </p>
      <p class="countdown-text">
        Just some hours...
      </p>
      <div class="countdown">
        <div class="countdown-item">
          <span>{{ countdown.days }}</span>
          <span>DAYS</span>
        </div>
        <div class="countdown-item">
          <span>{{ countdown.hours }}</span>
          <span>HOURS</span>
        </div>
        <div class="countdown-item">
          <span>{{ countdown.minutes }}</span>
          <span>MINUTES</span>
        </div>
        <div class="countdown-item">
          <span>{{ countdown.seconds }}</span>
          <span>SECONDS</span>
        </div>
      </div>
      <p class="end-text">
        ...until we get married!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventDate: new Date('2024-09-04T00:00:00'),
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    };
  },
  computed: {
    eventDateFormatted() {
      return this.eventDate.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    }
  },
  methods: {
    updateCountdown() {
      const now = new Date();
      const distance = this.eventDate - now;

      if (distance < 0) {
        clearInterval(this.countdownInterval);
        this.countdown = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        return;
      }

      this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
  },
  mounted() {
    this.updateCountdown();
    this.countdownInterval = setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    clearInterval(this.countdownInterval);
  }
};
</script>

<style scoped>
.date-counter {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background: url('@/assets/image.jpeg') no-repeat center center;
  background-size: cover;
  color: white;
  text-align: center;
}

.content {
  padding: 20px;
  border-radius: 10px;
}

.main-text {
  margin-bottom: 20px;
  font-size: 20px;
}
.main {
  font-size: 50px;
  font-family: "Great Vibes", cursive;
}

.countdown-text {
  font-size: 1.5em;
  margin-bottom: 10px;
  font-family: "Great Vibes", cursive;
}

.countdown {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.countdown-item {
  text-align: center;
}

.countdown-item span:first-child {
  display: block;
  font-size: 2em;
  font-weight: bold;
}

.end-text {
  margin-top: 10px;
  font-size: 1.2em;
  font-family: "Great Vibes", cursive;
}
</style>

