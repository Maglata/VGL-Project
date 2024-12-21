<template>
  <div class="latest-card">
    <div class="card-left-section">
      <div class="latest-img-container">
        <img class="latest-image" :src="iconsrc" alt="Game Review Image" />
        <div class="latest-overlay"></div>
      </div>
      <div class="latest-game-info">
        <div class="game-rating">
          <img
            v-for="n in rating"
            :key="n"
            class="game-rating-star"
            src="./icons/misc/reviewer-full-star.png"
            alt="Star"
          />
          <img
            v-for="m in (5 - rating)"
            :key="m"
            class="game-rating-star"
            src="./icons/misc/reviewer-empty-star.png"
            alt="Star"
          />
        </div>
        <div class="latest-game-name">{{ gameName }}</div>
      </div>
    </div>
    <div class="card-right-section">
      <div class="latest-review-container">
        <div class="latest-review">
          {{ reviewText }}
        </div>
        <img
          class="latest-settings"
          src="./icons/misc/icon-settings.png"
          alt="Settings"
        />
      </div>
      <div class="review-info">
        <div class="review-name">{{ reviewerName }}</div>
        <div class="review-time">{{ timeAgo }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  iconsrc: string
  rating: number
  gameName: string
  reviewText: string
  reviewerName: string
  timeAgo: string
}
const props = withDefaults(defineProps<Props>(), {
  rating: 5
})
</script>

<!-- filepath: /s:/Projects/VGL-Project/front-end/vgl/src/components/LatestReviewCard.vue -->
<!-- ...existing code... -->
<style scoped>
/* From reviews.css relevant to .latest-card, etc. */

.latest-card {
  display: flex;
  gap: 2rem;
  width: 100%;
  height: 20%;
  max-height: 250px;
  background: rgba(111, 111, 111, 0.18);
  border-radius: 10px;
}

.card-left-section,
.card-right-section {
  position: relative;
  padding: 1rem;
}

.card-left-section {
  width: 50%;
}

.card-right-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.latest-img-container {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 10px;
}

.latest-image {
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 10px;
}

.latest-overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.627083) 69.36%);
}

.latest-game-info {
  position: absolute;
  bottom: 0;
  padding: 0 0 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.latest-game-name {
  color: var(--color-white);
  font-weight: 500;
  font-size: 2rem;
}

.game-rating {
  display: flex;
  gap: 0.6rem;
}

.latest-review-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.latest-review {
  color: var(--color-white);
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 2.5rem;
  max-width: 80%;
}

.latest-settings {
  box-sizing: content-box;
  padding: 0.5rem 1rem 0 0;
  max-width: 5px;
  max-height: 30px;
  cursor: pointer;
  transition: scale 0.3s ease-in-out;
}
.latest-settings:hover {
  scale: 1.2;
}

.review-info {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.review-name {
  color: var(--color-gray);
  font-size: 1.5rem;
  font-weight: 300;
}

.review-time {
  color: var(--color-gray);
  font-size: 1.5rem;
  font-weight: 300;
}
</style>