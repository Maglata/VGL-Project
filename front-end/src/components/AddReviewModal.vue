<script setup lang="ts">
import { ref } from "vue";
import type { cardProps } from "./LatestReviewCard.vue";

const emit = defineEmits(["add-review", "close"]);

const newReview = ref<cardProps>({
  iconsrc: "",
  rating: 1,
  gameName: "",
  reviewText: "",
  reviewerName: "",
  timeAgo: "Just now",
});

const submitReview = () => {
  emit("add-review", { ...newReview.value });
  emit("close");
  // Reset form
  newReview.value = {
    iconsrc: "",
    rating: 1,
    gameName: "",
    reviewText: "",
    reviewerName: "",
    timeAgo: "Just now",
  };
};
</script>

<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>Add New Review</h2>
      <form @submit.prevent="submitReview">
        <div class="form-group">
          <label>Game Image URL:</label>
          <input class="search-field" v-model="newReview.iconsrc" required />
        </div>
        <div class="form-group">
          <label>Rating (1-5):</label>
          <input
            class="search-field"
            type="number"
            v-model="newReview.rating"
            min="1"
            max="5"
            required
          />
        </div>
        <div class="form-group">
          <label>Game Name:</label>
          <input class="search-field" v-model="newReview.gameName" required />
        </div>
        <div class="form-group">
          <label>Review:</label>
          <textarea
            class="search-field"
            v-model="newReview.reviewText"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label>Reviewer Name:</label>
          <input
            class="search-field"
            v-model="newReview.reviewerName"
            required
          />
        </div>
        <div class="button-group">
          <button class="login-button" type="submit">Add Review</button>
          <button
            class="unselected-button"
            type="button"
            @click="$emit('close')"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: linear-gradient(351.22deg, #1a1a1a 55.25%, #2b2b2b 96.61%);
  padding: 20px;
  border-radius: 8px;
  width: 500px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
}

.button-group {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
</style>
