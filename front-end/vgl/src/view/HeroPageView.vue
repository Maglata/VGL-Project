<script setup lang="ts">
import Header from '@/components/Header.vue';
import LoginForm from '@/components/LoginForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isVisible =  ref(false)
const loginSelected = ref(false)
const router = useRouter();
const showModal = (isLogin : boolean) => {
  isVisible.value = true;
  loginSelected.value = isLogin;
  document.body.classList.add("overflow-hidden");
}
const closeModal = () => {
  isVisible.value = false;
  document.body.classList.remove("overflow-hidden");
}
const toggleForm = () => {
  loginSelected.value = !loginSelected.value;
}
const handleSubmit = () => {
  router.push('/reviews');
}
</script>

<template>
  <Header @show-login="showModal(true)" @show-signup="showModal(false)"></Header>
  <!-- Background -->
  <img class="heropage-background" src="/heropage/gifche.gif" alt="" />
  <div class="heropage-background-overlay"></div>

  <LoginForm v-if="isVisible" @close-modal="closeModal" :login-selected="loginSelected" @toggle-form="toggleForm" @handle-submit="handleSubmit"></LoginForm>

  <!-- Main Content -->
  <main id="main-content">
    <!-- Hero Section -->
    <section id="section-hero">
      <div class="section-hero-title">
        Discover your next gaming obsession with us
      </div>
      <div class="section-hero-buttons">
        <button class="button-join-us sign-up" @click="showModal(false)">Join us &nbsp; &#8599;</button>
        <a href="#section-learn-more">
        <button class="button-learn-more">Learn More</button>
        </a>
      </div>
    </section>

    <!-- Learn More Section -->
    <section id="section-learn-more">
      <!-- Joycon Picture -->
      <img
        class="learn-more-background"
        src="/heropage/background2.png"
        alt=""
      />
      <!-- Collect ... -->
      <div class="test">
        <div class="learn-more-title width-max">Collect Discover Connect</div>
      </div>
      <!-- Keep Track... -->
      <div class="learn-more-info">
        <div class="learn-more-title">Keep track of your games</div>
        <div class="learn-more-details">
          From nostalgic classics to the latest blockbusters, we've curated a
          treasure trove of gaming experiences for every taste and preference.
        </div>
        <div class="learn-more-start sign-up" @click="showModal(false)">
          Start your journey &nbsp;<span class="learn-more-arrow">&#8594;</span>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section id="section-reviews">
      <div class="review-container">
        <div class="reviews-text">20 000+ reviews</div>
        <!-- Zelda -->
        <div class="review-card">
          <img
            src="/recommendations/game1.jpg"
            alt=""
            class="review-img"
          />
          <div class="review-card-text glass">Olympic57</div>
        </div>
        <!-- League -->
        <div class="review-card">
          <img
            src="/recommendations/game2.jpg"
            alt=""
            class="review-img"
          />
          <div class="review-card-text glass">Beastry</div>
        </div>
        <!-- Nier -->
        <div class="review-card">
          <img
            src="/recommendations/game3.jpg"
            alt=""
            class="review-img"
          />
          <div class="review-card-text glass">Stef</div>
        </div>
        <!-- Stray -->
        <div class="review-card">
          <img
            src="/recommendations/game4.webp"
            alt=""
            class="review-img"
          />
          <div class="review-card-text glass">Gali</div>
        </div>
      </div>
      <div class="review-container">
        <!-- Detroid -->
        <div class="review-card">
          <img
            src="/recommendations/game7.webp"
            alt=""
            class="review-img"
          />
          <div class="review-card-text glass">Hyport77</div>
        </div>
        <!-- Hogwarts -->
        <div class="review-card">
          <img
            src="/recommendations/game6.jpg"
            alt=""
            class="review-img"
          />
          <div class="review-card-text glass">Featurelynk</div>
        </div>
        <!-- GTA V -->
        <div class="review-card">
          <img
            src="/recommendations/game8.jpg"
            alt=""
            class="review-img"
          />
          <div class="review-card-text glass">Anderha38</div>
        </div>
        <!-- Mario Kart 8 -->
        <div class="review-card">
          <img
            src="/recommendations/game9.jpg"
            alt=""
            class="review-img"
          />
          <div class="review-card-text glass">iiChelagii</div>
        </div>
        <div class="reviews-text">From trusted users</div>
      </div>
    </section>

    <!-- Join Us Section -->
    <section id="section-become-part">
      <img class="heropage-background" src="/heropage/gifche2.gif" alt="" />
      <div class="becomepart-background-overlay"></div>
      <div class="section-hero-title">Become a part of our community</div>
      <div class="section-hero-buttons">
        <button class="button-join-us sign-up" @click="showModal(false)">Join us &nbsp; &#8599;</button>
      </div>
    </section>
  </main>
</template>