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
            src="/misc/reviewer-full-star.png"
            alt="Star"
          />
          <img
            v-for="m in (5 - rating)"
            :key="m"
            class="game-rating-star"
            src="/misc/reviewer-empty-star.png"
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
          src="/misc/icon-settings.png"
          alt="Settings"
          @click="emit('deleteCard', {reviewerName:props.reviewerName, gameName:props.gameName})"
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
export interface cardProps {
  iconsrc: string
  rating: number
  gameName: string
  reviewText: string
  reviewerName: string
  timeAgo: string
}
const props = withDefaults(defineProps<cardProps>(), {
  rating: 5
})
const emit=defineEmits(['deleteCard']);
</script>