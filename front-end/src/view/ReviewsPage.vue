<script setup lang="ts">
import LatestReviewCard from "@/components/LatestReviewCard.vue";
import SideNav from "@/components/SideNav.vue";
import ProfileHeader from "@/components/ProfileHeader.vue";
import AddReviewModal from "@/components/AddReviewModal.vue";
import type { cardProps } from "@/components/LatestReviewCard.vue";
import { computed, reactive, ref } from "vue";

const filter = ref("");
const showAddModal = ref(false);

const reviewCards = reactive<cardProps[]>([
  {
    iconsrc: "/latest-reviews/game1.jpg",
    rating: 5,
    gameName: "Disney Dreamlight Valley",
    reviewText: "My girlfriend liked it. I guess it’s alright.",
    reviewerName: "MarineM52",
    timeAgo: "1 Hour Ago",
  },
  {
    iconsrc: "/latest-reviews/game2.avif",
    rating: 5,
    gameName: "Fire Emblem Engage",
    reviewText: "Did I freak out a little when meeting Ike? Yes, very much so",
    reviewerName: "MimchetoBG",
    timeAgo: "2 Hours Ago",
  },
  {
    iconsrc: "/latest-reviews/game3.jpg",
    rating: 5,
    gameName: "Dead by Daylight",
    reviewText: "I paid for the game. Now I still have to pay for skins.",
    reviewerName: "Shredrox",
    timeAgo: "4 Hour Ago",
  },
]);

const addNewReview = (review: cardProps) => {
  reviewCards.push(review);
  showAddModal.value = false;
};

const deleteCard = (index: number) => {
  reviewCards.splice(index, 1);
};

const filteredCards = computed(() => {
  return reviewCards.filter(
    (card) =>
      card.gameName.toLowerCase().includes(filter.value.toLowerCase()) ||
      card.reviewText.toLowerCase().includes(filter.value.toLowerCase())
  );
});
</script>

<template>
  <div style="margin-left: 100px">
    <ProfileHeader
      @filterChanged="
        (e) => {
          filter = e;
        }
      "
      @add-card="showAddModal = true"
    />
    <SideNav />
    <AddReviewModal
      v-if="showAddModal"
      @add-review="addNewReview"
      @close="showAddModal = false"
    />
    <section id="section-latest">
      <div class="section-title">Latest</div>
      <template v-for="(card, index) in reviewCards">
        <LatestReviewCard
          v-bind="card"
          @deleteCard="deleteCard(index)"
          v-if="
            card.gameName.toLowerCase().includes(filter.toLocaleLowerCase())
          "
          :iconsrc="card.iconsrc"
          :rating="card.rating"
          :gameName="card.gameName"
          :reviewText="card.reviewText"
          :reviewerName="card.reviewerName"
          :timeAgo="card.timeAgo"
        />
      </template>
    </section>
  </div>
</template>
